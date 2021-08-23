import { Component, OnInit } from '@angular/core';
import { BancoService } from 'src/app/services/banco.service';

@Component({
  selector: 'app-banco',
  templateUrl: './banco.component.html',
  styleUrls: ['./banco.component.css']
})
export class BancoComponent implements OnInit {
  cuenta = {"ID":"","DATES":"","DESCR":"","ID_CLIENT":"","TYPE":"","DEBT":0,"CRED":0,"BALANCE":0}
  cuentaSeleccionada:any = {}
  cuentas:Array<any> = []
  constructor(private scuentas:BancoService) { }

  async ngOnInit() {
    await this.getCuentas()
  }

  async getCuentas(){
    this.cuentas = await this.scuentas.getCuentas()
    this.cuentas.splice(0 , 1)
  }

  async crearCuentaBanco(){
    this.cuenta.DATES = String(this.cuenta.DATES).replace('-','');
    this.cuenta.DATES = String(this.cuenta.DATES).replace('-','');
    this.cuenta.DATES = String(this.cuenta.DATES).replace('-','');
    await this.scuentas.registrarCuenta(this.cuenta)
    await this.getCuentas()
    console.log(this.cuenta);
    
  }

  async editarInformacionCuenta(){
    this.cuentaSeleccionada.DATES = String(this.cuentaSeleccionada.DATES).replace('-','');
    this.cuentaSeleccionada.DATES = String(this.cuentaSeleccionada.DATES).replace('-','');
    this.cuentaSeleccionada.DATES = String(this.cuentaSeleccionada.DATES).replace('-','');
    console.log(this.cuentaSeleccionada);
    await this.scuentas.editarCuenta(this.cuentaSeleccionada)
      await this.getCuentas()
  }

  async modificarCuenta(cuenta){
    this.cuentaSeleccionada = cuenta
  }

  
  async eliminarCuenta(cuenta){
    await this.scuentas.eliminarCuenta(cuenta);
    await this.getCuentas()    
  }



}
