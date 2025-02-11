import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CatPixComponent } from './cat-pix/cat-pix.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'cat-pix', component: CatPixComponent },
    { path: 'about', component: AboutComponent },
  ];
