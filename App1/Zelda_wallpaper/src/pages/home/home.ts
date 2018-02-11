import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  ImageArray: any = [];

  constructor(public navCtrl: NavController) {
      this.ImageArray = [
        {'image':'assets/imgs/slides/1.jpg'},
        {'image':'assets/imgs/slides/2.jpg'},
        {'image':'assets/imgs/slides/3.jpg'},
        {'image':'assets/imgs/slides/4.jpg'},
        {'image':'assets/imgs/slides/5.jpg'},

                        ]
  }

}
