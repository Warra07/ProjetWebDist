package com.inventory.produit;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/produits")
public class ProduitController 
{
    @Autowired
    ProduitService service;
 
    @GetMapping
    public ResponseEntity<List<Produit>> getAllProduits() {
        List<Produit> list = service.getAllProduits();
 
        return new ResponseEntity<List<Produit>>(list, new HttpHeaders(), HttpStatus.OK);
    }
    
    @GetMapping(value="/categorie/{categorie}")
    public ResponseEntity<List<Produit>> getProduitByCategorieId(@PathVariable("categorie") String categorie) 
            throws RecordNotFoundException {
    	List<Produit> list = service.getProduitByIdCategory(categorie);
    	
        return new ResponseEntity<List<Produit>>(list, new HttpHeaders(), HttpStatus.OK);
        }

 
    @GetMapping("/{id}")
    public ResponseEntity<Produit> getProduitById(@PathVariable("id") Long id) 
                                                    throws RecordNotFoundException {
        Produit entity = service.getProduitById(id);
 
        return new ResponseEntity<Produit>(entity, new HttpHeaders(), HttpStatus.OK);
    }
 
    @PostMapping
    public ResponseEntity<Produit> createOrUpdateProduit(@RequestBody Produit produit)
                                                    throws RecordNotFoundException {
        Produit updated = service.createOrUpdateProduit(produit);
        return new ResponseEntity<Produit>(updated, new HttpHeaders(), HttpStatus.OK);
    }
 
    @DeleteMapping("/{id}")
    public HttpStatus deleteProduitById(@PathVariable("id") Long id) 
                                                    throws RecordNotFoundException {
        service.deleteProduitById(id);
        return HttpStatus.FORBIDDEN;
    }
 
}