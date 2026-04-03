import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagemLista } from './personagem-lista';

describe('PersonagemLista', () => {
  let component: PersonagemLista;
  let fixture: ComponentFixture<PersonagemLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonagemLista],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonagemLista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
