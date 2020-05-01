import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './client/clients/clients.component';
import { AddClientsComponent } from './client/add-clients/add-clients.component';
import { EditClientsComponent } from './client/edit-clients/edit-clients.component';
import { DetailsClientsComponent } from './client/details-clients/details-clients.component';
import { OrdersComponent } from './order/orders/orders.component';
import { AddOrdersComponent } from './order/add-orders/add-orders.component';
import { DetailsOrdersComponent } from './order/details-orders/details-orders.component';
import { ProduitsComponent } from './produit/produits/produits.component';
import { AddProduitsComponent } from './produit/add-produits/add-produits.component';
import { EditProduitsComponent } from './produit/edit-produits/edit-produits.component';
import { SellersComponent } from './seller/sellers/sellers.component';
import { AddSellersComponent } from './seller/add-sellers/add-sellers.component';
import { EditSellersComponent } from './seller/edit-sellers/edit-sellers.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'



@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    AddClientsComponent,
    EditClientsComponent,
    DetailsClientsComponent,
    OrdersComponent,
    AddOrdersComponent,
    DetailsOrdersComponent,
    ProduitsComponent,
    AddProduitsComponent,
    EditProduitsComponent,
    SellersComponent,
    AddSellersComponent,
    EditSellersComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
