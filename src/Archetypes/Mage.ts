import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _instancedTimes = 0;
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    Mage._instancedTimes += 1;
    return this._instancedTimes;
  }
}
