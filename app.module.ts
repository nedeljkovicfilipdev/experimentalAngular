import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './components/post/post.component';
import { BinaryOperationsComponent } from './components/binary-operations/binary-operations.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FormsModule } from '@angular/forms';
import { ExperimentalArrayComponent } from './components/experimental-array/experimental-array.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    BinaryOperationsComponent,
    LayoutComponent,
    ExperimentalArrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
