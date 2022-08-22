import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(private scrollService: ScrollService) {}

  scrollToId(id: string) {
    this.scrollService.scrollToElementById(id);
  }
}
