import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SvComponent } from './sv/sv.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { PdfPageComponent } from './pdf-page/pdf-page.component';
import { PdfContentComponent } from './pdf-content/pdf-content.component';

@NgModule({
  declarations: [
    AppComponent,
    SvComponent,
    PdfViewerComponent,
    PdfPageComponent,
    PdfContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
