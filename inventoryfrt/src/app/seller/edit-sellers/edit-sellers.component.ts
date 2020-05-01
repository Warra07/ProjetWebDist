import { Component, OnInit } from '@angular/core';
import { Seller } from 'src/app/seller';
import { ActivatedRoute, Router } from '@angular/router';
import { SellerService } from 'src/app/seller.service';

@Component({
  selector: 'app-edit-sellers',
  templateUrl: './edit-sellers.component.html',
  styleUrls: ['./edit-sellers.component.css']
})
export class EditSellersComponent implements OnInit {

  id: number;
  seller: Seller;
  submitted = false;

  constructor(private route: ActivatedRoute,private router: Router,
    private sellerService: SellerService) { }

  ngOnInit() {
    this.seller = new Seller();

    this.id = this.route.snapshot.params['id'];
    
    this.sellerService.getSeller(this.id)
      .subscribe(data => {
        console.log(data)
        this.seller = data;
      }, error => console.log(error));
  }

  updateSeller() {
    this.sellerService.updateSeller(this.id, this.seller)
      .subscribe(data => console.log(data), error => console.log(error));
    this.seller = new Seller();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.updateSeller();    
  }

  gotoList() {
    this.router.navigate(['/sellers']);
  }

}
