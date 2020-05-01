import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Seller } from 'src/app/seller';
import { Router } from '@angular/router';
import { SellerService } from 'src/app/seller.service';



@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.css']
})
export class SellersComponent implements OnInit {

  sellers: Observable<Seller[]>;

  constructor(private sellerService: SellerService, private router: Router) {
   }

  ngOnInit(): void {
    this.reloadData();
  }

  
  reloadData() {
    this.sellers = this.sellerService.getSellersList();
  }

  deleteSeller(id: number) {
    this.sellerService.deleteSeller(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  sellerDetails(id: number){
    this.router.navigate(['detailsSellers', id]);
  }
  sellerEdit(id: number) {
    this.router.navigate(['editSellers', id]);
  }
}
