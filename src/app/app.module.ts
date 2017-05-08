import { PostsService } from './services/posts.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { MdToolbarModule, MdSidenavModule, MdListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { WallPageComponent } from './wall-page/wall-page.component';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './wall-page/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    WallPageComponent,
    HeaderComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MdToolbarModule,
    MdSidenavModule,
    MdListModule,
    BrowserAnimationsModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
