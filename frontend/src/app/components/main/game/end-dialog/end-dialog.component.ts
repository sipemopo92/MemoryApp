import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Score } from 'src/app/models/score';
import { ScoresService } from 'src/app/services/scores.service';

@Component({
  selector: 'app-end-dialog',
  templateUrl: './end-dialog.component.html',
  styleUrls: ['./end-dialog.component.scss']
})
export class EndDialogComponent implements OnInit{

  aboveScores: Score[] = [];
  belowScores: Score[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {win: boolean, score: number},
    private scoresService: ScoresService
    ) { }

  ngOnInit() {
    this.scoresService.getAboveScoresByScore(this.data.score).subscribe( res => {
      if (res.status = 'OK') {
        this.aboveScores = res.data;
        console.log(this.aboveScores)
      } else {
        console.error(res.message);
      }
    });
    this.scoresService.getBelowScoresByScore(this.data.score).subscribe( res => {
      if (res.status = 'OK') {
        this.belowScores = res.data;
      } else {
        console.error(res.message);
      }
    });
  }

}
