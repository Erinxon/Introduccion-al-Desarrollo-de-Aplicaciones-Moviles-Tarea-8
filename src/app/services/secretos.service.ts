import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AudioModel } from '../models/audio.models';
import { Secreto } from '../models/secreto.models';
import { AudioService } from './audio.service';
import { LocalStorageService } from './local-storage.service';
import { PhotoService } from './photo.service';

@Injectable({
  providedIn: 'root'
})
export class SecretosService {
  private secretos: Secreto[] = [];
  private secretos$ = new BehaviorSubject<Secreto[]>([]);

  constructor(private localStorageService: LocalStorageService,
    private photoService: PhotoService,
    private audioService: AudioService) { 
    this.carcarSecretos();
  }

  getSecretos(): Observable<Secreto[]> {
    return this.secretos$.asObservable();
  }

  getNextId(): number {
    let nextId =  this.secretos.length > 0 ? this.secretos[this.secretos.length - 1].id + 1 : 1;
    return nextId;
  }

  addSecreto(secreto: Secreto): void {
    this.secretos = [...this.secretos, secreto];
    this.SetSubjectAndLocalStorage();
  }

  deleteSecreto(id: number): void {
    const secreto = this.secretos.find(s => s.id === id);
    this.audioService.deleteAudio(secreto.audio);
    this.secretos = this.secretos.filter(s => s.id !== id);
    this.SetSubjectAndLocalStorage();
  }

  deteleAllSecreto(): void {
    const audios: AudioModel[] = this.secretos.map((s) => s.audio);
    this.audioService.deleteAudioAll(audios);
    this.secretos = [];
    this.SetSubjectAndLocalStorage();
  }

  private carcarSecretos() {
    this.localStorageService.get('secretos').then((s) => {
      this.secretos = s ? s : [];
      this.secretos$.next(this.secretos);
    }).catch((e) => { 
      console.log('Error: ',e)
    });
  }

  private SetSubjectAndLocalStorage(): void {
    this.localStorageService.remove('secretos');
    this.localStorageService.set('secretos', this.secretos);
    this.carcarSecretos();
  }
}
