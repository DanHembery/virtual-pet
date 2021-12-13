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