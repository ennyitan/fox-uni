import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientSideRoutingModule } from './client-side-routing.module';
import { ClientSideComponent } from './client-side.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutComponent } from './pages/about/about.component';
import { ButtonComponent } from './shared/button/button.component';
import { RouterModule } from '@angular/router';
import { CommentsComponent } from './pages/comments/comments.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SlidesComponent } from './shared/slides/slides.component';
import { CardsComponent } from './shared/cards/cards.component';
import { ServicesComponent } from './pages/services/services.component';
import { ReviwsComponent } from './shared/reviws/reviws.component';
import { BlogComponent } from './shared/blog/blog.component';

@NgModule({
  declarations: [
    ClientSideComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    AboutComponent,
    ButtonComponent,
    CommentsComponent,
    SlidesComponent,
    CardsComponent,
    ServicesComponent,
    ReviwsComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    ClientSideRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class ClientSideModule { }
