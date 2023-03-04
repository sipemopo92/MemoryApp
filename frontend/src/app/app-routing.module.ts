import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { GameComponent } from './components/main/game/game.component';
import { MainComponent } from './components/main/main.component';
import { RankingComponent } from './components/main/ranking/ranking.component';
import { UserScoresComponent } from './components/main/user-scores/user-scores.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
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
        path: 'user-scores',
        component: UserScoresComponent
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
