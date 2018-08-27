import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = '로또 번호 생성기';

  constructor(private router: Router) {

  }

  onLogo() {
    this.router.navigate(['']);
  }
}
