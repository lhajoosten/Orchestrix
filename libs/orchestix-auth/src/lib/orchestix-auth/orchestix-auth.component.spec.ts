import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrchestixAuthComponent } from './orchestix-auth.component';

describe('OrchestixAuthComponent', () => {
  let component: OrchestixAuthComponent;
  let fixture: ComponentFixture<OrchestixAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrchestixAuthComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrchestixAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
