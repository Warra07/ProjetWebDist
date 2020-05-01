import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './client/clients/clients.component';
import { AddClientsComponent } from './client/add-clients/add-clients.component';
import { EditClientsComponent } from './client/edit-clients/edit-clients.component';
import { DetailsClientsComponent } from './client/details-clients/details-clients.component';
import { EditProduitsComponent } from './produit/edit-produits/edit-produits.component';
import { AddProduitsComponent } from './produit/add-produits/add-produits.component';
import { ProduitsComponent } from './produit/produits/produits.component';
import { OrdersComponent } from './order/orders/orders.component';
import { DetailsOrdersComponent } from './order/details-orders/details-orders.component';
import { AddOrdersComponent } from './order/add-orders/add-orders.component';
import { AddSellersComponent } from './seller/add-sellers/add-sellers.component';
import { EditSellersComponent } from './seller/edit-sellers/edit-sellers.component';
import { SellersComponent } from './seller/sellers/sellers.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [  { path: '', redirectTo: 'menu', pathMatch: 'full' },
{ path: 'clients', component: ClientsComponent },
{ path: 'addClients', component: AddClientsComponent },
{ path: 'editClients/:id', component: EditClientsComponent },
{ path: 'detailsClients/:id', component: DetailsClientsComponent },
{ path: 'produits', component: ProduitsComponent },
{ path: 'addProduits', component: AddProduitsComponent },
{ path: 'editProduits/:id', component: EditProduitsComponent },
{ path: 'orders', component: OrdersComponent },
{ path: 'detailsOrders/:id', component: DetailsOrdersComponent },
{ path: 'addOrders', component: AddOrdersComponent },
{ path: 'addSellers', component: AddSellersComponent },
{ path: 'editSellers/:id', component: EditSellersComponent },
{ path: 'sellers', component: SellersComponent },
{ path: 'menu', component: MenuComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
