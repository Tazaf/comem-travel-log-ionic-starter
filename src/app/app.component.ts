import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { IonicStorageModule, Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [ IonApp, IonRouterOutlet, IonicStorageModule ],
})
export class AppComponent {
  constructor(storage: Storage) {
    storage.create();
  }
}
