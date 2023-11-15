import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created by <b><a href="https://github.com/segpy" target="_blank">Sebastian Gomez</a></b>
    </span>
    <div class="socials">
      <a href="https://github.com/segpy" target="_blank" class="ion ion-social-github"></a>
      <a href="https://www.linkedin.com/in/gomezv-sebastian/" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
