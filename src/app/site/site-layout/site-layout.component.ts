import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss']
})
export class SiteLayoutComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  logOut(){
    this.router.navigate(['/login']), localStorage.clear()
  }

}
