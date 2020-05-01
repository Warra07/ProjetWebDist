package com.inventory.order;


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
@RequestMapping("/vendeurs")
public class VendeurController 
{
    @Autowired
    VendeurService service;
 
    @GetMapping
    public ResponseEntity<List<Vendeur>> getAllVendeurs() {
        List<Vendeur> list = service.getAllVendeurs();
 
        return new ResponseEntity<List<Vendeur>>(list, new HttpHeaders(), HttpStatus.OK);
    }
    
    @GetMapping("/test")
    public String getTestVendeurs() throws RecordNotFoundException {
    	this.service.createOrUpdateVendeur(new Vendeur("test", "test"));
    	 
        return "test";
    }
 
 
    @GetMapping("/{id}")
    public ResponseEntity<Vendeur> getVendeurById(@PathVariable("id") Long id) 
                                                    throws RecordNotFoundException {
        Vendeur entity = service.getVendeurById(id);
 
        return new ResponseEntity<Vendeur>(entity, new HttpHeaders(), HttpStatus.OK);
    }
 
    @PostMapping
    public ResponseEntity<Vendeur> createOrUpdateVendeur(@RequestBody Vendeur vendeur)
                                                    throws RecordNotFoundException {
        Vendeur updated = service.createOrUpdateVendeur(vendeur);
        return new ResponseEntity<Vendeur>(updated, new HttpHeaders(), HttpStatus.OK);
    }
 
    @DeleteMapping("/{id}")
    public HttpStatus deleteVendeurById(@PathVariable("id") Long id) 
                                                    throws RecordNotFoundException {
        service.deleteVendeurById(id);
        return HttpStatus.FORBIDDEN;
    }
 
}