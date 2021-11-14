import { AudioModel } from "./audio.models";

export interface Secreto {
    id: number;
    nombre: string;
    fecha: Date;
    descripcion: string;
    foto: string;
    audio: AudioModel;
}