import { useState, useEffect } from 'react';

function Hello(props) {
    const [stateVariable, setStateVariable] = useState(0);

    useEffect(() => {
        console.log('mount and update');
        
        return () => {
            console.log('clean-upp');
        };
    });

    return(
        <div>
            <h1>Hello React!!!</h1>
        </div>
    );
}

export default Hello;