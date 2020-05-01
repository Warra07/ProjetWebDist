import { Component, OnInit } from '@angular/core';
import { Seller } from 'src/app/seller';
import { SellerService } from 'src/app/seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-sellers',
  templateUrl: './add-sellers.component.html',
  styleUrls: ['./add-sellers.component.css']
})
export class AddSellersComponent implements OnInit {

  seller: Seller = new Seller();
  submitted = false;

  constructor(private sellerService: SellerService,
    private router: Router) { }

  ngOnInit() {
  }

  newSeller(): void {
    this.submitted = false;
    this.seller = new Seller();
  }

  save() {
    this.sellerService.createSeller(this.seller)
      .subscribe(data => console.log(data), error => console.log(error));
    this.seller = new Seller();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/sellers']);
  }
}
