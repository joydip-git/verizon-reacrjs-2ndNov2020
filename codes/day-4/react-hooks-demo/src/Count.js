import React, { memo, useEffect } from 'react'

const Count = ({ count, handler }) => {
    useEffect(() => {
        console.log('[Count] this effect runs always')

        return () => {
            console.log('[Count] this inside code runs always except very first time')
        }
    })

    useEffect(() => {
        console.log('[Count] this effect runs only when count changes')
        return () => {
            console.log('[Count] this inside code runs only when count changes except very first time')
        }
    }, [count])


    //componentDidMount
    useEffect(() => {
        console.log('[Count] this effect runs only one time..when it is mounted')
    }, [])

    //componentWillUnMount
    useEffect(() => {
        return () => {
            console.log('[Count] this inside code runs only one time..when the component gets dismounted')
        }
    }, [])

    console.log('[Count] rendered...')
    return (
        <div>
            <span>Count:&nbsp;{count}</span>
            <br />
            <button onClick={handler}>Increase Count</button>
        </div>
    )
}

export default memo(Count)
