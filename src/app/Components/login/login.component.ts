import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/Services/login.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = this.fb.group({
    correo: [null, Validators.compose([
      Validators.required, Validators.email])
    ],
    contrasenia: [null, Validators.compose([
      Validators.required, Validators.minLength(3), Validators.maxLength(12)])
    ],
  });

  correo = "";
  contrasenia = ""

  hasUnitNumber = false;

  

  constructor(private fb: FormBuilder, public loginservice:LoginService) {}

  async onSubmit()   {
    this.correo = this.loginForm.controls['correo'].value;
    this.contrasenia = this.loginForm.controls['contrasenia'].value;

    if (this.correo ==="test@test.com" && this.contrasenia === "test") {
      Swal.fire(
        'Login exitoso!',
        'Redireccionando a la página principal',
        'success'
      )
      localStorage.setItem('login','login');
      //this.
      this.loginservice.login.next("login");
    } else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salió mal!',
        footer: 'Intenta con el correo test@test.com y contraseña test'
      })
    }
    
  }
}
