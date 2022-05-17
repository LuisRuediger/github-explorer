import { useState } from 'react'

export function Counter() {

    const [counter, setCounter] = useState(0)

    function increment() {
        setCounter(counter + 1)
    }

    return (
        <div>
            <div>{counter}</div>
            <button type="button" onClick={increment}>Add</button>
        </div>
    )
}