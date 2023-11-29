import { Routes }            from '@angular/router';
import { LoginComponent }    from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent }     from './components/templates/home/home.component';

export const routes: Routes = [
    
    {path:'',       title:'Inicio',   component: HomeComponent},
    {path:'login',  title:'Login',    component: LoginComponent},
    {path:'sing-up',title:'Register', component: RegisterComponent}
];
