// eslint-disable-next-line max-classes-per-file
import read from './reader';
import json from './parser';
import GameSaving from './save';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((result) => json(result))
      .then((save) => new GameSaving(JSON.parse(save)));
  }
}
