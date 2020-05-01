package com.inventory.produit;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@Service
public class ProduitService {
     
    @Autowired
    ProduitRepository repository;
     
    public List<Produit> getAllProduits()
    {
        List<Produit> produitList = repository.findAll();
         
        if(produitList.size() > 0) {
            return produitList;
        } else {
            return new ArrayList<Produit>();
        }
    }
     
    public Produit getProduitById(Long id) throws RecordNotFoundException 
    {
        Optional<Produit> produit = repository.findById(id);
         
        if(produit.isPresent()) {
            return produit.get();
        } else {
            throw new RecordNotFoundException("No produit record exist for given id");
        }
    }
     
    public Produit createOrUpdateProduit( Produit entity) throws RecordNotFoundException 
    {
        Optional<Produit> produit = repository.findById(entity.getId());
         
        if(produit.isPresent()) 
        {
            Produit newEntity = produit.get();
            newEntity.setCategorie(entity.getCategorie());
            newEntity.setnom(entity.getnom());
            newEntity.setQuantity(entity.getQuantity());
            newEntity.setPrice(entity.getPrice());
            
 
            newEntity = repository.save(newEntity);
             
            return newEntity;
        } else {
        	System.out.println("hey");
        	System.out.println(entity.getnom());
        	System.out.println(entity.getCategorie());
        	
            entity = repository.save(entity);
             
            return entity;
        }
    } 
     
    public void deleteProduitById(Long id) throws RecordNotFoundException 
    {
        Optional<Produit> produit = repository.findById(id);
         
        if(produit.isPresent()) 
        {
            repository.deleteById(id);
        } else {
            throw new RecordNotFoundException("No produit record exist for given id");
        }
    }
    
    public List<Produit> getProduitByIdCategory(String categorie) {
    	return repository.findByCategorie(categorie);
    }
}
