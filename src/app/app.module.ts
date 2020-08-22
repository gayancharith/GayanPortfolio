import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SidenavModule } from './widgets/sidenav/sidenav.module';
import { HeaderModule } from './widgets/header/header.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SidenavModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
