import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatPixComponent } from './cat-pix.component';

describe('CatPixComponent', () => {
  let component: CatPixComponent;
  let fixture: ComponentFixture<CatPixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatPixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatPixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
