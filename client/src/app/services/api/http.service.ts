import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICatResponse } from 'src/app/models/response/cat-response.interface';
import { IVoteRequest } from 'src/app/models/request/vote.request';


@Injectable({
  providedIn: 'root'
})
export default class HttpService {
  baseURI = 'http://localhost:9000/cat';
  headers = {
    'Content-Type': 'application/json'
  };

  constructor(private http: HttpClient) { }

  getUnvotedCats() {
    
  }

  voteCat(vote: IVoteRequest) {
   
  }

  setCookie() {

  }

}
