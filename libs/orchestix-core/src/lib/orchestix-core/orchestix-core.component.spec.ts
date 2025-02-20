import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrchestixCoreComponent } from './orchestix-core.component';

describe('OrchestixCoreComponent', () => {
  let component: OrchestixCoreComponent;
  let fixture: ComponentFixture<OrchestixCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrchestixCoreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrchestixCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
