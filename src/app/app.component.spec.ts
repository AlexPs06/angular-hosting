import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule, 
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
 
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-hosting'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-hosting');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-hosting!');
  });


  it('submitting a form emits a formUnidades', () => {
    let fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    // get test component from the fixture
    let component = fixture.componentInstance;
    component.formUnidades.controls['Numero1'].setValue(2);
    component.formUnidades.controls['Numero2'].setValue(2);
    component.Suma();
    // Now we can check to make sure the emitted value is correct
    expect(component.Resultado).toBe(4);

  });
});
