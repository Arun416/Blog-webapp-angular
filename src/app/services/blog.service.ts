import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }


  getBlogs() {
      return this.http.get('https://api.slingacademy.com/v1/sample-data/blog-posts')
  }

  getSingleBlog(post_id:any) {
     return this.http.get('https://api.slingacademy.com/v1/sample-data/blog-posts/'+post_id)
  }
}
