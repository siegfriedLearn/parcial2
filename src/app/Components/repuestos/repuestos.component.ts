import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-repuestos',
  templateUrl: './repuestos.component.html',
  styleUrls: ['./repuestos.component.css']
})
export class RepuestosComponent implements OnInit{

  //Info tabla
  title:string;
  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;

  constructor(public api: ApiService) { 
    this.dataSource = new MatTableDataSource()
    this.displayedColumns;
    this.title = "Listado de repuestos"
  }
  ngOnInit(): void {
    this.getAll();
  }

  public async getAll(){
    await this.api.getAll("repuestos").then((res)=>{
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
