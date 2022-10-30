import Fighter, { SimpleFighter } from '../Fighter';
import getRandomInt from '../utils';
import Battle from './Battle';

export default class PVE extends Battle {
  private _character: Fighter;
  private _monster: SimpleFighter[];

  constructor(character: Fighter, monster: SimpleFighter[]) {
    super(character);
    this._character = character;
    this._monster = monster;
  }

  fight(): number {
    while (this._character.lifePoints > 0 
        && this._monster.every((monster) => monster.lifePoints > 0)) {
      this._character.attack(this
        ._monster[getRandomInt(0, this._monster.length)]);

      this._monster[getRandomInt(0, this._monster.length)]
        .attack(this._character);
    }
    
    return this._character.lifePoints === -1 ? -1 : 1;
  }
}
