import React, { useState } from 'react'
import Count from './Count';
import Name from './Name';

const Parent = () => {
    const [state, setState] = useState({ name: '', count: 0, show: true });

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

    const changeShowHandler = () => {
        setState(ps => {
            return {
                ...ps,
                show: !ps.show
            }
        })
    }

    console.log('[Parent] rendered...')
    return (
        <div>
            <button onClick={changeShowHandler}>{state.show ? 'Hide' : 'Show'}</button>
            <br /><br />
            <Name name={state.name} handler={changeNameHandler} />
            <br />
            {state.show && <Count count={state.count} handler={changeCountHandler} />}
        </div>
    )
}

export default Parent
