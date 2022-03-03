import GameSavingLoader from '../loader';

it('test', async () => {
  const save = await GameSavingLoader.load();
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
