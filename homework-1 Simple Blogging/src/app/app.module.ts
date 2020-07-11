import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';

import { ReactiveFormsModule } from '@angular/forms';
import { PostListService } from './post-list.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [PostListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
