import { Client } from './client';
import { Produit } from './produit';

export class Order {
    id: number;
    date: Date;
    client: Client;
    produits: Produit[];
}