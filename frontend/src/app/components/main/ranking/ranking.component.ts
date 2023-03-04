import { Component, OnInit } from '@angular/core';
import { Score } from 'src/app/models/score';
import { ScoresService } from 'src/app/services/scores.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {


  scores!: Score[];
  
  displayedColumns = ['index', 'name', 'score', 'data'];
  counter = 1;


  constructor(
    private scoresService: ScoresService
  ) {}

  ngOnInit() {
    this.scoresService.getRanking().subscribe( res => {
      if (res.status == 'OK') {
        this.scores = res.data.map(score => {
          score.data = new Date(score.data);
          return score;
        });
        for (let i = 0; i < this.scores.length; i++) {
          this.scores[i].index = i+1;
        }
        console.log(this.scores)
      } else {
        console.error(res.message);
      }
    })
  }


}
