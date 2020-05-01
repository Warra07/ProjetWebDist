import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/client';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/client.service';

@Component({
  selector: 'app-add-clients',
  templateUrl: './add-clients.component.html',
  styleUrls: ['./add-clients.component.css']
})
export class AddClientsComponent implements OnInit {

  client: Client = new Client();
  submitted = false;

  constructor(private clientService: ClientService,
    private router: Router) { }

  ngOnInit() {
  }

  newClient(): void {
    this.submitted = false;
    this.client = new Client();
  }

  save() {
    this.clientService.createClient(this.client)
      .subscribe(data => console.log(data), error => console.log(error));
    this.client = new Client();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/clients']);
  }
}
