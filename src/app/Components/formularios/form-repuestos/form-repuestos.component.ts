import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-repuestos',
  templateUrl: './form-repuestos.component.html',
  styleUrls: ['./form-repuestos.component.css']
})
export class FormRepuestosComponent {
  repuestosForm = this.fb.group({
    vehiculo: [null, Validators.required],
    tipo: [null, Validators.required],
    valor: [null, Validators.required],
    //ejemplo multiples validaciones
    // postalCode: [null, Validators.compose([
    //   Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    // ],
 
  });

  vehiculo:"";
  tipo:"";
  valor:"";

  hasUnitNumber = false;

  // states = [
  //   {name: 'Alabama', abbreviation: 'AL'},
  //   {name: 'Alaska', abbreviation: 'AK'},
  // ];

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    this.vehiculo = this.repuestosForm.controls['vehiculo'].value;
    this.tipo =this.repuestosForm.controls['tipo'].value;
    this.valor = this.repuestosForm.controls['valor'].value; 
    //alert('Thanks!');
    Swal.fire(
      'Registro almacenado correctamente ',
      'Caracteristicas ' + this.vehiculo + " " + this.tipo + " " + this.valor,
      'success'
    )
  }
}
