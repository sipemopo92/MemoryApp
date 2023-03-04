import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardData } from 'src/app/models/card-data.model';
import { User } from 'src/app/models/user';
import { ScoresService } from 'src/app/services/scores.service';
import { UsersService } from 'src/app/services/users.service';
import { EndDialogComponent } from './end-dialog/end-dialog.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnDestroy{

  user!: User;

  cardImages = [
    'pDGNBK9A0sk',
    'fYDrhbVlV1E',
    'qoXgaF27zBc',
    'b9drVB7xIOI',
    '-WBYxmW4yuw'
  ];
  cards: CardData[] = [];

  flippedCards: CardData[] = [];

  matchedCount = 0;

  startButtonMsg = 'Start';
  startButtonDisabled = false;
  startTimeout!: any;
  isStartGame = false;


  maximumTime = 30000;
  timer!: any;
  startTime!: number;
  score!: number;

  shuffleArray(anArray: any[]): any[] {
    return anArray.map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  }

  constructor(
    private dialog: MatDialog, 
    private usersService: UsersService,
    private scoresService: ScoresService
    ) { }


  ngOnInit() {
    this.user = this.usersService.getUserLogged()!;
    this.setupCards();
  }


  ngOnDestroy() {
    clearTimeout(this.startTimeout);
    clearTimeout(this.timer);

  }


  startGame() {
    this.startButtonDisabled = true;
    this.startTimeout = setTimeout( () => {
      this.isStartGame = true;
      this.startTimer();
    }, 3000);
    this.startButtonMsg = '3';
    for (let i = 2; i >= 0; i--) {
      setTimeout(() => {
        if(i == 0) this.startButtonMsg = 'Game';
        else this.startButtonMsg = i.toString();
      }, (3 - i) * 1000);
    }
  }


  startTimer() {
    this.startTime = Date.now();
    this.timer = setTimeout( () => {
      this.scoresService.addScore(this.user.id, 0).subscribe( res => {
        if (res.status == 'KO') {
          console.error(res.message);
        }
      });
      const dialogRef = this.dialog.open(EndDialogComponent, {
        disableClose: true,
        data: { win: false, score: 0 }
      });

      dialogRef.afterClosed().subscribe(() => {
        this.restart();
      });
    }, this.maximumTime)
  }


  stopTimer() {
    clearTimeout(this.timer);
    this.score = this.maximumTime - ( Date.now() - this.startTime);
  }


  setupCards(): void {
    this.cards = [];
    this.cardImages.forEach((image) => {
      const cardData: CardData = {
        imageId: image,
        state: 'default'
      };
      this.cards.push({ ...cardData });
      this.cards.push({ ...cardData });
    });
    this.cards = this.shuffleArray(this.cards);
  }


  cardClicked(index: number): void {
    const cardInfo = this.cards[index];

    if (cardInfo.state === 'default' && this.flippedCards.length < 2) {
      cardInfo.state = 'flipped';
      this.flippedCards.push(cardInfo);

      if (this.flippedCards.length > 1) {
        this.checkForCardMatch();
      }

    } else if (cardInfo.state === 'flipped') {
      cardInfo.state = 'default';
      this.flippedCards.pop();

    }
  }


  checkForCardMatch(): void {
    setTimeout(() => {
      const cardOne = this.flippedCards[0];
      const cardTwo = this.flippedCards[1];
      const nextState = cardOne.imageId === cardTwo.imageId ? 'matched' : 'default';
      cardOne.state = cardTwo.state = nextState;

      this.flippedCards = [];

      if (nextState === 'matched') {
        this.matchedCount++;

        if (this.matchedCount === this.cardImages.length) {
          this.stopTimer();
          this.scoresService.addScore(this.user.id, this.score).subscribe( res => {
            if (res.status == 'KO') {
              console.error(res.message);
            }
          });
          const dialogRef = this.dialog.open(EndDialogComponent, {
            disableClose: true,
            data: { win: true, score: this.score }
          });

          dialogRef.afterClosed().subscribe(() => {
            this.restart();
          });
        }
      }

    }, 500);
  }

  restart(): void {
    this.startButtonDisabled = false;
    this.startButtonMsg = 'Start'
    this.isStartGame = false;
    this.matchedCount = 0;
    this.setupCards();
  }


}
