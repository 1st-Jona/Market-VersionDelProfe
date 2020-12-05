import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.page.html',
  styleUrls: ['./new-product.page.scss'],
})
export class NewProductPage implements OnInit {

  public product: Product;
  public myForm: FormGroup;
  public validationMessages;

  constructor(private productServices: ProductService, private fb: FormBuilder) {

    this.validationMessages = {
      name: [
          { type: 'required', message: 'Se requiere un nombre de producto.' },
          { type: 'minlength', message: 'El nombred debe ser mayor de tres caracteres.' },
          { type: 'maxlength', message: 'El nombre no debe ser mayor a veinte caracteres.' },
          { type: 'pattern', message: 'El nombre solo puede contener numeros y letras.' }
        ],
      photo: [
          { type: 'required', message: 'Se requiere la ruta o el link de la imagen.' },
          { type: 'pattern', message: 'Formato de link no válido.' }
        ],
      description: [
          { type: 'required', message: 'Se requiere un descripción.' }
        ],
      price: [
          { type: 'required', message: 'Se requiere un precio.' },
          { type: 'pattern', message: 'El precio del producto debe ser mayor a 0.' }
        ],
          };
        }

  ngOnInit() {
    this.myForm = this.fb.group(
      {
        photo: ['',Validators.compose([
          Validators.required,
          Validators.pattern('^https?:[a-zA-Z0-9#$%&/()=._-\]+')

        ])],
        name:['',Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern('[a-zA-Z0-9]+')

        ] )],
        description: ['',Validators.compose([Validators.required, Validators.minLength(3)])],
        price: [0,Validators.compose([
          Validators.pattern('[1-9]+[0-9]*')

        ] )]
      }
    );
  }

  public create(): void{
    this.product = {
      name: this.myForm.controls.name.value,
      photo: this.myForm.controls.photo.value,
      description: this.myForm.controls.description.value,
      price: this.myForm.controls.price.value
    };
    this.productServices.newProduct(this.product);
  }

}
