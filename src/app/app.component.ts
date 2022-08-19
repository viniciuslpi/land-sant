import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'land-sant';
  img_slide = "https://tems.com.br/wp-content/uploads/2022/08/MicrosoftTeams-image-3.jpg";

  changeSlide(image: Number) {
    if(image === 1) {
        this.img_slide = "https://tems.com.br/wp-content/uploads/2022/08/MicrosoftTeams-image-3.jpg";
    }
    if(image === 2) {
        this.img_slide = "https://tems.com.br/wp-content/uploads/2022/08/encontro-cla╠a-18-.ml-7875.jpg";
    }
    if(image === 3) {
        this.img_slide = "https://tems.com.br/wp-content/uploads/2022/08/MicrosoftTeams-image-3.jpg";
    }
    if(image === 4) {
        this.img_slide = "https://tems.com.br/wp-content/uploads/2022/08/encontro-cla╠a-18-.ml-7875.jpg";
    }
  }

}
