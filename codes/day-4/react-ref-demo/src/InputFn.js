import { Component, forwardRef } from "react"

function InputFnOriginal(props, reference) {
    return (
        <div>
            X:{props.x}
            <br/>
            Child Fn Input:&nbsp;<input type='text' ref={reference} />
        </div>
    )
}

const InputFn = forwardRef(InputFnOriginal)
export default InputFn;
/*
const fr = (OC) => {
    class FR extends Component {
        render() {
            return <OC {...this.props}/>
        }
    }
    return FR;
}
*/
