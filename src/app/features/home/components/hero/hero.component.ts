import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/Home';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  public hero: Hero;
  constructor() {
    this.hero = {
      img:{
        src: 'https://10mejores.es/wp-content/uploads/2018/10/banner-2.jpg',
        alt: 'Imagen cartel de direcciones'
      },
      description: "Cómete el mundo con Vuela-Hoy y planifica a medida tus vacaciones. Escápate con tu pareja o con la familia, disfruta de un sin fin de experiencias que te esperan. ¡Sonríe, están empezando tus vacaciones!",

    }
   }

  ngOnInit(): void {}

  public mouseOn() {
    this.hero.description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  }

  public mouseOut() {
    this.hero.description = "Cómete el mundo con Vuela-Hoy y planifica a medida tus vacaciones. Escápate con tu pareja o con la familia, disfruta de un sin fin de experiencias que te esperan. ¡Sonríe, están empezando tus vacaciones!"
  }

}
