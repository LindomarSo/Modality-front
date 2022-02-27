import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) { }

  public scrollType = false;
  public fixed = 124;

  ngOnInit() {
  }

  public toHome(): void
  {
    document.getElementById("main")?.scrollIntoView({behavior:'smooth'});
  }

  public toSobre(): void
  {
    document.getElementById("sobre")?.scrollIntoView({behavior:'smooth'});
  }

  public toCases(): void
  {
    document.getElementById("prova-social")?.scrollIntoView({behavior:'smooth'});
  }

  public toServices(): void
  {
    document.getElementById("service")?.scrollIntoView({behavior:'smooth'});
  }

  public toContatos(): void
  {
    document.getElementById('contato')?.scrollIntoView({behavior:'smooth'});
  }

  @HostListener('window:scroll', ['$event']) onload(): void
  {
    if(window.scrollY > 200)
    {
      this.scrollType = true;
      // this.fixed = 80;
    }
    else
    {
      this.scrollType = false;
      // this.fixed = 124;
    }
  }

  public route(): boolean
  {
    return (this.router.url == '/user/dashboard') || this.router.url == '/user/login';
  }
}
