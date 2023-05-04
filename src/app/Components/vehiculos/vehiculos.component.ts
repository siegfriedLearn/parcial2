import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit{
  //Info tabla
  title:string;
  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;

  constructor(public api: ApiService) { 
    this.dataSource = new MatTableDataSource()
    this.displayedColumns;
    this.title = "Listado de vehiculos"
  }
  ngOnInit(): void {
    this.getAll();
  }

  public async getAll(){
    await this.api.getAll("vehiculos").then((res)=>{
      console.log(res)
      for (let index = 0; index < res.length; index++) {
        this.traerColumnas([res[index]]) ;
      }
      this.dataSource.data=res;
    })
  }

  public traerColumnas(data:[any]){
    this.displayedColumns=[];
    for (let column in data[0]) {
      this.displayedColumns.push(column)
    }
  }
}
