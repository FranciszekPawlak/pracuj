export const calculateFactorial = (n: number) => {
  let value = 1
  for (let i = 2; i <= n; i++) {
    value = value * i
  }
  return value
}
