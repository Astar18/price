import { Component,OnInit } from '@angular/core';
import { ApiService } from './service/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'precios';
  datos: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos(): void {
    this.apiService.obtenerDatos().subscribe(
      (data) => {
        this.datos = data;
      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    );
  }
}
