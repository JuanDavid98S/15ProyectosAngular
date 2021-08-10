import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PianoAPP';

  tocarNota(numero: number): void {
    const nota = new Audio()
    nota.src = `../assets/sonidos/note${numero}.wav`
    nota.load()
    nota.play()
  }

}
