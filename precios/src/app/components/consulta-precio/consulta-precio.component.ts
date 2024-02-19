import { Component } from '@angular/core';

@Component({
  selector: 'app-consulta-precio',
  templateUrl: './consulta-precio.component.html',
  styleUrl: './consulta-precio.component.css'
})
export class ConsultaPrecioComponent {
  codigoBarras: string = '';
  resultadoPrecio: any;
  mostrarResultado: boolean = false;

  buscarPrecio() {
    // Simulamos una búsqueda de precio utilizando el código de barras
    // Aquí puedes implementar la lógica real para buscar el precio correspondiente al código de barras en tu sistema
    // Por ahora, simplemente simulamos un resultado estático
    if (this.codigoBarras === '1234567890') {
      this.resultadoPrecio = {
        nombre: 'Producto de ejemplo',
        precio: 100 // Simulamos un precio estático
      };
      this.mostrarResultado = true;

      // Ocultar el resultado después de 10 segundos
      setTimeout(() => {
        this.mostrarResultado = false;
      }, 10000); // 10 segundos
    } else {
      // Limpiamos el resultado si no se encuentra un producto para el código de barras ingresado
      this.resultadoPrecio = null;
      this.mostrarResultado = false;
    }
  }
}
