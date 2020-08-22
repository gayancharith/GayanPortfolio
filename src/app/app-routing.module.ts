import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
    data: { index: 0 }
  },
  {
    path: 'skills',
    loadChildren: () => import('./pages/skills/skills.module').then((m) => m.SkillsModule),
    data: { index: 1 }
  },
  {
    path: 'projects',
    loadChildren: () => import('./pages/projects/projects.module').then((m) => m.ProjectsModule),
    data: { index: 2 }
  },
  {
    path: 'blog',
    loadChildren: () => import('./pages/blog/blog.module').then((m) => m.BlogModule),
    data: { index: 3 }
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then((m) => m.ContactModule),
    data: { index: 4 }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
