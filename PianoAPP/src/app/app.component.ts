import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PianoAPP';
<<<<<<< HEAD

  tocarNota(numero: number): void {
    const nota = new Audio()
    nota.src = `../assets/sonidos/note${numero}.wav`
    nota.load()
    nota.play()
  }

=======
>>>>>>> 521a4cda81c5f29cd3c8672d0042ab799a1dc489
}
