import { useState, useEffect } from 'react';

function UseEffectComponent() {
    const [value, valueSet] = useState(1);

    //must call v as a function as opposed to value because otherwise it would only register it as the initial value
    useEffect(() => {
        const timer = window.setInterval(() => {
            valueSet(v => v + 1);
        }, 1000);
        // useEffect can return a function which runs when the component. in this case, it's the cleanup function to get rid of the interval
        return () => window.clearInterval(timer);
    }, []);

    return(
        <div>{value}</div>
    )
}

export default UseEffectComponent;