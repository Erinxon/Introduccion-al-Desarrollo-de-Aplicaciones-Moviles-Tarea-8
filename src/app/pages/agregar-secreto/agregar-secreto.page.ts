import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Secreto } from 'src/app/models/secreto.models';
import { SecretosService } from 'src/app/services/secretos.service';
import { PhotoService } from 'src/app/services/photo.service';
import { File } from '@ionic-native/file/ngx';
import { AudioService } from 'src/app/services/audio.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-agregar-secreto',
  templateUrl: './agregar-secreto.page.html',
  styleUrls: ['./agregar-secreto.page.scss'],
})
export class AgregarSecretoPage implements OnInit {
  form: FormGroup = new FormGroup({});
  audioPath: string = '';
  fileName: string = '';
  isGrabandoAudio: boolean = false;
  isAgregandoImagen: boolean = false;

  constructor(private fb: FormBuilder, 
    private secretosService: SecretosService,
    private photoService: PhotoService,
    private file: File,
    private audioService: AudioService,
    private alertController: AlertController) { 
    this.form =  this.fb.group({
      nombre: ['',Validators.required],
      fecha: ['',Validators.required],
      descripcion: ['',Validators.required],
      foto: [''],
      audio: this.fb.group({
        nombre: [''],
        ruta: [''],
      }),
    });
  }

  ngOnInit() {
  }

  onSubmit(): void {
    if(this.form.value.foto.length > 0){
      const secreto: Secreto = {
        id: this.secretosService.getNextId(),
        ...this.form.value
      };
      this.secretosService.addSecreto(secreto);
      this.form.reset();
    }else{
      this.alert();
    }
  }

  getPicture(): void {
    this.isAgregandoImagen = true;
    this.photoService.takePicture().then(f => {
      this.form.patchValue({
        foto: f
      })
      this.isAgregandoImagen = false;
    });
  }
  
  grabarAudio() {
    this.isGrabandoAudio = true;
    const name = `record_${(new Date()).getTime()}`;
    this.fileName = name + '.mp3';
    this.audioPath = this.file.externalDataDirectory + this.fileName;
    this.audioService.recordAudio(this.audioPath);
  }

  detenerAudio(): void {
    this.audioService.stopRecordAudio();
    this.isGrabandoAudio = false;
    this.form.patchValue({
      audio: {
        nombre: this.fileName,
        ruta: this.audioPath
      }
    })
  }

  async alert() {
    const alert = await this.alertController.create({
      header: 'La foto es requerida',
      message: 'Por favor tome una foto con la camara o seleccione una existente',
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
