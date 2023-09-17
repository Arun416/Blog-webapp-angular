import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit, OnDestroy {
  // blogs: any[] = [1, 2, 3, 4, 5, 6];
  private blogSubscription!: Subscription;
  public blogList: any;
  public loading: boolean = false;

  constructor(
    private blogService: BlogService,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.loading = true;
    this.blogSubscription = this.blogService.getBlogs().subscribe((resp) => {
      this.loading = false;
      this.blogList = resp;
    });
  }

  ngOnDestroy(): void {
    this.blogSubscription.unsubscribe();
  }

  public myTrackingfn(index: number, value: any) {
    return value;
  }

  onPreview(id: any) {
    this.router.navigate([id + '/preview']);
  }
}
