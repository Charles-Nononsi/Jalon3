import { Component, OnInit } from '@angular/core';
import { signUp } from '../../data-type';
import { PharmacienService } from '../../services/pharmacien.service';

@Component({
  selector: 'app-pharmacien-auth',
  templateUrl: './pharmacien-auth.component.html',
  styleUrls: ['./pharmacien-auth.component.css']
})
export class PharmacienAuthComponent implements OnInit {
  showLogin = false
  authError: string = '';
  constructor(private pharmacien: PharmacienService) { }


  ngOnInit(): void {
    this.pharmacien.reloadPharmacien()
  }
  signUp(data: signUp): void {
    this.pharmacien.userSignUp(data);
  }

  login(data: signUp): void {
    this.pharmacien.userLogin(data)
    this.pharmacien.isLoginError.subscribe((isError) => {
      if (isError) {
        this.authError = "Email or password is not correct";
      }
    })

  }
  openLogin() {

    this.showLogin = true
  }
  openSignUp() {
    this.pharmacien.reloadPharmacien();
    this.showLogin = false
  }

}
