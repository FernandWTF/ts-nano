import { URL } from './../src/index';

describe('main tests', () => {
  it('should get you to an awesome link!', () => {
    expect(URL).toEqual('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  });
});
