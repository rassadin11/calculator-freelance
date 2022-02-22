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
  // save expressions

  // check length of result
  if (result < 10e-7) {
    return expo(String(result), 4)
  } else if (result.toString().split('').length > 9 && result < 10e7) {
    return String(Math.ceil(result * 10e7) / 10e7)
  }

  return result.toString()
}
