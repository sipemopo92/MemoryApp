import { Component } from '@angular/core';
import { Score } from 'src/app/models/score';
import { User } from 'src/app/models/user';
import { ScoresService } from 'src/app/services/scores.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-scores',
  templateUrl: './user-scores.component.html',
  styleUrls: ['./user-scores.component.scss']
})
export class UserScoresComponent {

  user!: User;
  bestScore!: number;
  lastScore!: number;
  scores!: Score[];
  displayedColumns = ['score', 'data'];
  counter = 1;

  constructor(
    private usersService: UsersService,
    private scoresService: ScoresService
  ) {}

  ngOnInit() {
    this.user = this.usersService.getUserLogged()!;
    this.scoresService.getScoresByUserId(this.user.id).subscribe( res => {
      if (res.status == 'OK') {
        this.scores = res.data.map(score => {
          if(score.data) score.data = new Date(score.data);
          return score;
        });
        this.lastScore = this.scores[0].score ? this.scores[0].score : 0;
        this.bestScore = this.scores.reduce((max, score) => score.score > max ? score.score : max, 0);
      } else {
        console.error(res.message);
      }
    })
  }

}
