import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { AddHeroComponent } from './pages/add-hero/add-hero.component';
import { SearchHeroComponent } from './pages/search-hero/search-hero.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import { ListHeroComponent } from './pages/list-hero/list-hero.component';

import { HeroRoutingModule } from './hero-routing.module';
import { MaterialModule } from '../material/material.module';
import { CardHeroComponent } from './components/card-hero/card-hero.component';
import { ImagePipe } from './pipes/image.pipe';

@NgModule({
  declarations: [
    AddHeroComponent,
    SearchHeroComponent,
    HeroComponent,
    HomeComponent,
    ListHeroComponent,
    CardHeroComponent,
    ImagePipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    HeroRoutingModule,
    MaterialModule
  ]
})
export class HerosModule { }
