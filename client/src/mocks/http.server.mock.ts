import { IVoteRequest } from 'src/app/models/request/vote.request';
import { ICatResponse } from 'src/app/models/response/cat-response.interface';

const unvotedCat1: ICatResponse = {
  _id: '1',
  catId: 'Meow-1', 
  imageUrl: 'https://caturl-2.com',
  width: 1920,
  height: 1080,
  score: 3,
  voteCookies: ['dsdf'],
  _v: 0
};

const unvotedCat2: ICatResponse = {
  _id: '2',
  catId: 'Meow-2',
  imageUrl: 'https://caturl-2.com',
  width: 480,
  height: 480,
  score: 2,
  voteCookies: ['sdfsd'],
  _v: 0
};

const response = {
  body: [unvotedCat1, unvotedCat2]
};

export class HttpServiceMock {

  async getUnvotedCats() {
    return response;
  }

  voteCat(vote: IVoteRequest) {
    console.log("Vote: " + JSON.stringify(vote));
  }
}
