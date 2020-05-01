import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/produit';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from 'src/app/produit.service';

@Component({
  selector: 'app-edit-produits',
  templateUrl: './edit-produits.component.html',
  styleUrls: ['./edit-produits.component.css']
})
export class EditProduitsComponent implements OnInit {


  id: number;
  produit: Produit;
  submitted = false;

  constructor(private route: ActivatedRoute,private router: Router,
    private produitService: ProduitService) { }

  ngOnInit() {
    this.produit = new Produit();

    this.id = this.route.snapshot.params['id'];
    
    this.produitService.getProduit(this.id)
      .subscribe(data => {
        console.log(data)
        this.produit = data;
      }, error => console.log(error));
  }

  updateProduit() {
    this.produitService.updateProduit(this.id, this.produit)
      .subscribe(data => console.log(data), error => console.log(error));
    this.produit = new Produit();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.updateProduit();    
  }

  gotoList() {
    this.router.navigate(['/produits']);
  }

}
