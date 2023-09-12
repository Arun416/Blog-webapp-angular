import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import { BlogComponent } from './components/blog/blog.component';
import { EditBlogComponent } from './components/edit-blog/edit-blog.component';
import { PreviewBlogComponent } from './components/preview-blog/preview-blog.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    BlogComponent,
    EditBlogComponent,
    PreviewBlogComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCardModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
