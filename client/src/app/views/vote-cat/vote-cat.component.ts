import { Component, OnInit } from '@angular/core';
import HttpService from 'src/app/services/api/http.service';
import { ICatResponse } from 'src/app/models/response/cat-response.interface';
import { IVoteRequest } from 'src/app/models/request/vote.request';
import { SocketService } from 'src/app/services/api/socket.service';

@Component({
  selector: 'app-vote-cat',
  templateUrl: './vote-cat.component.html',
  styleUrls: ['./vote-cat.component.css']
})

export class VoteCatComponent implements OnInit {
  noCatsCat: ICatResponse = {
    voteCookies: [''],
    _id: '',
    catId: '',
    imageUrl: '/assets/images/all-voted.png',
    width: 0,
    height: 0,
    score: 0,
    _v: 0,
  };

  errorCat: ICatResponse = {
    voteCookies: [''],
    _id: '',
    catId: '',
    imageUrl: '/assets/images/error-cat.jpg',
    width: 0,
    height: 0,
    score: 0,
    _v: 0,
  };

  cats: ICatResponse[];
  currentCat: ICatResponse = this.noCatsCat;

  crntCatIndex: number;
  topCats: ICatResponse[] = [];

  constructor(private httpService: HttpService, private socketService: SocketService ) {
    this.socketService.onNewMessage().subscribe(topCats => {
      this.topCats = topCats;
    });
   }

  async ngOnInit() {
    await this.getUnvotedCats();
    this.getRandomCat();
  }

  async getUnvotedCats() {
    try {
      const response = await this.httpService.getUnvotedCats();
      this.cats = response.body;
    } catch (e) {
      this.currentCat = this.errorCat;
    }
  }

  async voteCat(scoreToAdd: number) {
    if (this.cats.length === 0) {
      return;
    }

    const newScore = this.currentCat.score + scoreToAdd;
    const catVote: IVoteRequest = {
      catId: this.currentCat.catId,
      score: newScore
    };

    this.removeCat();
    await this.httpService.voteCat(catVote);
    this.socketService.catVoted();
  }

  getRandomCat() {
    this.crntCatIndex = Math.floor(Math.random() * this.cats.length);
    this.currentCat = this.cats[this.crntCatIndex];
  }

  removeCat() {
    for ( let i = 0; i < this.cats.length; i++) {
      if ( this.cats[i] === this.currentCat) {
        this.cats.splice(i, 1);
      }
    }
    if (this.cats.length > 0){
      this.getRandomCat();
      return;
    }

    this.currentCat = this.noCatsCat;
  }
}
