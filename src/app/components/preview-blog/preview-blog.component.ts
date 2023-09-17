import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-preview-blog',
  templateUrl: './preview-blog.component.html',
  styleUrls: ['./preview-blog.component.css']
})
export class PreviewBlogComponent implements OnInit {
  blog:any;
  content:any;

  constructor(private blogService:BlogService,
              private routes: ActivatedRoute) {}

  ngOnInit(): void {
    this.fetchBlog();    
  }


  fetchBlog(){
      let id = this.routes.snapshot.params['id']
      this.blogService.getSingleBlog(id).subscribe((res:any)=> this.blog = res.blog)
  }
}
