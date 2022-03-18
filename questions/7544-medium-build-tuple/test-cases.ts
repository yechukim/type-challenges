import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<BuildTuple<0>, []>>,
  Expect<Equal<BuildTuple<2>, [unknown, unknown]>>,
  Expect<Equal<BuildTuple<999>["length"], 999>>,
  // @ts-expect-error
  Expect<Equal<BuildTuple<1000>["length"], 1000>>,
]
