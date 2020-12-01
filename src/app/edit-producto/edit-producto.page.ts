import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { ProductoServiceService } from '../services/producto-service.service';
import { Producto } from '../Model/Producto';

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.page.html',
  styleUrls: ['./edit-producto.page.scss'],
})
export class EditProductoPage implements OnInit {

  precio_producto: any;
  nombre_producto: any;
  id_producto: any;
  productos: Producto = new Producto();



  constructor(private toastController: ToastController, private navController: NavController,private productoService: ProductoServiceService) { }

  ngOnInit() {
    this.loadDataProductos();
  }

  loadDataProductos(){
    this.id_producto = localStorage.getItem("id_producto");
    this.productos.nombre_producto = localStorage.getItem("nombre_producto");
    this.precio_producto = localStorage.getItem("precio_producto");
    this.productos.precio_producto = this.precio_producto;
  }

  editarProducto(){
    console.log(this.productos);
    this.productoService.updateProducto(this.productos, this.id_producto).subscribe(data =>{
      this.regresar();
      this.presentToast();
    })
  }
  
  regresar(){
    this.navController.navigateRoot('/producto')
  }
  
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Producto Editado..!',
      duration: 2000
    });
    toast.present();
  }

}
