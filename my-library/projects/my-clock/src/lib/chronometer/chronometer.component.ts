import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-chronometer',
  templateUrl: './chronometer.component.html',
  styleUrls: ['./chronometer.component.css']
})
export class ChronometerComponent implements OnInit {
  enMarcha = false;
  control: any;
  
  centesimas = 0;
  segundos = 0;
  minutos = 0;
  horas = 0;

  cc = '00';
  ss = '00';
  mm = '00';
  hh = '00';

  constructor() { }

  ngOnInit(): void {
  }

  cronometro(){    
    if(this.centesimas == 99){
      this.centesimas = 0;
      if(this.segundos == 59){
        this.segundos = 0;
        if(this.minutos == 59){
          this.minutos = 0;
          if(this.horas == 12){
            this.reinicioTiempo();
          } else this.horas++;          
        } else this.minutos++;
      } else this.segundos++;      
    } else this.centesimas++;
    
    this.actualizarVista();    
  }

  inicio(){    
    if(this.enMarcha == false){
      this.control = setInterval(() => {this.cronometro();}, 10);      
      this.enMarcha = true;
    }       
  }

  pausa(){
    if(this.enMarcha == true){
      this.enMarcha = false;
      clearInterval(this.control); 
    }
  }

  reinicio(){
    clearInterval(this.control);    
    this.reinicioTiempo();
    this.actualizarVista();
  }

  reinicioTiempo(){
    this.horas = this.minutos = this.segundos = this.centesimas = 0;    
  }

  actualizarVista(){
    this.cc = this.centesimas < 10 ? '0' + this.centesimas : this.centesimas.toString();
    this.ss = this.segundos < 10 ? '0' + this.segundos : this.segundos.toString();
    this.mm = this.minutos < 10 ? '0' + this.minutos : this.minutos.toString();
    this.hh = this.horas < 10 ? '0' + this.horas : this.horas.toString(); 
  }
}
