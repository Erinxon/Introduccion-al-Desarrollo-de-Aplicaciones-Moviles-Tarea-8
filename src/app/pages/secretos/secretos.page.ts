import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Secreto } from 'src/app/models/secreto.models';
import { PhotoService } from 'src/app/services/photo.service';
import { SecretosService } from 'src/app/services/secretos.service';

@Component({
  selector: 'app-secretos',
  templateUrl: './secretos.page.html',
  styleUrls: ['./secretos.page.scss'],
})
export class SecretosPage implements OnInit {
  secretos: Secreto[];
  loanding: boolean;
  constructor(private secretosService: SecretosService, 
    private alertController: AlertController,
    ) { }

  ngOnInit() {
    this.getSecretos();
  }

  getSecretos(): void {
    this.loanding = true;
    this.secretosService.getSecretos().subscribe(s => {
      this.secretos = s;
      this.loanding = false;
    })
  }

  deleteSecreto(id: number): void {
    this.alertDelete(id).then();
  }

  deleteSecretoAll(): void {
    this.alertDeleteAll().then();
  }

  async alertDelete(id: number) {
    const alert = await this.alertController.create({
      header: 'Confirmar!',
      message: '¿Estás seguro de que quieres eliminar el secreto?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: (blah) => {}
        }, {
          text: 'Si',
          handler: () => {
            this.secretosService.deleteSecreto(id);
          }
        }
      ]
    });
    await alert.present();
  }

  async alertDeleteAll() {
    const alert = await this.alertController.create({
      header: 'Confirmar!',
      message: '¿Estás seguro de que quieres eliminar todos los secretos?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: (blah) => {}
        }, {
          text: 'Si',
          handler: () => {
            this.secretosService.deteleAllSecreto();
          }
        }
      ]
    });
    await alert.present();
  }



}
