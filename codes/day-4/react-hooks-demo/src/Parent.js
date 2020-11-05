import React, { useState } from 'react'
import Count from './Count';
import Name from './Name';

const Parent = () => {
    const [state, setState] = useState({ name: '', count: 0 });

    const changeNameHandler = (newName) => {
        setState(ps => {
            return {
                ...ps,
                name: newName
            }
        })
    }
    const changeCountHandler = () => {
        setState(ps => {
            return {
                ...ps,
                count: ps.count + 1
            }
        })
    }

    console.log('[Parent] rendered...')
    return (
        <div>
            <Name name={state.name} handler={changeNameHandler} />
            <br />
            <Count count={state.count} handler={changeCountHandler} />
        </div>
    )
}

export default Parent
