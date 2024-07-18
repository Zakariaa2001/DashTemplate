import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profil/profil.component';



export const routes: Routes = [

    { path: 'main', component: MainContentComponent },
    { path: 'login', component: LoginComponent },
    { path: 'profil', component: ProfilComponent },


];
