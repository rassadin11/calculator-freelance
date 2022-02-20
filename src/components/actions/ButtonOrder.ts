import { makeStyles } from '@mui/styles'
import { Signs } from '../computes/enums'
import { IButtonOrder } from './interfaces'

const useStyles = makeStyles({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    height: '79.46px',
    background: '#F1F3F6',
    boxShadow: '-5px -5px 10px #FFFFFF, 5px 5px 10px rgba(55, 84, 170, 0.1)',
    borderRadius: '20px',
    margin: '0 7.5px 15px',
    marginTop: '10px',
    flex: '0 0 20%',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: '29px',
    color: '#3A4E89',
    cursor: 'pointer',
    transition: 'all .3s ease',

    '&:hover': {
      boxShadow: '-5px -5px 10px #FFFFFF, 5px 5px 10px rgba(55, 84, 170, 0.4)',
    },
  },
  largeButton: {
    flex: '0 0 calc(40% + 25px)',
  },
  containedButton: {
    background: '#3A4E89',
    color: '#fff',
    fontSize: '29px',
  },
})

export function ButtonOrder(): IButtonOrder[] {
  const { button, containedButton, largeButton } = useStyles()

  return [
    {
      button,
      symbol: Signs[6],
      number: false,
    },
    {
      button,
      symbol: Signs[4],
      number: false,
    },
    {
      button,
      symbol: Signs[7],
      number: false,
    },
    {
      button: `${button} ${containedButton}`,
      symbol: Signs[3],
      number: false,
    },
    {
      button,
      symbol: '7',
      number: true,
    },
    {
      button,
      symbol: '8',
      number: true,
    },
    {
      button,
      symbol: '9',
      number: true,
    },
    {
      button: `${button} ${containedButton}`,
      symbol: Signs[2],
      number: false,
    },
    {
      button,
      symbol: '4',
      number: true,
    },
    {
      button,
      symbol: '5',
      number: true,
    },
    {
      button,
      symbol: '6',
      number: true,
    },
    {
      button: `${button} ${containedButton}`,
      symbol: Signs[1],
      number: false,
    },
    {
      button,
      symbol: '1',
      number: true,
    },
    {
      button,
      symbol: '2',
      number: true,
    },
    {
      button,
      symbol: '3',
      number: true,
    },
    {
      button: `${button} ${containedButton}`,
      symbol: Signs[0],
      number: false,
    },
    {
      button: `${button} ${largeButton}`,
      symbol: '0',
      number: true,
    },
    {
      button,
      symbol: Signs[8],
      number: false,
    },
    {
      button: `${button} ${containedButton}`,
      symbol: Signs[5],
      number: false,
    },
  ]
}
