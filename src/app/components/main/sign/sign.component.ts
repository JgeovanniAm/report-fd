import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { IResponse, Imodal } from '../../../interfaces/index';
import { Router } from '@angular/router';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  public displayModal: boolean = false
  public message: {} = {
    title: 'password and user incorrect',
    description: 'it has happened a error accessing your user and password'
  }
  constructor(
    private router: Router,
    private HttpService: HttpService
  ) { 
    this.HttpService = HttpService
  }

  ngOnInit() {
    let token = localStorage.getItem('token')
    if(token){
      this.HttpService.get('/api/access', token).toPromise().then((result) => {
        this.router.navigate(['/home']);
      })
    }
  }

  private getToken(result: IResponse): void {
    localStorage.setItem('token', result.response);
    this.router.navigate(['/home']);
  }

  handleSubmit({ value }: FormGroup): void {
    this.HttpService.post(
      '/api/admin',
      { user: value.userInput, password: value.passwordInput },
    ).toPromise().then((result: IResponse) => {
      this.getToken(result)
    }).catch(err => {
      this.displayModal = true
    })
  }

  closeModal(event): void { // change state from child component
    this.displayModal = event;
  }
}
