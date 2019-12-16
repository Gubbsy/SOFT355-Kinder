import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { VoteCatComponent } from './vote-cat.component';
import { SocketService } from 'src/app/services/api/socket.service';
import HttpService from 'src/app/services/api/http.service';
import { Socket } from 'ngx-socket-io';
import { SocketServiceMock } from 'src/mocks/socket-service.mock';

describe('VoteCatComponent', () => {
  let component: VoteCatComponent;
  let fixture: ComponentFixture<VoteCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteCatComponent ],
      providers: [HttpService,
        { provide: SocketService, useClass: SocketServiceMock}
      ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
