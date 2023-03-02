import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { GameComponent } from './components/main/game/game.component';
import { MainComponent } from './components/main/main.component';
import { RankingComponent } from './components/main/ranking/ranking.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'game',
        pathMatch: 'full',
      },
      {
        path: 'game',
        component: GameComponent
      },
      {
        path: 'ranking',
        component: RankingComponent
      }
    ]
  },
 
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
