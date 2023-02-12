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
    this.primTitulo = "La corresponsal de EL PAÍS en Brasil analiza la situación del país tras el asalto a los tres poderes"
    this.primFecha = "8/2/2023"
    this.primNoticia = "Era su primer día libre después de haber cubierto la muerte de Pelé y su funeral, además de la toma de posesión del nuevo presidente Luiz Inácio Lula da Silva. La corresponsal de EL PAÍS en Brasil, Naiara Galarraga Gortázar, lo aprovechaba comiendo con unos amigos. En el momento del café, sonó el teléfono móvil. No era una WhatsApp o un correo, era una llamada de la redacción. Se le activaron las alertas. Estaban asaltando las sedes del Congreso, la Presidencia y el Tribunal de Justicia, ubicadas en la Plaza de los Tres Poderes de Brasilia. Era el 8 de enero y la periodista tuvo que concluir su descanso de manera precipitada. Galarraga relató la historia completa hace unos días a un grupo de suscriptores de EL PAÍS en un encuentro virtual que forma parte del programa de actividades exclusivas de EL PAÍS+."


    this.segTitulo = "Controlado el incendio forestal en Tortosa, tras quemar 30 hectáreas"
    this.segFecha = "5/2/2023"
    this.segNoticia = "Los Bombers han dado por controlado a las 18.30 de este domingo el incendio que se inició en la medianoche de este sábado para domingo en Bítem, cerca del municipio de Tortosa (Baix Ebre). El fuego ha estado ardiendo en la zona del Coll de l'Alba y ha afectado a unas 30 hectáreas, según ha ido informando Protección Civil y el cuerpo de bomberos a través de sus canales oficiales. Los bomberos han logrado controlar el fuego 18 horas después de que recibieran el aviso del mismo, a las 00.20 horas. Sobre el terreno trabajan 21 dotaciones terrestres y prevén tenerlo extinguido durante la jornada del lunes."

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
      `<li class="card-item">
      <h3 class="titulo">${noticias.titulo}</h3>
      <img class="imagen" src= "${noticias.imagen}">
      <span class="fecha">${noticias.fecha}</span>
      <p class="noticia">${noticias.noticia}</p>
      </li>`

    
    });

  }



}
