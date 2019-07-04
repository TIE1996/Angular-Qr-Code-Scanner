import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { AppComponent } from './app.component';
import { QrCodeReaderComponent } from './qr-code-reader/qr-code-reader.component';
import { RouterModule, Routes } from '@angular/router';
import { ResultComponent } from './result/result.component';


const appRoutes: Routes = [
  { path: 'result', component:  ResultComponent},
  { path: '**', component: QrCodeReaderComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    QrCodeReaderComponent,
    ResultComponent
  ],
  
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    NgQrScannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
