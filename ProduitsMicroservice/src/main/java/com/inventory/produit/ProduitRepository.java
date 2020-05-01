package com.inventory.produit;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProduitRepository extends JpaRepository<Produit, Long>{
	
	// Produit findByIdProduit(int idProduit);
    List<Produit> findByCategorie(String categorie);

}
