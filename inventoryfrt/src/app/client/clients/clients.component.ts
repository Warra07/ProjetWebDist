import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/client';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Observable<Client[]>;

  constructor(private clientService: ClientService, private router: Router) {

   }

  ngOnInit(): void {
    this.reloadData();
  }

  
  reloadData() {
    this.clients = this.clientService.getClientsList();
  }

  deleteClient(id: number) {
    this.clientService.deleteClient(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  clientDetails(id: number){
    this.router.navigate(['detailsClients', id]);
  }
  clientEdit(id: number) {
    this.router.navigate(['editClients', id]);
  }

}
