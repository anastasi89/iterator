import Character from '../character';

test.each([
  ['символы', 'символы!', 123, 'Daemon'],
  ['символ', 'символ', 'ш', 'Bowman'],
  ['снова символы', 'символыоооооо', 'аваррпапккеп', 'Bowman'],
  ['символы', 'символы', 'ррррр', 'ООО'],
])('check class  %s', (_, expected, paramName, paramType) => {
  expect(() => {
    const result = new Character(paramName, paramType);
    return result;
  }).toThrow(expected);
});
