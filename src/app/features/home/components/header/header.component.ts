import { Component, OnInit } from '@angular/core';
import { Header } from '../../models/Home';
import { Anchor, Image } from '../../../../shared/models/Shared';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public image: Image
  public navbar: Anchor[]

  constructor() {
    this.image = {
        src: 'assets/images/logo.png',
        alt: 'Logo avión',
    }
    this.navbar = [
      {
        src: '#hero',
        text:'Home',
        class:'navbar-link'
      },{
        src: '#main',
        text:'Main',
        class:'navbar-link'
      },{
        src: '#gallery',
        text:'Gallery',
        class:'navbar-link'
      }
    ];
  }

  ngOnInit(): void {}
}
