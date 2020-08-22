import { Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root',
})
export class BreakpointObserverService {
  private _isSmallScreen = false;
  private _isMediumScreen = false;
  private _isLargeScreen = false;
  private _isXLargeScreen = false;

  maxWidthSmall = '(max-width: 568px)';
  maxWidthMedium = '(max-width: 768px)';
  maxWidthLarge = '(max-width: 1024px)';
  maxWidthXLarge = '(max-width: 1200px)';

  constructor(private breakpointObserver: BreakpointObserver) {
    this.initVariables();
  }

  getBreakpointObserver() {
    return this.breakpointObserver.observe([
      this.maxWidthSmall,
      this.maxWidthMedium,
      this.maxWidthLarge,
      this.maxWidthXLarge,
    ]);
  }

  initService() {
    this.getBreakpointObserver().subscribe((result) => {
      this.initVariables();
    });
  }

  initVariables() {
    this._isSmallScreen = this.breakpointObserver.isMatched(this.maxWidthSmall);
    this._isMediumScreen = this.breakpointObserver.isMatched(this.maxWidthMedium);
    this._isLargeScreen = this.breakpointObserver.isMatched(this.maxWidthLarge);
    this._isXLargeScreen = this.breakpointObserver.isMatched(this.maxWidthXLarge);
  }

  get isSmallScreen(): boolean {
    return this._isSmallScreen;
  }

  get isMediumScreen(): boolean {
    return this._isMediumScreen;
  }

  get isLargeScreen(): boolean {
    return this._isLargeScreen;
  }

  get isXLargeScreen(): boolean {
    return this._isXLargeScreen;
  }
}
