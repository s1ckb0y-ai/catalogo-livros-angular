import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router'; 
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([])
      ],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render navbar with correct links', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    

    expect(compiled.querySelector('.navbar-brand')?.textContent).toContain('Catálogo');
    

    const links = compiled.querySelectorAll('.nav-link');
    expect(links.length).toBe(2);
    expect(links[0].textContent).toContain('Lista');
    expect(links[1].textContent).toContain('Cadastro');
    

    expect(links[0].getAttribute('routerLink')).toBe('/lista');
    expect(links[1].getAttribute('routerLink')).toBe('/dados');
  });
});