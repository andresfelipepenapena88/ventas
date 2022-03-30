import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subscription } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  unsubscribe: Subscription[] = [];

  constructor(private firestore: AngularFirestore) { }

  getAllProducts(): any {
    this.unsubscribe.push(
      this.firestore.collection<Product>('products').valueChanges().subscribe(resp => {
        console.log(resp);
      })
    );
  }

  closeSubscriptions() {
    this.unsubscribe.forEach(subscription => subscription.unsubscribe());
  }

}
