import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

// primero declaro la constante routes
const routes: Routes = [

  // Aquí genero las rutas para cada componente separado por {}
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  declarations: [],
  imports: [
    // Aqui especifico el arreglo de rutas
    RouterModule.forRoot( routes )
  ],
  // Aqui exportamos el Router Module para indicar que se va a usar sistema de rutas
  exports: [
    RouterModule
  ]


})
export class AppRoutingModule { }
