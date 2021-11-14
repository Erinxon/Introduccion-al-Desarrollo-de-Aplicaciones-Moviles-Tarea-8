import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Secretos', url: '/secretos', icon: 'mail' },
    { title: 'Agregar Secretos', url: '/agregar-secreto', icon: 'add' },
  ];
  constructor() {}
}
