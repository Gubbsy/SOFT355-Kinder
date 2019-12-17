import { async, ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { VoteCatComponent } from './vote-cat.component';
import { SocketService } from 'src/app/services/api/socket.service';
import HttpService from 'src/app/services/api/http.service';
import { SocketServiceMock } from 'src/mocks/socket-service.mock';
import { HttpServiceMock } from 'src/mocks/http.server.mock';
import { IVoteRequest } from 'src/app/models/request/vote.request';
import { exec } from 'child_process';
import { By } from '@angular/platform-browser';

describe('VoteCatComponent', () => {
  let component: VoteCatComponent;
  let fixture: ComponentFixture<VoteCatComponent>;
  let socketService: SocketService;
  let httpService: HttpService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteCatComponent ],
      providers: [
        { provide: SocketService, useClass: SocketServiceMock},
        { provide: HttpService, useClass: HttpServiceMock}
      ],
      imports: []
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoteCatComponent);
    component = fixture.componentInstance;
    socketService = TestBed.get(SocketService);
    httpService = TestBed.get(HttpService);
    fixture.detectChanges();

  }));

  afterEach(() => {
    fixture.destroy();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all cats using http service when intialised and set cats array', fakeAsync(() => {
    expect(component.cats.length).toEqual(2);
  }));

  it('Should get a random cat and setit to the current cat', () =>{
    expect(component.crntCatIndex).not.toBeUndefined();
  });

  it('Should call voteCat using http service and remove ct', fakeAsync(() => {
    let numCatsBefore = component.cats.length

    const vote: IVoteRequest = {
      catId: component.currentCat.catId,
      score: component.currentCat.score + 3
    };
    spyOn(httpService, "voteCat");
    spyOn(socketService, "catVoted");
    component.voteCat(3);
    tick();
    console.log("Cats size: " + component.cats.length)
    expect(httpService.voteCat).toHaveBeenCalledWith(vote);
    expect(socketService.catVoted).toHaveBeenCalled();
    expect(component.cats.length).toEqual(numCatsBefore - 1);
  }));

  it('Should set cat to errorCat if there is a http error', fakeAsync(() => {
    component.cats = [];
    component.currentCat = null;

    spyOn(httpService, "getUnvotedCats").and.throwError("http error");
    component.getUnvotedCats();
    tick();
    expect(component.currentCat.imageUrl).toEqual('/assets/images/error-cat.jpg');
  }));

  it('Should set not call http servie or socket srevice if there are no cats to vote', fakeAsync(() => {
    component.cats = [];

    spyOn(httpService, "voteCat");
    spyOn(socketService, "catVoted");
    component.voteCat(3);
    tick();
    expect(httpService.voteCat).not.toHaveBeenCalled();
    expect(socketService.catVoted).not.toHaveBeenCalled();
  }));

  it('should render a cat image', () => {
    let catImage = fixture.debugElement.query(By.css('.catImg'));
    expect(catImage).not.toBeNull();
  });

  it('should render image buttons', () => {
    let voteButtons = fixture.debugElement.query(By.css('.rateButton'));
    expect(voteButtons).not.toBeNull();
  });
});
