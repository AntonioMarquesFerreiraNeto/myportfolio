import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatemeComponent } from './contateme.component';

describe('ContatemeComponent', () => {
  let component: ContatemeComponent;
  let fixture: ComponentFixture<ContatemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContatemeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContatemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
