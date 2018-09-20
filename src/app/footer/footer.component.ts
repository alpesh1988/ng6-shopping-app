import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../app.constant';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  socialIcons: Array<object> = AppConstants.socialIconConstant;
  constructor() { }

  ngOnInit() {
  }

}
