import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrchestrixUiComponent } from './orchestrix-ui.component';

describe('OrchestrixUiComponent', () => {
  let component: OrchestrixUiComponent;
  let fixture: ComponentFixture<OrchestrixUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrchestrixUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrchestrixUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
