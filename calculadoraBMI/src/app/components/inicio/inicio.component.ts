import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  peso: number = 50
  edad: number = 20
  altura: number = 170
  sexo: string = ""

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  cambiarAltura(event: any): void {
    this.altura = event.target.value
  }

  masculino(): void {
    this.sexo = "masculino"
  }

  femenino(): void {
    this.sexo = "femenino"
  }

  calcularBMI(): void {
    const BMI: number = this.peso / Math.pow(this.altura / 100, 2)
    this.router.navigate(['/resultado', BMI.toFixed(1)])
  }

}
