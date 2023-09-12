import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { PreviewBlogComponent } from './components/preview-blog/preview-blog.component';
import { BlogComponent } from './components/blog/blog.component';

const routes:Routes = [
  {path:'', redirectTo:'blog',pathMatch:'full'},
  {path:':id/preview',component:PreviewBlogComponent},
  {path:'blog',component:BlogComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
