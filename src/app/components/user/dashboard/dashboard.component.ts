import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Contato } from 'src/app/models/contato';
import { Pagination, PaginationResult } from 'src/app/models/Pagination';
import { AccountService } from 'src/app/services/account.service';
import { ModalityService } from 'src/app/services/modality.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public contatos: Contato[] = [];
  public pagination = { } as Pagination;

  constructor(private modaliteService: ModalityService,
              private toastr: ToastrService,
              private spinner: NgxSpinnerService,
              private accountService: AccountService,
              private router: Router) { }

  ngOnInit() {
    this.pagination = { currentPage: 1, pageSize: 3, totalItems: 1 } as Pagination;
    this.getAllContatos();
  }

  public getAllContatos(): void
  {
    this.spinner.show();
    this.modaliteService.getAllContatos(this.pagination.currentPage, this.pagination.pageSize).subscribe(
      (contatos: PaginationResult<Contato[]>) => {
        this.contatos = contatos.result;
        this.pagination = contatos.pagination;
        this.toastr.success('Contatos carregados.');
      },
      (error: any) => {
        if(error.status == '401')
        {
          localStorage.removeItem('user')
          this.router.navigate(['/user/login']);
        }
        else
          console.error(error);

        this.toastr.error('Erro ao carregar contatos.');
      }
    ).add(() => this.spinner.hide());
  }

  public logout():void
  {
    this.accountService.logout();
    this.router.navigateByUrl('/user/login');
  }

  public pageChanged(event: any): void
  {
    this.pagination.currentPage = event.page;
    this.pagination.pageSize = event.itemsPerPage;
    this.getAllContatos()
  }
}
