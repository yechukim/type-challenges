import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Subtraction<1, 1>, 0>>,
  Expect<Equal<Subtraction<2, 1>, 1>>,
  Expect<Equal<Subtraction<1, 2>, never>>,
  // @ts-expect-error
  Expect<Equal<Subtraction<1000, 999>, 1>>
]
