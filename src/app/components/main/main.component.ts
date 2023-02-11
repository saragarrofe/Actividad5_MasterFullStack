import { Component } from '@angular/core';
import { Noticias } from 'src/app/interfaces/noticias';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  arrNoticias: Noticias[] = [];
  pintarTitulo: string = "";
  pintarFecha: string = "";
  pintarImagen: string = "";
  pintarNoticia: string = "";
  contador: number = 1;
  titulo: string = "";
  fecha: string = "";
  imagen: string = "";
  noticia: string = "";





  publicar(): void {
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
    this.pintarTitulo = "";
    this.pintarFecha = "";
    this.pintarImagen = "";
    this.pintarNoticia = "";

    this.arrNoticias.forEach(noticias => {
      this.pintarTitulo += `<li>${noticias.titulo}</li>`
      this.pintarFecha += `<li>${noticias.fecha}</li>`
      this.pintarImagen += `<li>${noticias.imagen}</li>`
      this.pintarNoticia += `<li>${noticias.noticia}</li>`


      // this.contactos = this.contactos + `<li>${persona.name} ${persona.surname} </li>` --> ES LO MISMO QUE LO DE ARRIBA
    });

  }



}
