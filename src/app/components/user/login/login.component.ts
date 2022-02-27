import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Login } from 'src/app/models/login';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public model = {} as Login;

  constructor(private accountService: AccountService,
              private toastr: ToastrService,
              private spinner: NgxSpinnerService,
              private router: Router) { }

  ngOnInit() {
  }

  public login(): void
  {
    this.spinner.show();
    this.accountService.login(this.model).subscribe(
      () => {
        this.router.navigateByUrl('/user/dashboard');
      },
      (error: any) => {
        if(error.status == '401')
          this.toastr.error('usuário ou senha inválido!');
        else
          console.error(error);
      }
    ).add(() => this.spinner.hide());
  }
}
