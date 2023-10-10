import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Usuario } from 'src/app/models/usuario';
import { FirestoreService } from 'src/app/shared/service/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide = true; //input

  //definimos de forma publica el servicioAuth
  constructor(
    public servicioAuth :AuthService,
    public serviceFirestore:FirestoreService,
    public Router: Router
    ){}
  //importacion del modelo 
  usuarios:Usuario = {
    uid: '',
    email:'',
    nombre:'',
    rol:'',
    contrasena:''
  }
  uid='';
  //creamos coleccion de usuario
  coleccionUsuarios:Usuario[]=[];
  //tomando nuevo registro
  async registrarse(){
    const credenciales = {
      email: this.usuarios.email,
      contrasena: this.usuarios.contrasena
    };
    const res = await this.servicioAuth.registrar(credenciales.email,credenciales.contrasena)
    //metodo then devuelve misma promesa
    .then(res =>{
      alert("Ha agregado un nuevo usuario con exito :)");
      this.Router.navigate(["/inicio"])
    })
    //metodo catch creara un error en caso de que algo salga mal
    .catch(error =>
      alert("Hubo un error a agregar al usuario :( \n"+error)
      );

      //creamos constante UID para el UID que obtengamos
    const uid = await this.servicioAuth.getUid();

    // referenciamos el uid nuevo con el usuario 
    this.usuarios.uid =uid;

    //llamamos función guardaruser
    this.guardarUser();
  }
  //funcion asincronica para guardar usuarios
  async guardarUser(){
    this.serviceFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
    .then(res =>{
      console.log(this.usuarios);
    })
    .catch(error =>{
      console.log('Error=>', error);
    })
  }

  async ngOnInit(){
    const uid = await this.servicioAuth.getUid();
    console.log(uid);
  }
    
  
}