import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from 'src/app/components/models/product.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  products: product []=[];
  columns: string []=[ 'id', 'title', 'price'];
  constructor(
    private http: HttpClient
  ){}

  ngOnInit(): void {
    this.http.get<product[]>(' https://api.escuelajs.co/api/v1/products')
    .subscribe( data =>{
      this.products = data;
    })
  }
}
