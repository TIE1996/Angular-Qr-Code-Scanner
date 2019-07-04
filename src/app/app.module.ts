import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { AppComponent } from './app.component';
import { QrCodeReaderComponent } from './qr-code-reader/qr-code-reader.component';

@NgModule({
  declarations: [
    AppComponent,
    QrCodeReaderComponent
  ],
  imports: [
    BrowserModule,
    NgQrScannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
