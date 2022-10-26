import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _instancedTimes = 0;
  constructor(name:string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    Dwarf._instancedTimes += 1;
    return this._instancedTimes;
  }
}
