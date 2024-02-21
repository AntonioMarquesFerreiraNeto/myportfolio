import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/section-components/home/home.component';
import { SobreminComponent } from './components/section-components/sobremin/sobremin.component';
import { ProjetosComponent } from './components/section-components/projetos/projetos.component';
import { ContatemeComponent } from './components/section-components/contateme/contateme.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: SobreminComponent},
    {path: 'projetos', component: ProjetosComponent},
    {path: 'contateme', component: ContatemeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
