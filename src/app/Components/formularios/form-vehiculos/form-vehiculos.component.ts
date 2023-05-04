import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-vehiculos',
  templateUrl: './form-vehiculos.component.html',
  styleUrls: ['./form-vehiculos.component.css']
})
export class FormVehiculosComponent {
  vehiculosForm = this.fb.group({
    vehiculo: [null, Validators.required],
    color: [null, Validators.required],
    modelo: [null, Validators.required],
    placa: [null, Validators.required],
    //ejemplo multiples validaciones
    // postalCode: [null, Validators.compose([
    //   Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    // ],
 
  });

  vehiculo:"";
  color:"";
  modelo:"";
  placa:"";

  hasUnitNumber = false;

  states = [
    {name: 'Alabama', abbreviation: 'AL'},
    {name: 'Alaska', abbreviation: 'AK'},
  ];

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    this.vehiculo = this.vehiculosForm.controls['vehiculo'].value;
    this.color =this.vehiculosForm.controls['color'].value;
    this.modelo = this.vehiculosForm.controls['modelo'].value; 
    this.placa = this.vehiculosForm.controls['placa'].value; 
    //alert('Thanks!');
    Swal.fire(
      'Registro exitoso ',
      'Vehiculo ' + this.vehiculo + " con placa  " + this.placa + " almacenado correctamente",
      'success'
    )
  }
}
