import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, ToastController } from '@ionic/angular';
import { Producto } from '../Model/Producto';
import { ProductoServiceService } from '../services/producto-service.service';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.page.html',
  styleUrls: ['./add-producto.page.scss'],
})
export class AddProductoPage implements OnInit {
  producto: Producto = new Producto();
  productoDatos: any;

  constructor(private toastController: ToastController, private navController: NavController,private productoService: ProductoServiceService) { }

  ngOnInit() {
    // this.getProducto();
  }

  regresar(){
    this.navController.navigateRoot('/producto')
  }

  guardarProducto(){
    
    this.productoService.insertarProducto(this.producto)
      .subscribe(
        res => {
          console.log(res);
          this.presentToast(this.producto.nombre_producto);
          this.regresar();
          
        },
        err => console.error(err)
      )
  }


  async presentToast(producto_name: any) {
    const toast = await this.toastController.create({
      message: 'Producto nuevo: '+producto_name,
      duration: 2000
    });
    toast.present();
  }

}
