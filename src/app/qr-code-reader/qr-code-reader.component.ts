import { Component, ViewChild, ViewEncapsulation, OnInit, AfterViewInit } from '@angular/core';
import { QrScannerComponent } from 'angular2-qrscanner';

@Component({
  selector: 'app-qr-code-reader',
  templateUrl: './qr-code-reader.component.html',
  styleUrls: ['./qr-code-reader.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class QrCodeReaderComponent implements AfterViewInit  {

  constructor() { }
  @ViewChild(QrScannerComponent,{static: true })
  qrScannerComponent: QrScannerComponent ;
 
    ngAfterViewInit() {
        this.qrScannerComponent.getMediaDevices().then(devices => {
            console.log(devices);
            const videoDevices: MediaDeviceInfo[] = [];
            for (const device of devices) {
                if (device.kind.toString() === 'videoinput') {
                    videoDevices.push(device);
                }
            }
            if (videoDevices.length > 0){
                let choosenDev;
                for (const dev of videoDevices){
                    if (dev.label.includes('front')){
                        choosenDev = dev;
                        break;
                    }
                }
                if (choosenDev) {
                    this.qrScannerComponent.chooseCamera.next(choosenDev);
                } else {
                    this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
                }
            }
        });
 
        this.qrScannerComponent.capturedQr.subscribe(result => {
            console.log(result);
        });
    }

}
