import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  linksMenu: Array<any> = [];
  constructor(){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.linksMenu = [
      {
        nombre:'Inicio',
        icono:'uil uil-building',
        router:['/']
      },
      {
        nombre:'¿Quiénes Somos',
        icono:'uil uil-comment-question',
        router:['/','about']
      },
      {
        nombre:'Mensaje Institucional',
        icono:'uil uil-comment-message',
        router:['/','mensaje']
      },
      {
        nombre:'Normativa',
        icono:'uil uil-file-bookmark-alt',
        router:['/','normativa']
      },
      {
        nombre:'Contactanos',
        icono:'uil uil-envelope-minus',
        router:['/','contactanos']
      },
      {
        nombre: 'Noticias',
        icono:'uil uil-newspaper',
        router:['/','noticias']
      },
      {
        nombre: 'UTL',
        icono:'uil uil-create-dashboard',
        router:['/','UTL']
      }
    ];
  }
}
