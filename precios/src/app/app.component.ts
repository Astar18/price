import { Component,OnInit } from '@angular/core';
import { ApiService } from './service/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  productos: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getProductos().subscribe(
      (data) => {
        this.productos = data;
      },
      (error) => {
        console.error('Error al obtener productos:', error);
      }
    );
  }
}
