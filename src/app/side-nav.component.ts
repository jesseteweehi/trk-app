import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trk-side-nav',
  templateUrl: './side-nav.component.html',
  styles: [`
  	md-sidenav-layout {
  		height: 100vh;
  	}

  	md-sidenav {
  		width: 500px;
  	}

  	[md-raised-button] {
  		width: 100%;
  	}
  `]
})
export class SideNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
