import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/client';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/client.service';

@Component({
  selector: 'app-details-clients',
  templateUrl: './details-clients.component.html',
  styleUrls: ['./details-clients.component.css']
})
export class DetailsClientsComponent implements OnInit {

  id: number;
  client: Client;

  constructor(private route: ActivatedRoute,private router: Router,
    private clientService: ClientService) { }

  ngOnInit() {
    this.client = new Client();

    this.id = this.route.snapshot.params['id'];
    
    this.clientService.getClient(this.id)
      .subscribe(data => {
        console.log(data)
        this.client = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['clients']);
  }
}
