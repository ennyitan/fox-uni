import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() headerText!: string
  @Input() image!: string 
  @Input() details!: string 
  @Input() bgColor! : string

  constructor() { }

  ngOnInit(): void {
  }

}
