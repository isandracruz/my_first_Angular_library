import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'lib-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  time = new FormControl();  
   
  segundos =  0;
  minutos = 0;
  horas = 0;

  cc = '00';
  ss = '00';
  mm = '00';
  hh = '00';
  
  enMarcha = false;
  control: any;

  constructor() { }

  ngOnInit(): void {
  }

  temporizador(){ 
    if(this.segundos == 0 && this.minutos == 0 && this.horas == 0) this.pausa();
    else {
      if(this.segundos == 0){
        if(this.minutos > 0 || this.horas > 0)
        this.segundos = 59;
      } else this.segundos--;

      if(this.minutos == 0 && this.horas > 0) this.minutos = 59;      
      else if(this.minutos > 0 && this.segundos == 59) this.minutos--;

      if(this.horas > 0 && this.minutos == 59 && this.segundos == 59) this.horas--; 
      
      this.actualizarVista(); 
    }   
  }

  inicio(){
    if(this.time.value){
      if(this.enMarcha == false){
        this.enMarcha = true;
        this.control = setInterval(() => {this.temporizador();}, 1000); 
      } 
    }    
  }
  
  pausa(){
    if(this.enMarcha == true){
      this.enMarcha = false;
      clearInterval(this.control); 
    }
  }

  reinicio(){
    this.pausa();
    this.inicioTemp();
  }   

  actualizarVista(){    
    this.ss = this.segundos < 10 ? '0' + this.segundos : this.segundos.toString();
    this.mm = this.minutos < 10 ? '0' + this.minutos : this.minutos.toString();
    this.hh = this.horas < 10 ? '0' + this.horas : this.horas.toString(); 
  }

  inicioTemp(){
    let mensaje = "";
    if(this.time.value){
      let h = -1;
      let m = -1;
      let s = -1;

      let tvalue = this.time.value;
      let at = tvalue.split(":");
      if(at.length == 3){
        let result = at.map((value: string) => parseInt(value,10));
        console.log(result);

        if(result[0] > -1 && result[0] < 13){
          h = result[0];
        }
        if(result[1] > -1 && result[1] < 60){
          m = result[1];
        }
        if(result[2] > -1 && result[2] < 60){
          s = result[2];
        }
        if(s >= 0 && h >= 0 && m >= 0){
          this.horas = h;
          this.minutos =m;
          this.segundos = s;
          this.actualizarVista();
        } else mensaje = "Valor de inicio no válido";
      } else mensaje = "Valor de inicio no válido";     
    } else mensaje = "Inserte un valor de inicio";   
    if(mensaje != "") alert(mensaje);
  }
}
