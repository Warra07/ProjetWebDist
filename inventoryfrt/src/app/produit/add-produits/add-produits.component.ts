import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/produit';
import { Router } from '@angular/router';
import { ProduitService } from 'src/app/produit.service';

@Component({
  selector: 'app-add-produits',
  templateUrl: './add-produits.component.html',
  styleUrls: ['./add-produits.component.css']
})
export class AddProduitsComponent implements OnInit {

  produit: Produit = new Produit();
  submitted = false;

  constructor(private produitService: ProduitService,
    private router: Router) { }

  ngOnInit() {
  }

  newProduit(): void {
    this.submitted = false;
    this.produit = new Produit();
  }

  save() {
    this.produitService.createProduit(this.produit)
      .subscribe(data => console.log(data), error => console.log(error));
    this.produit = new Produit();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/produits']);
  }

}
