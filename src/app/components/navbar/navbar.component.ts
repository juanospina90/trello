import { Component, OnInit } from '@angular/core';
import { faClose, faBell, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  isOpen = false;
  isOpenBody = false;
  faClose = faClose;
  faBell = faBell;
  faInfoCircle = faInfoCircle;
  constructor() {}

  ngOnInit(): void {}
}
