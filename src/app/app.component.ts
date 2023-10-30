import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { file } from './file';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  numbers = ['1', '2m', '3m', '4', '5', '6m', '7'];

  keys = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
  keyMap: { [key: string]: string[] } = {
    C: ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'B'],
    D: ['D', 'Em', 'F#m', 'G', 'A', 'Bm', 'C#'],
    E: ['E', 'F#m', 'G#m', 'A', 'B', 'C#m', 'D#'],
    F: ['F', 'Gm', 'Am', 'Bb', 'C', 'Dm', 'E'],
    G: ['G', 'Am', 'Bm', 'C', 'D', 'Em', 'F#'],
    A: ['A', 'Bm', 'C#m', 'D', 'E', 'F#m', 'G#'],
    B: ['B', 'C#m', 'D#m', 'E', 'F#', 'G#m', 'A#'],
  };
  selectedKey = signal('D');
  selectKey(e: string) {
    this.selectedKey.update(() => e);
    console.log(e);
  }

  file = signal(file.split('\n'));

  text = computed(() => {
    return this.file();
  });
}
