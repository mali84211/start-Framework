import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  imgsPaths: string[] = [
    'assets/img/poert1.png',
    'assets/img/port2.png',
    'assets/img/port3.png',
    'assets/img/poert1.png',
    'assets/img/port2.png',
    'assets/img/port3.png',
  ];

  selectedImagePath: string | null = null;

  openImage(imgPath: string) {
    this.selectedImagePath = imgPath;
  }

  closeImage(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.selectedImagePath = null;
    }
  }
}
