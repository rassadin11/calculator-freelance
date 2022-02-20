import { Grid } from '@mui/material'
import React from 'react'
import Action from './Action'
import { v4 } from 'uuid'
import { ButtonOrder } from './ButtonOrder'

interface Props {
  numbers: string[]
  signs: string[]
  temporaryResult: string
  // useState functions and compute functions
  computeOperation: any
  clearNumbers: any
  setNumbers: any
  setSigns: any
  setTemporaryResult: any
}

export default function Actions({
  setNumbers,
  numbers,
  signs,
  setSigns,
  temporaryResult,
  setTemporaryResult,
  computeOperation,
  clearNumbers,
}: Props): JSX.Element {
  const sendNumber = (operator: string) => {
    setTemporaryResult('')
    setNumbers([...numbers, temporaryResult])
    setSigns([...signs, operator])
  }

  return (
    <div>
      <Grid
        container
        spacing={0}
        sx={{ marginTop: '14px', justifyContent: 'space-between' }}
      >
        {ButtonOrder().map((btn) => (
          <Action
            {...btn}
            key={v4()}
            result={temporaryResult}
            setTemporaryResult={setTemporaryResult}
            sendNumber={sendNumber}
            computeOperation={computeOperation}
            clearNumbers={clearNumbers}
          />
        ))}
      </Grid>
    </div>
  )
}
