import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2'
@Injectable({
  providedIn: 'root'
})
export class BancoService {

  constructor(private http:HttpClient) { }

  async getCuentas(){
    Swal.fire({
      title: 'Consultando',
      text: 'Consultando datos', 
      didOpen:()=>{
        Swal.showLoading()
      }
    });
  
    let respuesta  = []
    const headers = new HttpHeaders(environment.header_api)
    const url = `${environment.url_base}banco.php`
    await this.http.get(url, { headers }).toPromise()
    .then(async (data:any)=>{
      respuesta = data.CBancos
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

  async eliminarCuenta(body){ 
    Swal.fire({
      title: 'Por favor espere',
      text: 'Eliminando datos', 
      didOpen:()=>{
        Swal.showLoading()
      }
    });
  
    let respuesta  =false
    const headers = new HttpHeaders(environment.header_api)
    const url = `${environment.url_base}banco.php`
    await this.http.request('DELETE', url, { body:body}).toPromise()
    .then(async (data:any)=>{
      console.log(data);

      if (data.estado ==true) {
        await this.eliminarCuentaOtrasApis(body)
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
 
  async eliminarCuentaOtrasApis(body){ 
    Swal.fire({
      title: 'Por favor espere',
      text: 'Eliminando datos', 
      didOpen:()=>{
        Swal.showLoading()
      }
    });
  
    let respuesta  =false
    const headers = new HttpHeaders(environment.header_api)
    const url = `${environment.url_base}bancoServices.php`
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
 
  async editarCuenta(body){
    Swal.fire({
      title: 'Por favor espere',
      text: 'Registrando datos', 
      didOpen:()=>{
        Swal.showLoading()
      }
    });
  
    let respuesta  =false
    const headers = new HttpHeaders(environment.header_api)
    const url = `${environment.url_base}banco.php`
    await this.http.put(url, body, { headers }).toPromise()
    .then(async (data:any)=>{
      console.log(data);

      if (data.estado ==true) {
          await this.editarCuentaOtrasApis(body)
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

  async editarCuentaOtrasApis(body){
 
    let respuesta  =false
    const headers = new HttpHeaders(environment.header_api)
    const url = `${environment.url_base}bancoServices.php`
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

  async registrarCuenta(body){
    Swal.fire({
      title: 'Por favor espere',
      text: 'Registrando datos', 
      didOpen:()=>{
        Swal.showLoading()
      }
    });
  
    let respuesta  =false
    const headers = new HttpHeaders(environment.header_api)
    const url = `${environment.url_base}banco.php`
    await this.http.post(url, body, { headers }).toPromise()
    .then(async (data:any)=>{
      console.log(data);

      if (data.estado == 200 ) {
        await this.registrarCuentaOtrasApis(body)
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

  async registrarCuentaOtrasApis(body){
    Swal.fire({
      title: 'Por favor espere',
      text: 'Registrando datos', 
      didOpen:()=>{
        Swal.showLoading()
      }
    });
  
    let respuesta  
    const headers = new HttpHeaders(environment.header_api)
    const url = `${environment.url_base}bancoServices.php`
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
