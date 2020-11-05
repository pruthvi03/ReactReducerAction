import React, { useContext } from 'react'
import { Button, ButtonGroup, Badge } from 'reactstrap';
import { CounterContext } from '../App'
import 'bootstrap/dist/css/bootstrap.min.css';
const ComponentC = () => {
    const countercontext = useContext(CounterContext)
    const { counter, dispatch } = countercontext
    return (
        <div>
            <ButtonGroup>
                <Button color='primary' outline>
                   ComponentC Counter <Badge color='secondary'>{counter}</Badge>
                </Button>
            </ButtonGroup>
            <p></p>
            <ButtonGroup>
                <Button color='dark' onClick={() => dispatch({ type: 'increment', payload: 1 })}>Increment Counter 1</Button>
                <Button color='dark' onClick={() => dispatch({ type: 'decrement', payload: 1 })}>Decrement Counter 1</Button>
                <Button color='danger' onClick={() => dispatch({ type: 'reset' })}>Reset</Button>
            </ButtonGroup>

        </div>
    )
}

export default ComponentC
