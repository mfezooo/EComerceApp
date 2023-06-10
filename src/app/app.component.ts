import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'E Comerce App';

  sayHi():string
  {
return `Hello2 ${this.title}`
  }
}
