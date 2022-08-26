import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription } from "rxjs";

@Component({
  selector: 'app-programacao',
  templateUrl: './programacao.component.html',
  styleUrls: ['./programacao.component.scss']
})

export class ProgramacaoComponent implements OnInit {

  img_slide = "https://tems.com.br/wp-content/uploads/2022/08/1.jpg";
  img_slide_1 = "https://tems.com.br/wp-content/uploads/2022/08/1.jpg";
  img_slide_2 = "https://tems.com.br/wp-content/uploads/2022/08/2.jpg";
  img_slide_3 = "https://tems.com.br/wp-content/uploads/2022/08/3.jpg";
  img_slide_4 = "https://tems.com.br/wp-content/uploads/2022/08/4.jpg";

  cont: any = 1;

  ative1: boolean = true;
  ative2: boolean = false;
  ative3: boolean = false;
  ative4: boolean = false;

  resizeObservable$!: Observable<Event>
  resizeSubscription$!: Subscription
  innerWidth: any = window.innerWidth;



  ngOnInit(): void {
    this.changeIMG();
    this.verifyMedias();
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
      this.verifyMedias();
    })
  } 

  public verifyMedias() {
    this.innerWidth = window.innerWidth;

    if(this.innerWidth >= 1024) {
      this.verifyMediaDesktop();
    }

    if(this.innerWidth > 767 && this.innerWidth < 1024) {
      this.verifyMediaTablet();
    }

    if(this.innerWidth <= 767) {
      this.verifyMediaMobile();
    }
  }
  public verifyMediaTablet() {
      this.img_slide = "https://tems.com.br/wp-content/uploads/2022/08/mobile-slide-img-1.jpg";
      this.img_slide_1 = "https://tems.com.br/wp-content/uploads/2022/08/mobile-slide-img-1.jpg";
      this.img_slide_2 = "https://tems.com.br/wp-content/uploads/2022/08/mobile-slide-img-2.jpg";
      this.img_slide_3 = "https://tems.com.br/wp-content/uploads/2022/08/mobile-slide-img-3.jpg";
      this.img_slide_4 = "https://tems.com.br/wp-content/uploads/2022/08/mobile-slide-img-4.jpg";

  }
  public verifyMediaMobile() {
      this.img_slide = "https://tems.com.br/wp-content/uploads/2022/08/mobile-slide-img-1.jpg";
      this.img_slide_1 = "https://tems.com.br/wp-content/uploads/2022/08/mobile-slide-img-1.jpg";
      this.img_slide_2 = "https://tems.com.br/wp-content/uploads/2022/08/mobile-slide-img-2.jpg";
      this.img_slide_3 = "https://tems.com.br/wp-content/uploads/2022/08/mobile-slide-img-3.jpg";
      this.img_slide_4 = "https://tems.com.br/wp-content/uploads/2022/08/mobile-slide-img-4.jpg";

  }
  public verifyMediaDesktop() {
      this.img_slide = "https://tems.com.br/wp-content/uploads/2022/08/1.jpg";
      this.img_slide_1 = "https://tems.com.br/wp-content/uploads/2022/08/1.jpg";
      this.img_slide_2 = "https://tems.com.br/wp-content/uploads/2022/08/2.jpg";
      this.img_slide_3 = "https://tems.com.br/wp-content/uploads/2022/08/3.jpg";      
      this.img_slide_4 = "https://tems.com.br/wp-content/uploads/2022/08/4.jpg";
  }

  changeSlide(option: any) {

    this.cont = option;

    if (option === 1) {
      this.ative1 = true;
      this.ative2 = false;
      this.ative3 = false;
      this.ative4 = false;
      this.img_slide = this.img_slide_1;
    }
    if (option === 2) {
      this.ative1 = false;
      this.ative2 = true;
      this.ative3 = false;
      this.ative4 = false;
      this.img_slide = this.img_slide_2;
    }
    if (option === 3) {
      this.ative1 = false;
      this.ative2 = false;
      this.ative3 = true;
      this.ative4 = false;
      this.img_slide = this.img_slide_3;
    }
    if (option === 4) {
      this.ative1 = false;
      this.ative2 = false;
      this.ative3 = false;
      this.ative4 = true;
      this.img_slide = this.img_slide_4;
    }
  }

  changeIMG() {
    if (this.cont < 4) {
      this.cont++;
    } else {
      this.cont = 1;
    }

    setTimeout(() => {
      this.changeSlide(this.cont);
      this.changeIMG();
    }, 6000);
  }

}
