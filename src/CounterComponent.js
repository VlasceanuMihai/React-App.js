import { useEffect, useState } from 'react';

const CounterComponent = (props) => {
    const [ counter, setCounter ] = useState(0);

    useEffect(() => {
        console.log(counter);
    });

    useEffect(() => {
        console.log("Component did mount!");

        return () => {
            console.log("Component did mount!")
        };
    }, []);

    return (
        <div>
            <button onClick={() => setCounter(counter - 1)}>-</button>
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    );
};

export default CounterComponent;