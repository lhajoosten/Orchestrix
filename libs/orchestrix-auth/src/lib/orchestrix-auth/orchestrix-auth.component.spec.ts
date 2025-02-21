import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrchestrixAuthComponent } from './orchestrix-auth.component';

describe('OrchestrixAuthComponent', () => {
  let component: OrchestrixAuthComponent;
  let fixture: ComponentFixture<OrchestrixAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrchestrixAuthComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrchestrixAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
