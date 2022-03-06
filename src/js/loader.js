// eslint-disable-next-line max-classes-per-file
import read from './reader';
import json from './parser';

export class GameSaving {
  constructor(id, created, userInfo) {
    this.id = id;
    this.created = created;
    this.userInfo = userInfo;
  }
}

export default class GameSavingLoader {
  static load() {
    return read()
      .then((result) => json(result))
      .then((save) => new GameSaving(JSON.parse(save)));
  }
}
