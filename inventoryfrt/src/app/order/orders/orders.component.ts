import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/order';
import { OrderService } from 'src/app/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Observable<Order[]>;

  constructor(private orderService: OrderService, private router: Router) {

   }

  ngOnInit(): void {
    this.reloadData();
  }

  
  reloadData() {
    this.orders = this.orderService.getOrdersList();
  }

  deleteOrder(id: number) {
    this.orderService.deleteOrder(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  orderDetails(id: number){
    this.router.navigate(['detailsOrders', id]);
  }

}
