import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAnnoncesComponent } from './Components/list-annonces/list-annonces.component';
import { EstimationCoutComponent } from './Components/estimation-cout/estimation-cout.component';
// import { NgModule } from '@angular/core';


const appRoutes: Routes = [
    
    {
        path: 'listAnnonces',
        component: ListAnnoncesComponent
    },
    {
        path: 'estimationCout',
        component: EstimationCoutComponent
    },
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    }
    // {
    //     path: '**',
    //     component: PageNotFoundComponent
    // }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);