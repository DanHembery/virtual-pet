const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
  });

  describe('constructor', () => {
    it('sets the name property', () => {
      const pet = new Pet('Fido');
      expect(pet.name).toEqual('Fido');
    });
  });

  describe('constructor', () => {
    it('initial age is 0, hunger is 0 and fitness is 10', () => {
      const pet = new Pet('Fido');
      expect(pet.age).toEqual(0);
      expect(pet.hunger).toEqual(0);
      expect(pet.fitness).toEqual(10);
    });
  });

  describe('growUp', () => {
    it('increments age by 1, hunger by 5, and decreases fitness by 3', () => {
      const pet = new Pet('Fido');
      pet.growUp();
      expect(pet.age).toEqual(1);
      expect(pet.hunger).toEqual(5);
      expect(pet.fitness).toEqual(7);
    });
  });

  describe('walk', () => {
    it('increases fitness by 4', () => {
      const pet = new Pet('fido');
      pet.fitness = 4;
      pet.walk();
      expect(pet.fitness).toEqual(8);
    });
  });

  describe('walk', () => {
    it('increases fitness by 4 to a maximum of 10', () => {
      const pet = new Pet('fido');
      pet.fitness = 8;
      pet.walk();
      expect(pet.fitness).toEqual(10);
    });
  });
  describe('feed', () => {
    it('decreases hunger by 3', () => {
      const pet = new Pet('fido');
      pet.hunger = 5;
      pet.feed();
      expect(pet.hunger).toEqual(2);
    });
  });
  describe('feed', () => {
    it('decreases hunger by 3 to a maximum of 0', () => {
      const pet = new Pet('fido');
      pet.hunger = 2;
      pet.feed();
      expect(pet.hunger).toEqual(0);
    });
  });
  describe('feed', () => {
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.age = 30;
        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
  });
  describe('check up', () => {
    it('returns how the pet is feeling', () => {
      const pet = new Pet('fido');
      pet.hunger = 7;
      pet.fitness = 2;
      pet.checkUp();
      expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
    });
  });
  describe('check up', () => {
    it('returns how the pet is feeling', () => {
      const pet = new Pet('fido');
      pet.hunger = 4;
      pet.fitness = 2;
      pet.checkUp();
      expect(pet.checkUp()).toEqual('I need a walk');
    });
  });
  describe('check up', () => {
    it('returns how the pet is feeling', () => {
      const pet = new Pet('fido');
      pet.hunger = 7;
      pet.fitness = 7;
      pet.checkUp();
      expect(pet.checkUp()).toEqual('I am hungry');
    });
  });
  describe('check up', () => {
    it('returns how the pet is feeling', () => {
      const pet = new Pet('fido');
      pet.hunger = 2;
      pet.fitness = 7;
      pet.checkUp();
      expect(pet.checkUp()).toEqual('I feel great!');
    });
  });
  // describe('isAlive', () => {
  //   it('returns false if fitness < 1', () => {
  //     pet.fitness = 0;
  //     expect(pet.isAlive).toEqual(false);
  //   });
  //   it('returns true if fitness > 0', () => {
  //     expect(pet.isAlive).toEqual(true);
  //   });
  //   it('returns false if hunger > 9', () => {
  //     pet.hunger = 10;
  //     expect(pet.isAlive).toEqual(false);
  //   });
  //   it('returns true if hunger < 10', () => {
  //     expect(pet.isAlive).toEqual(true);
  //   });
  //   it('returns false if age > 29', () => {
  //     pet.age = 30;
  //     expect(pet.isAlive).toEqual(false);
  //   });
  //   it('returns true if age < 30', () => {
  //     expect(pet.isAlive).toEqual(true);
  //   });
  // });
  