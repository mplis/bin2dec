import React from 'react';
import './App.css';

function binaryToDecimal(binaryString) {
    return binaryString
        .split('')
        .reverse() // reverse the string since the user is inputting digits from the right
        .reduce((decimal, digit, index) => {
            return digit === '1' ? decimal + Math.pow(2, index) : decimal;
        }, 0);
}

const binaryRegex = RegExp('^[0-1]*$');

function App() {
    const [binaryString, setBinaryString] = React.useState('');
    const [error, setError] = React.useState(null);

    const decimalString = binaryToDecimal(binaryString);

    function handleChange(e) {
        const value = e.target.value;
        if (!binaryRegex.test(value)) {
            setError("Input must contain only 0's or 1's");
        } else {
            setError(null);
        }
        setBinaryString(value.replace(/[^0-1]/gi, ''));
    }

    return (
        <div style={{ margin: '1rem' }}>
            <h1>Bin2Dec</h1>
            <h2>Binary</h2>
            <input placeholder="Enter 0's or 1's" value={binaryString} onChange={handleChange} />
            {error ? <div style={{ color: 'red' }}>{error}</div> : null}
            <h2>Decimal</h2>
            <div>{decimalString}</div>
        </div>
    );
}

export default App;
