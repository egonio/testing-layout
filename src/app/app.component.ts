import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  minimized = false;

  toggleMenu() {
    this.minimized = !this.minimized;
    console.log('toggled');
  }


}
