import { Injectable } from '@angular/core';
import { Camera, CameraPhoto, CameraResultType} from '@capacitor/camera';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
    return image.webPath;
  };

}
