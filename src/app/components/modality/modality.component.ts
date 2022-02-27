import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Contato } from 'src/app/models/contato';
import { ModalityService } from 'src/app/services/modality.service';

@Component({
  selector: 'app-modality',
  templateUrl: './modality.component.html',
  styleUrls: ['./modality.component.css']
})
export class ModalityComponent implements OnInit {

  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private contatoService: ModalityService,
              private toastr: ToastrService,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.validator();
  }

  public get f(): any
  {
    return this.form.controls;
  }

  public validator(): void
  {
    this.form = this.formBuilder.group({
      nome: ['', Validators.minLength(3)],
      celular: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      cep: ['', Validators.required],
      areaAtuacao: ['', Validators.required],
      faturamento: ['', Validators.required],
      instagram: ['', Validators.required]
    });
  }

  public cadastrarContato(): void
  {
    this.spinner.show();
    this.contatoService.post(this.form.value).subscribe(
      (contato: Contato) => {
        this.toastr.success('Em breve entraremos em contato!');
        console.log("success");
        this.form.reset();
        document.getElementById("social-media")?.scrollIntoView({behavior:'smooth'});
      },
      (error: any) => {
        console.error(error);
      }
    ).add(() => this.spinner.hide());
  }

  public toContato(): void
  {
    document.getElementById("contato")?.scrollIntoView({behavior:'smooth'});
  }
}
