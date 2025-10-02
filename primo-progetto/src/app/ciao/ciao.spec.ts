import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ciao } from './ciao';

describe('Ciao', () => {
  let component: Ciao;
  let fixture: ComponentFixture<Ciao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ciao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ciao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
