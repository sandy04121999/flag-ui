import { TestBed } from '@angular/core/testing';
import { FlagComponent } from './flag.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlagComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(FlagComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'flag-feature-ui' title`, () => {
    const fixture = TestBed.createComponent(FlagComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('flag-feature-ui');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(FlagComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, flag-feature-ui');
  });
});
