import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrchestrixStateComponent } from './orchestrix-state.component';

describe('OrchestrixStateComponent', () => {
  let component: OrchestrixStateComponent;
  let fixture: ComponentFixture<OrchestrixStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrchestrixStateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrchestrixStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
