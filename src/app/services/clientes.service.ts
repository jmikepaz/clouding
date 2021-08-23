import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2'
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http:HttpClient) { }

  async getClientes(){
    Swal.fire({
      title: 'Consultando',
      text: 'Consultando datos', 
      didOpen:()=>{
        Swal.showLoading()
      }
    });
  
    let respuesta  = []
    const headers = new HttpHeaders(environment.header_api)
    const url = `${environment.url_base}clientes.php`
    await this.http.get(url, { headers }).toPromise()
    .then(async (data:any)=>{
      respuesta = data.clientes
      console.log(data);
      Swal.close() 
    })
    .catch((error)=>{
      console.log(error);
      Swal.close()
       respuesta = []
      })
      
      return respuesta
  }

  async eliminarCliente(body){ 
    Swal.fire({
      title: 'Por favor espere',
      text: 'Eliminando datos', 
      didOpen:()=>{
        Swal.showLoading()
      }
    });
  
    let respuesta  =false
    const headers = new HttpHeaders(environment.header_api)
    const url = `${environment.url_base}clientes.php`
    await this.http.request('DELETE', url, { body:body}).toPromise()
    .then(async (data:any)=>{
      console.log(data);

      if (data.estado ==true) {
        await this.eliminarClienteOtrasApis(body)
        respuesta = true
      }
      
      Swal.close() 
    })
    .catch((error)=>{
      console.log(error);
      
      Swal.close()
       respuesta = false
      })
      
      return respuesta
  }
 
  async eliminarClienteOtrasApis(body){ 
    Swal.fire({
      title: 'Por favor espere',
      text: 'Eliminando datos', 
      didOpen:()=>{
        Swal.showLoading()
      }
    });
  
    let respuesta  =false
    const headers = new HttpHeaders(environment.header_api)
    const url = `${environment.url_base}clienteServices.php`
    await this.http.request('DELETE', url, { body:body}).toPromise()
    .then(async (data:any)=>{
      console.log(data);
 
      Swal.close() 
    })
    .catch((error)=>{
      console.log(error);
      
      Swal.close()
       respuesta = false
      })
      
      return respuesta
  }
 
  async editarCliente(body){
    Swal.fire({
      title: 'Por favor espere',
      text: 'Registrando datos', 
      didOpen:()=>{
        Swal.showLoading()
      }
    });
  
    let respuesta  =false
    const headers = new HttpHeaders(environment.header_api)
    const url = `${environment.url_base}clientes.php`
    await this.http.put(url, body, { headers }).toPromise()
    .then(async (data:any)=>{
      console.log(data);

      if (data.estado ==true) {
          await this.editarClienteOtrasApis(body)
        respuesta = true
      }
      
      Swal.close() 
    })
    .catch((error)=>{
      console.log(error);
      
      Swal.close()
       respuesta = false
      })
      
      return respuesta
  }

  async editarClienteOtrasApis(body){
 
    let respuesta  =false
    const headers = new HttpHeaders(environment.header_api)
    const url = `${environment.url_base}clienteServices.php`
    await this.http.put(url, body, { headers }).toPromise()
    .then(async (data:any)=>{
      console.log(data);
 
      Swal.close() 
    })
    .catch((error)=>{
      console.log(error);
      
      Swal.close()
       respuesta = false
      })
      
      return respuesta
  }

  async registrarCliente(body){
    Swal.fire({
      title: 'Por favor espere',
      text: 'Registrando datos', 
      didOpen:()=>{
        Swal.showLoading()
      }
    });
  
    let respuesta  =false
    const headers = new HttpHeaders(environment.header_api)
    const url = `${environment.url_base}clientes.php`
    await this.http.post(url, body, { headers }).toPromise()
    .then(async (data:any)=>{
      console.log(data);

      if (data.estado ==true) {
        await this.registrarClienteOtrasApis(body)
        respuesta = true
      }
      
      Swal.close() 
    })
    .catch((error)=>{
      console.log(error);
      
      Swal.close()
       respuesta = false
      })
      
      return respuesta
  }

  async registrarClienteOtrasApis(body){
    Swal.fire({
      title: 'Por favor espere',
      text: 'Registrando datos', 
      didOpen:()=>{
        Swal.showLoading()
      }
    });
  
    let respuesta  
    const headers = new HttpHeaders(environment.header_api)
    const url = `${environment.url_base}clienteServices.php`
    await this.http.post(url, body, { headers }).toPromise()
    .then((data:any)=>{
      Swal.close()
      respuesta = data
    })
    .catch((error)=>{
      console.log(error);
      
      Swal.close()
       respuesta = []
      })
      
      return respuesta
  }
}
