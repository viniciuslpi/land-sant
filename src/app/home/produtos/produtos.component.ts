import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription } from "rxjs";

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  constructor() { }

  img_slide = "https://tems.com.br/wp-content/uploads/2022/08/produto-1.jpg";
  array: string[] = [];
  cont = 0;

  ative1: boolean = true;
  ative2: boolean = false;

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
    for (let i = 0; i <= 2; i++) {
      this.array[i] = `https://tems.com.br/wp-content/uploads/2022/10/produto-${i}.jpg`;
    }
    this.img_slide = this.array[this.cont];
  }

  public verifyMediaMobile() {
    for (let i = 0; i <= 2; i++) {
      this.array[i] = `https://tems.com.br/wp-content/uploads/2022/10/produto-${i}.jpg`;
    }
    this.img_slide = this.array[this.cont];
  }

  public verifyMediaDesktop() {
    for (let i = 0; i <= 2; i++) {
      this.array[i] = `https://tems.com.br/wp-content/uploads/2022/10/produto-${i}.jpg`;
    }
    this.img_slide = this.array[this.cont];
  }

  changeSlide(option: any) {
    this.cont = option;
    if (option === 1) {
      this.ative1 = true;
      this.ative2 = false;
      this.img_slide = this.array[this.cont];
    }
    if (option === 2) {
      this.ative1 = false;
      this.ative2 = true;
      this.img_slide = this.array[this.cont];
    }
  }

  changeIMG() {
    if (this.cont < 2) {
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
