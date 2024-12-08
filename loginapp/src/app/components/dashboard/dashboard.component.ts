import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  imports: [
    SharedModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  user:any

  constructor(private userService: UserService) { }

  ngOnInit() { }

  getUser() {
    this.userService.getUser().subscribe({
      next: (user: any) => {
        console.log(user);
        this.user=user;
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log('Request completed.');
      }
    });
  }

}
