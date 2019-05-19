import { Component } from '@angular/core';

@Component({
  selector: 'weather-spa-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div class="jumbotron jumbotron-fluid text-center">
      <h1>
        Welcome to {{title}}
      </h1>
    </div>
   
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'Weather SPA';
}
