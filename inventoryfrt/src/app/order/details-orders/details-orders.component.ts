import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from 'src/app/produit';
import { OrderService } from 'src/app/order.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/order';

@Component({
  selector: 'app-details-orders',
  templateUrl: './details-orders.component.html',
  styleUrls: ['./details-orders.component.css']
})
export class DetailsOrdersComponent implements OnInit {

  id: number;
  order: Order;
  produits: Produit[];


  constructor(private route: ActivatedRoute,private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.order = new Order();

    this.id = this.route.snapshot.params['id'];
    
    this.orderService.getOrder(this.id)
      .subscribe(data => {
        console.log(data)
        this.order = data;
        this.produits =  this.order.produits;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['orders']);
  }
}
