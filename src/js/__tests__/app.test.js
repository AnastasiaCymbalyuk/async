import GameSavingLoader from '../loader';

// eslint-disable-next-line arrow-body-style
it('test', () => {
  return GameSavingLoader.load().then((save) => {
    expect(save).toEqual({
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1,
        name: 'Hitman',
        level: 10,
        points: 2000,
      },
    });
  });
});
