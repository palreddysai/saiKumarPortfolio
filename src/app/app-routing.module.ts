import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';


const routes: Routes = [
  {path:'', redirectTo:'/sai/about', pathMatch:'full'},
  {path:'sai', component:HomeComponent,
    children: [
      {path:'about', component:AboutMeComponent},
      {path:'projects', component:ProjectsComponent},
      {path: 'skills', component:SkillsComponent},
      {path:'contactMe', component:ContactMeComponent}
    ]
  },
  {path:'**', component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  AboutMeComponent,
  ProjectsComponent,
  SkillsComponent,
  ContactMeComponent,
  PageNotFoundComponent

]
