import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  ID = ''
  NAME = ''
  ORIGIN = ''
  AGE = 0
  STATUS ='A'
clientes = []

clienteSeleccionado:any = {}
  constructor(private sclientes:ClientesService) { }

  async ngOnInit() {
    await this.getClientes() 
  }

  async getClientes(){
    this.clientes = await this.sclientes.getClientes()
    console.log( );
  }

  async registrarCliente(){
    let body = {
     ID:String( this.ID).toUpperCase(),
     NAME:String(this.NAME).toUpperCase(), 
     ORIGIN: String(this.ORIGIN).toUpperCase(),
     AGE: String(this.AGE).toUpperCase(),
     STATUS: String(this.STATUS).toUpperCase()  
    }
    console.log(JSON.stringify(body));

   if ( await this.sclientes.registrarCliente(body) == true ) {
     this.ID = ''
     this.NAME = ''
     this.ORIGIN = ''
     this.AGE = 0 
    await this.getClientes()
   }  
    
    
  }


  async editarCliente(cliente) {
    this.clienteSeleccionado = cliente
  }

  async editarInformacionCliente(){
    await this.sclientes.editarCliente(this.clienteSeleccionado)
    await this.getClientes()
  }

  async eliminarCliente(cliente){
    await this.sclientes.eliminarCliente(cliente)
    await this.getClientes()
  }
}
