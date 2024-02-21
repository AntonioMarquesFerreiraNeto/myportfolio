import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreminComponent } from './sobremin.component';

describe('SobreminComponent', () => {
  let component: SobreminComponent;
  let fixture: ComponentFixture<SobreminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobreminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SobreminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
