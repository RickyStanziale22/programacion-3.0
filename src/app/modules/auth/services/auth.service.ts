import { Injectable } from '@angular/core';
//importamos

import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth:AngularFireAuth) { }

  IniciarSesion(email: string, contrasena: string){
    return this.auth.signInWithEmailAndPassword(email,contrasena);
  }

  CerrarSesion(){
    return this.auth.signOut();
  }

  registrar(email:string,contrasena:string,){
    return this.auth.createUserWithEmailAndPassword(email,contrasena)
  }
  async getUid(){
    //nos genera una promesa, y const user una captura
    const user=await this.auth.currentUser;
    if(user==null){
      return null;
    }else{
      return user.uid
    }
  }
}