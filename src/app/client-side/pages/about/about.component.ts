import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  Users!: User[]

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(data=>{
      console.log(data)
      this.Users = data
    })
  }

  
}
