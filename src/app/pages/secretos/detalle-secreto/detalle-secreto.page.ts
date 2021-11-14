import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Secreto } from 'src/app/models/secreto.models';
import { SecretosService } from 'src/app/services/secretos.service';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';
import { AudioService } from 'src/app/services/audio.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-secreto',
  templateUrl: './detalle-secreto.page.html',
  styleUrls: ['./detalle-secreto.page.scss'],
})
export class DetalleSecretoPage implements OnInit {
  secreto: Secreto;
  isPlayingAudio: boolean = false;
  audio: MediaObject;
  constructor(
    private activatedRoute: ActivatedRoute,
    private secretoService: SecretosService,
    private audioService: AudioService,
    private media: Media,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    const id = +this.activatedRoute.snapshot.params['id'];
    this.secretoService.getSecretos().subscribe((s) => {
      const secreto = s.find((s) => s.id === id);
      this.secreto = secreto;
    });
  }

  playAudio() {
    try {
      this.isPlayingAudio = true;
      this.audio = this.media.create(this.secreto.audio.ruta);
      this.audio.onStatusUpdate.subscribe((e) => {
        if(e.toString() === '4'){
          this.isPlayingAudio = false;
          this.alertDelete("Audio finalizado");
          this.audio.release();
        }
      });
      this.audio.play();
      this.audio.setVolume(1);
    } catch (error) {
      this.isPlayingAudio = false;
    }
  }

  stopPlayAudio() {
    try {
      this.audioService.stopAudio();
      this.audio.release();
      this.isPlayingAudio = false;
    } catch (error) {
      this.isPlayingAudio = false;
    }
  }

  async alertDelete(text: string) {
    const alert = await this.alertController.create({
      header: text,
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          handler: (blah) => {}
        }
      ]
    });
    await alert.present();
  }

}
