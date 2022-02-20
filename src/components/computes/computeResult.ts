import expo from './Devision'

export default function (
  numbers: string[],
  operations: string[],
  temp_result: string,
  setNumbers: any
): string {
  numbers.push(temp_result)

  let result: number = +numbers[0]
  numbers.shift()

  // compute result
  numbers.forEach((numb, idx) => {
    const oper = operations[idx] || operations[operations.length - 1]

    if (oper === '+') {
      result += +numb
    }

    if (oper === '-') {
      result = result - +numb
    }

    if (oper === 'X') {
      result = result * +numb
    }

    if (oper === '÷') {
      result = result / +numb
    }
  })

  setNumbers([])
  let res = ''
  // check length of result
  if (result.toString().length > 9) {
    res = expo(String(result), 4)
  }

  return res.toString()
}
