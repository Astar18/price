import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaPrecioComponent } from './components/consulta-precio/consulta-precio.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule, HttpClient, HttpClientXsrfModule, HttpXsrfTokenExtractor } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaPrecioComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientXsrfModule,
    FormsModule,
    
  ],
  providers: [
    provideHttpClient(HttpClient, { withFetch: true }), // Habilitar fetch
    { provide: HttpXsrfTokenExtractor, useClass: HttpClientXsrfModule },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
