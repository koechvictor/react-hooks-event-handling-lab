import React from "react";

function Keypad() {
    const handleonChange = () => {
        console.log('Entering password...');
    };

    return (
        <div>
            <input type="password" onChange={handleonChange} />
        </div>
    );
}

export default Keypad;
