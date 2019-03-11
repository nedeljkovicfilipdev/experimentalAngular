import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/PostModel';
import { PostService } from '../../services/post.service'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Post[];

  constructor(private postModelService: PostService) { }

  ngOnInit() {
    this.postModelService.getPost().subscribe(posts => {
      this.posts = posts;
    })
  }

}
