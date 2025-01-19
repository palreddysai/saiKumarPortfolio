import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
emailMe: string = "palreddysai.kumar@gmail.com";

today: Date = new Date();

copyRights:string = "All Rights Reserved " + (this.today.getFullYear());

}
