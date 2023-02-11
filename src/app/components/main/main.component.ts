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
  pintarEntrada: string = "";
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

    this.arrNoticias.push(noticias); // lleno el array de noticias
    this.cargarDatos();
    this.contador++;
    
    // para que quede vacio al guardar
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
    this.pintarEntrada = "";


    this.arrNoticias.forEach(noticias => {
      this.pintarEntrada += 
      `<li>
      <h3>${noticias.titulo}</h3>
      <p>${noticias.fecha}</p>
      <img src= "${noticias.imagen}">
      <p>${noticias.noticia}</p>
      </li>`

    
    });

  }



}
