Implement the type Subtraction that is ` - ` in Javascript by using BuildTuple.

0 <= minuend <= 999, 0 <= subtrahend <= 999, limited by Typescript v4.6.2

If the minuend is less than the subtrahend, it should be `never`.

It's a simple version.

For example

```ts
Subtraction<2, 1> // expect to be 1
Subtraction<1, 2> // expect to be never
```
