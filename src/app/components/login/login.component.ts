import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;
  loading=false;
  constructor(private fb:FormBuilder, private _snackBar: MatSnackBar, private route: Router) {
    this.form = this.fb.group({
      usuario: ['',Validators.required],
      password: ['',Validators.required]
    })
  }
  ingresar(){
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;
    if(usuario=='admin' && password=='admin'){
      //redirecionamos al dasboard
      this.fakeLoading();
    }else{
      //mostrar mensaje de error
      this.error();
      this.form.reset();
    }
  }
  error(){
    this._snackBar.open('Usuario o contraseña ingresado son invalidos','',{
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom'

  })
  }
  fakeLoading(){
    this.loading=true;
    setTimeout(()=>{
      //redirecionamos al dasboard
      this.route.navigate(['dashboard']);
    },1500)
  }

}
