import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLowerCase: string  = 'duvan';
  public nameUpperCase: string = 'DUVAN';
  public fullName: string = 'dUVan mOtAvIta';

  public customDate: Date = new Date();

}
