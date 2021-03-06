/* What are we doing here?
1. Set up the service we want to test with providers.
2. Inject the service into our test suite. */

import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let usersService: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService]
    });

    usersService = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(usersService).toBeTruthy();
  });

  describe('all', () => {
    it('should return a collection of users', () => {
      const userResponse = [
        {
          id: '1',
          name: 'Jane',
          role: 'Designer',
          pokemon: 'Blastoise'
        },
        {
          id: '2',
          name: 'Bob',
          role: 'Developer',
          pokemon: 'Charizard'
        }
      ];

      let response;
      spyOn(usersService, 'all').and.returnValue(of(userResponse));

      usersService.all().subscribe(res => {
        response = res;
        expect(response).toEqual(userResponse);
      });
    });
  });

  describe('findOne', () => {
    it('should return a single user', () => {
      const userResponse = {
        id: '2',
        name: 'Bob',
        role: 'Developer',
        pokemon: 'Charizard'
      };

      expect(usersService.findOne('2')).toEqual(userResponse);
    });
  });

  describe('reverseName', () => {
    it('should return reverse a name given an id', () => {
      const userResponse = {
        id: '2',
        name: 'Bob',
        role: 'Developer',
        pokemon: 'Charizard'
      };

      expect(usersService.reverseName('2')).toEqual(userResponse.name.split('').reverse().join(''));
    });

    it('should return empty string if it does not have an id', () => {
      expect(usersService.reverseName('5')).toEqual('');
    });
  });
});