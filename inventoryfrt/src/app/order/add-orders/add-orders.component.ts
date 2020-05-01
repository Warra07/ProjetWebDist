import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/order';
import { OrderService } from 'src/app/order.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from 'src/app/client';
import { ClientService } from 'src/app/client.service';
import { ProduitsComponent } from 'src/app/produit/produits/produits.component';
import { Produit } from 'src/app/produit';
import { ProduitService } from 'src/app/produit.service';

@Component({
  selector: 'app-add-orders',
  templateUrl: './add-orders.component.html',
  styleUrls: ['./add-orders.component.css']
})
export class AddOrdersComponent implements OnInit {

  order: Order = new Order();
  clients: Observable<Client[]>;
  produits: Produit[];
  savedProduits: Produit[] = [];
  test: Client;
  selectedProduit: Produit;
  submitted = false;

  constructor(private orderService: OrderService,
    private router: Router, private clientService: ClientService, private produitService: ProduitService) { }

  ngOnInit() {
    this.order.client = new Client();
    this.clientService.getClientsList().subscribe(clients =>this.clients = clients);

    this.produitService.getProduitsList().subscribe(produits => this.produits = produits);
    console.log("couccu");
  }

  newOrder(): void {
    this.submitted = false;
    this.order = new Order();
  }

  save() {

    this.savedProduits.forEach(produit => {
      produit.quantity = produit.tempquantity;
      produit.id = null;
    })
    this.order.produits = this.savedProduits
    console.log(this.order);
    this.orderService.createOrder(this.order)
      .subscribe(data => console.log(data), error => console.log(error));
    this.order = new Order();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/orders']);
  }
  addProduit() {
    let contains = false;
    this.savedProduits.forEach(produit=> {
      if(produit == this.selectedProduit) {
        contains = true;
      }
    })
    if(!contains) {
    this.savedProduits.push(this.selectedProduit);
    }
  }

}
