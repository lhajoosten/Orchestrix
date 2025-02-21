import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrchestrixCoreComponent } from './orchestrix-core.component';

describe('OrchestrixCoreComponent', () => {
  let component: OrchestrixCoreComponent;
  let fixture: ComponentFixture<OrchestrixCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrchestrixCoreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrchestrixCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
