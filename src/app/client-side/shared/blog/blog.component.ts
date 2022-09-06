import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @Input() headerText!: string
  @Input() details!: string
  @Input() image! : string

  constructor() { }

  ngOnInit(): void {
  }

}
