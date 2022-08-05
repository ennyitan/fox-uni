import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  cardArray : any[] = []
  parallax :any[]=[]

  constructor(private _apiService: ApiService) { }

  ngOnInit(): void {
    this.cardArray = [
      {
        headerText: 'header1',
        details: 'whatever',
        bgColor: 'orangeBg'
      },
      {
        headerText: 'header2',
        details: 'what is it',
        bgColor: 'blackBg'
      },
      {
        headerText: 'header3',
        details: 'whatever',
        bgColor: 'orangeBg'
      },
      {
        headerText: 'header4',
        details: 'what is it',
        bgColor: 'blackBg'

      }
    ]
    
    this._apiService.getData().subscribe((data)=>{
        console.log(data)
        this.parallax = data
        console.log(this.parallax)
    })
  }

}
