import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programacao',
  templateUrl: './programacao.component.html',
  styleUrls: ['./programacao.component.scss']
})

export class ProgramacaoComponent implements OnInit {

  ngOnInit(): void {
    this.changeIMG();
  }

  img_slide = "https://tems.com.br/wp-content/uploads/2022/08/1.jpg";
  img_slide_1 = "https://tems.com.br/wp-content/uploads/2022/08/1.jpg";
  img_slide_2 = "https://tems.com.br/wp-content/uploads/2022/08/2.jpg";
  img_slide_3 = "https://tems.com.br/wp-content/uploads/2022/08/4.jpg";
  cont = 1;

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

  changeIMG(){
    if(this.cont < 4) {
      this.cont ++;
    } else {
      this.cont = 1;
    }

    setTimeout(() => {
      this.img_slide = `https://tems.com.br/wp-content/uploads/2022/08/${this.cont}.jpg`;
      this.changeIMG();
    }, 5000);

    
  }


}
