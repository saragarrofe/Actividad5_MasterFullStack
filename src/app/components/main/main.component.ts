import { Component } from '@angular/core';
import { Noticias } from 'src/app/interfaces/noticias';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  arrNoticias: Noticias[] = [];
  contactos: string = "";
  contador: number = 1;
  titulo: string = "";
  fecha: string = "";
  imagen: string = "";
  noticia: string = "";





  guardar(): void {
    let noticias: Noticias = {
      titulo: this.titulo,
      fecha: this.fecha,
      imagen: this.imagen,
      noticia: this.noticia,
      
     
    }

    this.arrNoticias.push(noticias); // estamos llenando el array de noticias
    console.log(this.arrNoticias)
    this.cargarDatos();
    this.contador++;
    
    // esto siguiente lo ponemos para que el espacio nos quede vacío una vez le demos a guardar
    this.titulo = "";
    this.fecha = "";
    this.imagen = "";
    this.noticia = "";
    
    
  }

  cargarDatos(): void {
    this.contactos = "";
    this.arrNoticias.forEach(noticias => {
      this.contactos += `<li>${noticias.titulo} ${noticias.fecha} </li>`
      // this.contactos = this.contactos + `<li>${persona.name} ${persona.surname} </li>` --> ES LO MISMO QUE LO DE ARRIBA
    });

  }



}
