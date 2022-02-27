import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public toContato(): void
  {
    document.getElementById("contato")?.scrollIntoView({behavior:'smooth'});
  }
}
