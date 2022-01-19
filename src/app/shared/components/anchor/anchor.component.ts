import { Component, Input, OnInit } from '@angular/core';
import { Anchor } from '../../models/Shared';

@Component({
  selector: 'app-anchor',
  templateUrl: './anchor.component.html',
  styleUrls: ['./anchor.component.scss']
})
export class AnchorComponent implements OnInit {
  @Input() public anchor!: Anchor
  constructor() { }

  ngOnInit(): void {
  }

}
