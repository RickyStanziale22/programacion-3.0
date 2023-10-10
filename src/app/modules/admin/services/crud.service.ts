import { Injectable } from "@angular/core"; //injectable correspondeal servicio
import { Producto } from "src/app/models/producto";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { map } from 'rxjs/operators'; // MAPEA
import { Action } from "rxjs/internal/scheduler/Action";

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private productosCollection: AngularFirestoreCollection<Producto>

  constructor(private database: AngularFirestore) {
    this.productosCollection = database.collection('productos')
   }
//CRUD -> PRODUCTOS
 crearProducto(producto:Producto){
  return new Promise(async(resolve,reject) => {
    try{
      // creamos constante que guarde un nuevo ID
      const idProducto = this.database.createId();

      // se lo asignamos al atributo ID de la interfaz Producto
      producto.idProducto = idProducto;

      const resultado = await this.productosCollection.doc(idProducto).set(producto)

      resolve(resultado);
    }catch (error){
      reject(error);
    }
  })
 }
 obtenerProducto(){
  // snapshotChanges -> tomacaptura del estado de los datos 
  // pipe -> funciona como tuberia, retorna el nuevo arreglo
  // map -> "mapea" o recorre esa nueva información 
  // a -> resguarda la nueva informacion y la envia 
  return this.productosCollection.snapshotChanges().
  pipe(map(Action => Action.map(a => a.payload.doc.data())))
 } 

 //envíamos el ID del producto y la nueva información
 modificarProducto(idProducto: string, nuevaData:Producto){
  return this.database.collection('producto').doc(idProducto).update(nuevaData);
 }

 eliminarProducto(idProducto: string){
  return new Promise ((resolve,reject)=>{
    try{
      const resp = this.productosCollection.doc (idProducto).delete()
      resolve(resp)
    }
    catch(error){
      reject(error)
    }
  })
 }
}

