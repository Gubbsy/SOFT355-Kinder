import HttpService from './http.service';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { TestBed, fakeAsync, tick } from '@angular/core/testing'
import { IVoteRequest } from 'src/app/models/request/vote.request';

describe('Service: Http', () => {
  let service: HttpService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService]
    });

    service = TestBed.get(HttpService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('getUnvotedCats should make get request to backend',
    fakeAsync( async () => {
        service.getUnvotedCats();

        const req = httpTestingController.expectOne(
            'http://localhost:9000/cat/getUnvotedCats'
        );

        expect(req.request.method).toEqual('GET');
        tick();
      })
  );

  it('vote cat should make post request to backend',
    fakeAsync( async () => {
      const vote: IVoteRequest = {
        catId: 'sdfe3',
        score: 2
      };

      service.voteCat(vote);

      const req = httpTestingController.expectOne(
          'http://localhost:9000/cat/voteCat'
      );

      expect(req.request.method).toEqual('POST');
      expect(req.request.body).toEqual(vote);
      expect(req.request.withCredentials).toEqual(true);
      expect(req.request.withCredentials).toEqual(true);
      tick();
    })
  );
});
