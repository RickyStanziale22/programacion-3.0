import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// COMPONENTES GLOBALES
import { SharedModule } from './shared/shared.module';
//FIREBASE
//nos conectamos con la BD
import { environment } from 'src/environments/environments';
import { AngularFireModule } from '@angular/fire/compat'; //cloud firestore
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; //autentificacion
import { AngularFireStorageModule } from '@angular/fire/compat/storage';//imagenes1



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }