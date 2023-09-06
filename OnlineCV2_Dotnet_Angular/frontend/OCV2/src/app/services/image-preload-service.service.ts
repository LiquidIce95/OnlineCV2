import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImagePreloadService {
  private imageList: string[] = [
    './assets/experience/LeutnantUrkunde.png',
    './assets/experience/datamanag.png',
    './assets/experience/Lehr1.png',
    './assets/experience/Lehr2.png',
    './assets/experience/mil1.png',
    './assets/experience/mil2.png',
    './assets/experience/SIZ.png',
    './assets/education/BM.png',
    './assets/education/ETH.png',
    './assets/education/FS23.png',
    './assets/education/HS23tr.png',
    './assets/education/HS23tr2.png',
    './assets/education/KV.png',
    './assets/education/Pass1.png',
    './assets/education/Pass2.png',
    './assets/languages/ENB2.png',
    './assets/languages/FranzB2.png'
  ];

  // Size in MB that you want to download per second
  private rate: number = 0.1;

  async preloadImages(): Promise<void> {
    for (const imgUrl of this.imageList) {
      // Assume each image is 0.8 MB, for example
      const imageSizeInMB = 0.8;
      
      // Calculate delay in ms 
      const delay = (imageSizeInMB / this.rate) * 1000;

      await this.loadImage(imgUrl, delay);
    }
  }

  private loadImage(url: string, delay: number): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => resolve();
        img.src = url;
      }, delay);
    });
  }
}
