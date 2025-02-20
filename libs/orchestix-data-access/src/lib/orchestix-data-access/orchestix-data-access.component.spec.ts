import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrchestixDataAccessComponent } from './orchestix-data-access.component';

describe('OrchestixDataAccessComponent', () => {
  let component: OrchestixDataAccessComponent;
  let fixture: ComponentFixture<OrchestixDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrchestixDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrchestixDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
