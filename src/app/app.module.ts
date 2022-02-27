import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ModalityComponent } from './components/modality/modality.component';
import { NavComponent } from './shared/nav/nav.component';
import { TituloComponent } from './shared/titulo/titulo.component';
import { UserComponent } from './components/user/user.component';
import { DashboardComponent } from './components/user/dashboard/dashboard.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { NgxMaskModule } from 'ngx-mask'
import { LoginComponent } from './components/user/login/login.component';
import { AccountService } from './services/account.service';
import { ModalityService } from './services/modality.service';
import { JwtInterceptor } from './interceptor/jwt.interceptor';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { HomeComponent } from './components/modality/home/home.component';
import { SobreComponent } from './components/modality/sobre/sobre.component';
import { FeedbackComponent } from './components/modality/feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalityComponent,
    NavComponent,
    TituloComponent,
    UserComponent,
    DashboardComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    SobreComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    PaginationModule.forRoot(),
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    }),
    ToastrModule.forRoot({
      progressBar: true,
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })
  ],
  providers: [
    ToastrService,
    NgxSpinnerService,
    AccountService,
    ModalityService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
