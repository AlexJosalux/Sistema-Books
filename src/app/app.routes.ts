import { Routes } from '@angular/router';
import { HomePage } from './features/home-page/home-page';
import { NosotrosPage } from './features/nosotros-page/nosotros-page';
import { ConsultasPage } from './features/consultas-page/consultas-page';
import { MascotasPage } from './features/mascotas-page/mascotas-page';
import { Usuarios } from './features/usuarios/usuarios';
import { Login } from './shared/login/login';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    //Ruta inicial
    {path:'',component: HomePage},
    {path:'nosotros', component:NosotrosPage},
    {path:'consultas', component:ConsultasPage},
    {path:'mascotas', component: MascotasPage},
    {path:'usuarios', component:Usuarios, canActivate:[authGuard]},
    {path: 'login', component: Login}

    //Ruta error 404
    //{path:'**', component:Pagina404}
];
