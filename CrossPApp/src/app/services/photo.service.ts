import { Injectable } from '@angular/core';

import { Plugins, CameraResultType,
       Capacitor, FilesystemDirectory,CameraPhoto, CameraSource} from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
const {Camera, Filesystem, Storage} = Plugins;  


@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: Photo[] = [];
  // photo = SafeResourceUrl;

  

  public async addNewToGallery(){
    const capturedPhoto = await Plugins.Camera.getPhoto({
      resultType: CameraResultType.DataUrl, 
      source: CameraSource.Camera,
      quality: 60,
      height: 320,
      width: 200
    });

    this.photos.unshift({
      filepath: "soon",
      webviewPath: capturedPhoto.webPath
    });
    // this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(capturedPhoto && (capturedPhoto.dataUrl));
    // console.log(this.photo);
  }

  constructor() { }
}

interface Photo {
  filepath: string;
  webviewPath: string;
  base64?: string;
}
