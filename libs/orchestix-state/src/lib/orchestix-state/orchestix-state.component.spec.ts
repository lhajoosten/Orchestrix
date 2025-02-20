import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrchestixStateComponent } from './orchestix-state.component';

describe('OrchestixStateComponent', () => {
  let component: OrchestixStateComponent;
  let fixture: ComponentFixture<OrchestixStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrchestixStateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrchestixStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
