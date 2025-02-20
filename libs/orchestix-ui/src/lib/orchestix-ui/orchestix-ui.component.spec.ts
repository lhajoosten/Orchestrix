import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrchestixUiComponent } from './orchestix-ui.component';

describe('OrchestixUiComponent', () => {
  let component: OrchestixUiComponent;
  let fixture: ComponentFixture<OrchestixUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrchestixUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrchestixUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
