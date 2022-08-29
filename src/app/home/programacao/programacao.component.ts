import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription } from "rxjs";

@Component({
  selector: 'app-programacao',
  templateUrl: './programacao.component.html',
  styleUrls: ['./programacao.component.scss']
})

export class ProgramacaoComponent implements OnInit {

  img_slide = "https://tems.com.br/wp-content/uploads/2022/08/mobile-slide-1.jpg";
  array: string[] = [];
  cont = 0;

  ative1: boolean = true;
  ative2: boolean = false;
  ative3: boolean = false;
  ative4: boolean = false;
  ative5: boolean = false;
  ative6: boolean = false;
  ative7: boolean = false;
  ative8: boolean = false;

  resizeObservable$!: Observable<Event>
  resizeSubscription$!: Subscription
  innerWidth: any = window.innerWidth;



  ngOnInit(): void {
    this.changeIMG();
    this.verifyMedias();
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe(evt => {
      this.verifyMedias();
    })
  }

  public verifyMedias() {
    this.innerWidth = window.innerWidth;

    if (this.innerWidth >= 1024) {
      this.verifyMediaDesktop();
    }

    if (this.innerWidth > 767 && this.innerWidth < 1024) {
      this.verifyMediaTablet();
    }

    if (this.innerWidth <= 767) {
      this.verifyMediaMobile();
    }
  }

  public verifyMediaTablet() {
    for (let i = 0; i <= 6; i++) {
      this.array[i] = `https://tems.com.br/wp-content/uploads/2022/08/mobile-slide-${i}.jpg`;
    }
    this.img_slide = this.array[this.cont];
  }

  public verifyMediaMobile() {
    for (let i = 0; i <= 6; i++) {
      this.array[i] = `https://tems.com.br/wp-content/uploads/2022/08/mobile-slide-${i}.jpg`;
    }
    this.img_slide = this.array[this.cont];
  }

  public verifyMediaDesktop() {
    for (let i = 0; i <= 6; i++) {
      this.array[i] = `https://tems.com.br/wp-content/uploads/2022/08/slide-${i}.jpg`;
    }
    this.img_slide = this.array[this.cont];
  }

  changeSlide(option: any) {
    this.cont = option;
    if (option === 1) {
      this.ative1 = true;
      this.ative2 = false;
      this.ative3 = false;
      this.ative4 = false;
      this.ative5 = false;
      this.ative6 = false;
      this.ative7 = false;
      this.ative8 = false;
    }
    if (option === 2) {
      this.ative1 = false;
      this.ative2 = true;
      this.ative3 = false;
      this.ative4 = false;
      this.ative5 = false;
      this.ative6 = false;
      this.ative7 = false;
      this.ative8 = false;
    }
    if (option === 3) {
      this.ative1 = false;
      this.ative2 = false;
      this.ative3 = true;
      this.ative4 = false;
      this.ative5 = false;
      this.ative6 = false;
      this.ative7 = false;
      this.ative8 = false;
    }
    if (option === 4) {
      this.ative1 = false;
      this.ative2 = false;
      this.ative3 = false;
      this.ative4 = true;
      this.ative5 = false;
      this.ative6 = false;
      this.ative7 = false;
      this.ative8 = false;
    }
    if (option === 5) {
      this.ative1 = false;
      this.ative2 = false;
      this.ative3 = false;
      this.ative4 = false;
      this.ative5 = true;
      this.ative6 = false;
      this.ative7 = false;
      this.ative8 = false;
    }
    if (option === 6) {
      this.ative1 = false;
      this.ative2 = false;
      this.ative3 = false;
      this.ative4 = false;
      this.ative5 = false;
      this.ative6 = true;
      this.ative7 = false;
      this.ative8 = false;
    }

    this.img_slide = this.array[this.cont];
  }

  changeIMG() {
    if (this.cont < 6) {
      this.cont++;
    } else {
      this.cont = 1;
    }    
    setTimeout(() => {
      this.changeIMG();
      this.changeSlide(this.cont);
    }, 6000);
  }

}
