import React from "react"

function EyesOnMe() {
    const handleonfocus = () => {
        console.log('Good!')
    }

    const handleonblur = () => {
        console.log('Hey! Eyes on me!')
    }
    return (
        <button onBlur={handleonblur} onFocus={handleonfocus}>Eyes on me</button>
    );
}
export default EyesOnMe;
