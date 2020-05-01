import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProduitService } from 'src/app/produit.service';
import { Router } from '@angular/router';
import { Produit } from 'src/app/produit';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  produits: Observable<Produit[]>;

  constructor(private produitService: ProduitService, private router: Router) {

   }

  ngOnInit(): void {
    this.reloadData();
  }

  
  reloadData() {
    this.produits = this.produitService.getProduitsList();
  }

  deleteProduit(id: number) {
    this.produitService.deleteProduit(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  produitDetails(id: number){
    this.router.navigate(['detailsProduits', id]);
  }
  produitEdit(id: number) {
    this.router.navigate(['editProduits', id]);
  }
}
