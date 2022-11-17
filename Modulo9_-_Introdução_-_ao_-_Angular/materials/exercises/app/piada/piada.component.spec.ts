import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiadaComponent } from './piada.component';

describe('PiadaComponent', () => {
  let component: PiadaComponent;
  let fixture: ComponentFixture<PiadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
