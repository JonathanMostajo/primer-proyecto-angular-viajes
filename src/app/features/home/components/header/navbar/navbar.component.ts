import { Component, Input, OnInit } from '@angular/core';
import { Anchor } from 'src/app/shared/models/Shared';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() public navbar!: Anchor;

  constructor() { }

  ngOnInit(): void {
  }

}
