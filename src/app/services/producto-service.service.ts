import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../Model/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoServiceService {
  producto = 'https://producto-ionic.herokuapp.com/producto/';

  constructor(private http: HttpClient) { }


  getProductos(){
    return this.http.get<object[]>(this.producto + 'lista');
  }
  
  insertarProducto(producto: Producto) {
    return this.http.post(this.producto+'create', producto);
  }
  updateProducto(producto:Producto, id_producto: any){
    return this.http.put<Producto>(this.producto+'update/'+id_producto,producto);
  }

  deleteProducto(id: number) {
    return this.http.delete(this.producto + 'delete/'+id);
  }
}
