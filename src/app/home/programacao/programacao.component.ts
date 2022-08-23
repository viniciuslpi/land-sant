import { Component } from '@angular/core';

@Component({
  selector: 'app-programacao',
  templateUrl: './programacao.component.html',
  styleUrls: ['./programacao.component.scss']
})

export class ProgramacaoComponent {

  img_slide = "https://tems.com.br/wp-content/uploads/2022/08/1.jpg";
  img_slide_1 = "https://tems.com.br/wp-content/uploads/2022/08/1.jpg";
  img_slide_2 = "https://tems.com.br/wp-content/uploads/2022/08/2.jpg";
  img_slide_3 = "https://tems.com.br/wp-content/uploads/2022/08/4.jpg";

  changeSlide(image: Number) {
    
    if(image === 1) {
        this.img_slide = this.img_slide_1; 
    }
    if(image === 2) {
        this.img_slide = this.img_slide_2;
    }
    if(image === 3) {
        this.img_slide = this.img_slide_3;
    }
    if(image === 4) {
        this.img_slide = this.img_slide_1;
    }
  }

}
