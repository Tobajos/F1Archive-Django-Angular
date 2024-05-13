import { Component } from '@angular/core';
import { faPlus,faMagnifyingGlass,faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  plus = faPlus;
  search = faMagnifyingGlass;
  back= faAngleLeft;

}
