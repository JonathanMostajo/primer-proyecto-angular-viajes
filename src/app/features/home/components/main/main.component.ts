import { Component, OnInit } from '@angular/core';
import { Main } from '../../models/Home'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public main: Main[];
  constructor() { 
    this.main = [
      {
        title: 'Bali',
        text: 'Indonesia',
        img: {
          src:'../../../../../assets/images/Bali.jpg', alt: 'Foto Bali'
        }
      },
      {
        title: 'Florencia',
        text: 'Italia',
        img: {
          src:'../../../../../assets/images/Florencia.jpg', alt: 'Foto Florencia'
        }
      },{
        title: 'Dubai',
        text: 'Emiratos Árabes Unidos',
        img: {
          src:'../../../../../assets/images/dubai.jpg', alt: 'Foto Dubai'
        }
      },{
        title: 'París',
        text: 'Francia',
        img: {
          src:'../../../../../assets/images/Paris.jpg', alt: 'Foto París'
        }
      },{
        title: 'San-Petersburgo',
        text: 'Rusia',
        img: {
          src:'../../../../../assets/images/san-petersburgo.jpg', alt: 'Foto San-Petersburgo'
        }
      },{
        title: 'Tokio',
        text: 'Japón',
        img: {
          src:'../../../../../assets/images/tokio.jpg', alt: 'Foto Tokio'
        }
      },{
        title: 'Punta Cana',
        text: 'República Dominicana',
        img: {
          src:'../../../../../assets/images/punta-cana.jpg', alt: 'Foto Punta Cana'
        }
      },{
        title: 'Lisboa',
        text: 'Portugal',
        img: {
          src:'../../../../../assets/images/Lisboa.jpg', alt: 'Foto Lisboa'
        }
      },{
        title: 'Roma',
        text: 'Italia',
        img: {
          src:'../../../../../assets/images/Roma.jpg', alt: 'Foto Roma'
        }
      },{
        title: 'Praga',
        text: 'República Checa',
        img: {
          src:'../../../../../assets/images/Praga.jpg', alt: 'Foto Praga'
        }
      },
    ];
  }

  ngOnInit(): void {
    
  }

}
