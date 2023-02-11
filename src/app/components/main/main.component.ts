import { Component, EventEmitter, Output } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Noticias } from 'src/app/interfaces/noticias';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  /* Propiedades funciones */
  arrNoticias: Noticias[] = [];
  pintarTitulo: string = "";
  pintarFecha: string = "";
  pintarImagen: string = "";
  pintarNoticia: string = "";
  pintarEntrada: string = "";
  contador: number = 1;


  /* Propiedades noticia */
  titulo: string = "";
  fecha: string = "";
  imagen: string = "";
  noticia: string = "";


  /* Noticias pintadas */
  primTitulo: string = "";
  primFecha: string = "";
  primNoticia: string = "";

  segTitulo: string = "";
  segFecha: string = "";
  segNoticia: string = "";
  

  constructor() {
    this.primTitulo = "Soy el primer titulo"
    this.primFecha = "Soy soy la primera fecha"
    this.primNoticia = "Soy soy la primera noticia"


    this.segTitulo = "Soy el segundo titulo"
    this.segFecha = "Soy la segunda fecha"
    this.segNoticia = "Soy la segunda noticia"

  }

  publicar(): void {
    let noticias: Noticias = {
      titulo: this.titulo,
      imagen: this.imagen,
      fecha: this.fecha,
      noticia: this.noticia,
    }

    this.arrNoticias.push(noticias); // lleno el array de noticias
    this.cargarDatos();
    this.contador++;
    
    // para que quede vacio al guardar
    this.titulo = "";
    this.imagen = "";
    this.fecha = "";
    this.noticia = "";
    
    
  }

  cargarDatos(): void {
    this.pintarTitulo = "";
    this.pintarImagen = "";
    this.pintarFecha = "";
    this.pintarNoticia = "";
    this.pintarEntrada = "";


    this.arrNoticias.forEach(noticias => {
      this.pintarEntrada += 
      `<li>
      <h3>${noticias.titulo}</h3>
      <img src= "${noticias.imagen}">
      <span>${noticias.fecha}</span>
      <p>${noticias.noticia}</p>
      </li>`

    
    });

  }



}
