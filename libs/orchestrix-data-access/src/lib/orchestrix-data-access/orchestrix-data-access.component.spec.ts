import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrchestrixDataAccessComponent } from './orchestrix-data-access.component';

describe('OrchestrixDataAccessComponent', () => {
  let component: OrchestrixDataAccessComponent;
  let fixture: ComponentFixture<OrchestrixDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrchestrixDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrchestrixDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
