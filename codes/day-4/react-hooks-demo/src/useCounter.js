import { useState } from "react"

const useCounter = (initialState) => {

    const [countState, setCountState] = useState(initialState);

    const increaseCountHandler = () => {
        setCountState(ps => ps + 1);
    }

    return [countState, increaseCountHandler];
}

export default useCounter;