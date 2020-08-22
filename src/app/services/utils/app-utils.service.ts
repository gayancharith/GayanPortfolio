import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppUtilsService {
  constructor() {}

  public static isElementInViewPort(elm: HTMLElement): boolean {
    if (!elm) return;
    let rect = elm.getBoundingClientRect();
    let viewHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight
    );
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }
}
