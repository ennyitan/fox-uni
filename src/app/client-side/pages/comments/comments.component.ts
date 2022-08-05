import { Component, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';
import { Comments } from 'src/app/interface/comments';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  commentForm!:FormGroup
  registered = false
 
  constructor(private commentService: CommentsService) { }

  ngOnInit(): void {
    this.onCreateComment()
  }

  onCreateComment(){
    this.commentForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      body: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(4)])
    })
  }
  commentSubmit(dComment:any){
    this.registered = true
   if(this.commentForm.invalid){
    return 
   }else {
    console.log(dComment)
    // dComment.postId = 2
    this.commentService.createComment(dComment).subscribe(data=>{
      console.log(data)
    })
   }
  }
}