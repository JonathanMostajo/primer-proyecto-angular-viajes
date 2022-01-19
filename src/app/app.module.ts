import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { HeaderComponent } from './features/home/components/header/header.component';
import { HeroComponent } from './features/home/components/hero/hero.component';
import { MainComponent } from './features/home/components/main/main.component';
import { GalleryComponent } from './features/home/components/gallery/gallery.component';
import { ItemComponent } from './features/home/components/main/item/item.component';
import { ImageComponent } from './shared/components/image/image.component';
import { AnchorComponent } from './shared/components/anchor/anchor.component';
import { NavbarComponent } from './features/home/components/header/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HeroComponent,
    MainComponent,
    GalleryComponent,
    ItemComponent,
    ImageComponent,
    AnchorComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
