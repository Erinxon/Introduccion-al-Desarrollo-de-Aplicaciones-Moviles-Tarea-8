import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Secreto } from '../models/secreto.models';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
  }

  async get(key: string): Promise<Secreto[]>{
    const personas = await this.storage.get(key);
    return JSON.parse(personas);
  }

  async set(key: string, value: Secreto[]): Promise<void> {
    await this.storage.set(key, JSON.stringify(value));
  }

  async remove(key: string): Promise<void> {
    await this.storage.remove(key);
  }

}
