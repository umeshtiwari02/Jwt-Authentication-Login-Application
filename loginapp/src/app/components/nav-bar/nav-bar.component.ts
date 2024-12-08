import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {

  user:any
  public loggedIn = false;

  constructor(private loginServer: LoginService) { }

  ngOnInit() {
    this.loggedIn = this.loginServer.isLoggedIn();
  }

  logoutUser() {
    this.loginServer.logout();
    location.reload();
  }

}
