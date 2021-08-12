import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  bmi: number = 0
  resultado: string = ''
  interpretacion: string = ''

  constructor(private route:ActivatedRoute) {
    this.bmi = + route.snapshot.paramMap.get('valor')!
  }

  ngOnInit(): void {
    this.getResultado()
  }

  getResultado() {
    if(this.bmi >= 18.50 && this.bmi <= 24.99){
      this.resultado = 'BMI NORMAL'
      this.interpretacion = 'Tu BMI es el de una persona saludable, ¡sigue así!'
    } else if(this.bmi >= 25){
      this.resultado = 'BMI EXCESO DE PESO'
      this.interpretacion = 'Tienes exceso de peso, intenta hacer más ejercicio para mantenerte saludable'
    } else {
      this.resultado = 'BMI FALTA DE PESO'
      this.interpretacion = 'Te falta un poco de peso, ¡trata de comer de forma saludable para aumentar unos kilos!'
    }
  }
}
