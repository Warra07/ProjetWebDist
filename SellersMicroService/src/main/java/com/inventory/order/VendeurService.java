package com.inventory.order;

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
public class VendeurService {
     
    @Autowired
    VendeurRepository repository;
     
    public List<Vendeur> getAllVendeurs()
    {
        List<Vendeur> clientList = repository.findAll();
         
        if(clientList.size() > 0) {
            return clientList;
        } else {
            return new ArrayList<Vendeur>();
        }
    }
     
    public Vendeur getVendeurById(Long id) throws RecordNotFoundException 
    {
        Optional<Vendeur> client = repository.findById(id);
         
        if(client.isPresent()) {
            return client.get();
        } else {
            throw new RecordNotFoundException("No client record exist for given id");
        }
    }
     
    public Vendeur createOrUpdateVendeur(Vendeur entity) throws RecordNotFoundException 
    {
        Optional<Vendeur> client = repository.findById(entity.getId());
         
        if(client.isPresent()) 
        {
            Vendeur newEntity = client.get();
            newEntity.setNom(entity.getNom());
            newEntity.setEmail(entity.getEmail());
 
            newEntity = repository.save(newEntity);
             
            return newEntity;
        } else {
            entity = repository.save(entity);
             
            return entity;
        }
    } 
     
    public void deleteVendeurById(Long id) throws RecordNotFoundException 
    {
        Optional<Vendeur> client = repository.findById(id);
         
        if(client.isPresent()) 
        {
            repository.deleteById(id);
        } else {
            throw new RecordNotFoundException("No client record exist for given id");
        }
    } 
}
