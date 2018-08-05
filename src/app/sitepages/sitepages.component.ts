import { Component, OnInit } from '@angular/core';

declare function init_plugins();

@Component({
  selector: 'app-sitepages',
  templateUrl: './sitepages.component.html',
  styles: []
})
export class SitepagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
