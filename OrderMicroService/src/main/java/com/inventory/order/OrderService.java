package com.inventory.order;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {
     
    @Autowired
    OrderRepository repository;
    ProduitRepository produitrepository;
     
    public List<Order> getAllOrders()
    {
        List<Order> orderList = repository.findAll();
         
        if(orderList.size() > 0) {
            return orderList;
        } else {
            return new ArrayList<Order>();
        }
    }
     
    public Order getOrderById(Long id) throws RecordNotFoundException 
    {
        Optional<Order> order = repository.findById(id);
         
        if(order.isPresent()) {
            return order.get();
        } else {
            throw new RecordNotFoundException("No order record exist for given id");
        }
    }
     
    public Order createOrUpdateOrder(Order entity) throws RecordNotFoundException 
    {
        Optional<Order> order = repository.findById(entity.getId());
         
        if(order.isPresent()) 
        {
            Order newEntity = order.get();
            newEntity.setDate(entity.getDate());
            newEntity.setClient(entity.getClient());

            for(int i=0; i < entity.getProduits().size(); i++) {
            	entity.getProduits().get(i).setOrder(entity);
            }
 
            newEntity = repository.save(newEntity);

            return newEntity;
        } else {
            for(int i=0; i < entity.getProduits().size(); i++) {
            	entity.getProduits().get(i).setOrder(entity);
            }
            entity = repository.save(entity);
            
             
            return entity;
        }
    } 
     
    public void deleteOrderById(Long id) throws RecordNotFoundException 
    {
        Optional<Order> order = repository.findById(id);
         
        if(order.isPresent()) 
        {
            repository.deleteById(id);
        } else {
            throw new RecordNotFoundException("No order record exist for given id");
        }
    } 
}
