import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-main',
  templateUrl: './footer-main.component.html',
  styleUrls: ['./footer-main.component.css']
})
export class FooterMainComponent implements OnInit {

  constructor() { }



  goToLink(url: string){
    window.open(url, "_blank");
        }
  ngOnInit() {
  }

}
