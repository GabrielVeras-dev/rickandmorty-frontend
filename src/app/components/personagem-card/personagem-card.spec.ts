import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagemCard } from './personagem-card';

describe('PersonagemCard', () => {
  let component: PersonagemCard;
  let fixture: ComponentFixture<PersonagemCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonagemCard],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonagemCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
