package com.inventory.order;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface ProduitRepository extends JpaRepository<Produit, Long> {

}
