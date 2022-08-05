import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientSideComponent } from './client-side.component';
import { AboutComponent } from './pages/about/about.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [{ path: '', component: ClientSideComponent, 
  children: [
  {path: '', component: HomepageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'comments', component: CommentsComponent}
  ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientSideRoutingModule { }
