import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css', providers: [

  ]
})
export class LoginComponent implements OnInit {


  credentials = {
    username: '',
    password: ''
  }

  constructor(private loginService: LoginService) { }

  ngOnInit(): void { }

  onSubmit() {

    if ((this.credentials.username != '' && this.credentials.password != '') && (this.credentials.username != null && this.credentials.password != null)) {
      // token generate
      this.loginService.generateToken(this.credentials).subscribe(
        (response: any) => {
          // success
          console.log("success response ")
          console.log(response.token);

          this.loginService.loginUser(response.token);
          window.location.href = '/dashboard'

        },
        (error) => {
          // error
          console.log("response error ")
          console.log("Username & Password : ", this.credentials.username, this.credentials.password)
          console.log(error);
        }
      )

    } else {
      console.log("Fields are empty!!")
    }
  }
}

