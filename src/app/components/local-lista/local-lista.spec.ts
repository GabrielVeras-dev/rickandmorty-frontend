import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalLista } from './local-lista';

describe('LocalLista', () => {
  let component: LocalLista;
  let fixture: ComponentFixture<LocalLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalLista],
    }).compileComponents();

    fixture = TestBed.createComponent(LocalLista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
