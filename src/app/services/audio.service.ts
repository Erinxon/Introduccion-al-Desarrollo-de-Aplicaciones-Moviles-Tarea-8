import { Injectable } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';
import { AudioModel } from '../models/audio.models';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  audio: MediaObject;

  constructor(private media: Media,
    private file: File) { }

  recordAudio(path: string){
    this.audio = this.media.create(path.replace(/file:\/\//g, ''));
    this.audio.startRecord();
  }

  stopRecordAudio(){
    this.audio.stopRecord();
    this.audio.release();
    this.audio = null;
  }

  stopAudio(){
    this.audio.stop();
  }

  deleteAudio(audioModel: AudioModel){
    const path = this.file.externalDataDirectory;
    this.file.removeFile(path, audioModel.nombre).then( ()=> {
    });
  }

  deleteAudioAll(audioModel: AudioModel[]){
    audioModel.forEach((a) => {
      this.deleteAudio(a);
    })
  }



}
