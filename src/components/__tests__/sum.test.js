import {sum} from "../sum";

//jest already know about test and expect function so no need to import this oly need to import sum fun.
//only external function need to import like sum

test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });