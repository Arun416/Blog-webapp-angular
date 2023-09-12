import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
   blogs:any[] = [1,2,3,4,5,6]
   blogsList:any;
    constructor(private blogService:BlogService,private router:Router){}
    ngOnInit(): void {
      this.blogService.getBlogs().subscribe(resp=> this.blogsList = resp)
    }

    onPreview(id:any) {
      this.router.navigate([id+'/preview'])
    }
}
