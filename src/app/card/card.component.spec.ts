import { ComponentFixture, flushMicrotasks, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.user = {
      id: '1',
      name: 'Jane',
      role: 'Designer',
      pokemon: 'Blastoise'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('card component', () => {
    it('should return the correct name in a p tag', () => {
      expect(fixture.nativeElement.querySelector('p').innerText).toEqual('Jane');
    }),
    it('should return the role in a li tag', () => {
      expect(fixture.nativeElement.querySelectorAll('li')[0].innerText).toEqual('Role: Designer');
    }),
    it('should return the pokemon in a li tag', () => {
      expect(fixture.nativeElement.querySelectorAll('li')[1].innerText).toEqual('Pokemon: Blastoise');
    })
    it('should call reverse name on button click', () => {
      const reverseNameSpy = spyOn(component.reverseName, 'emit');
      fixture.nativeElement.querySelector('button').click();
      expect(reverseNameSpy).toHaveBeenCalled();
    })
  })
});
