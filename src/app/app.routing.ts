import { RouterModule, Routes } from '@angular/router';
import { BattelfieldComponent } from './component/battelfield/battelfield.component';
import { HomeComponent } from './component/home/home.component';
import { Battelfield2playerComponent } from './component/battelfield-2player/battelfield-2player.component';

const appRoutes : Routes = [
    { path:'', component: HomeComponent},
    { path:'2-Player', component: BattelfieldComponent},
    { path:'1-Player', component: Battelfield2playerComponent},
];

export const routing = RouterModule.forRoot(appRoutes); 
