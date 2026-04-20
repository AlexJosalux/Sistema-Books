import { Routes } from '@angular/router';
import { HomePage } from './features/home-page/home-page';
import { LoginComponent } from './shared/login/login';
import { authGuard } from './guards/auth-guard';
import { LibrosPage } from './features/libros-page/libros-page';
import { NuevoLibroPage } from './features/nuevo-libro-page/nuevo-libro-page';
import { deactivateGuard } from './guards/deactivate-guard';

export const routes: Routes = [

    { path: '', component: HomePage },
    { path: 'login', component: LoginComponent },
    { path: 'libros', component: LibrosPage, canActivate: [authGuard]},
    { path: 'nuevo-libro', component: NuevoLibroPage, canActivate: [authGuard],canDeactivate: [deactivateGuard] },
    { path: '**', redirectTo: '' }
];
   