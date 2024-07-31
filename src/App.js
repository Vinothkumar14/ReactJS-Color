import React, { useState } from 'react';

const ColorChanger = () => {
    const [color, setColor] = useState('');
    const [textColor, setTextColor] = useState('black');
    const [backgroundColor, setBackgroundColor] = useState('white');

    const handleColorChange = (event) => {
        const newColor = event.target.value;
        setColor(newColor);

        setBackgroundColor(newColor);
    };

    const toggleTextColor = () => {
        setTextColor(textColor === 'black' ? 'white' : 'black');
    };

    const determineTextColor = () => {
        if (textColor === 'black') {
            return 'white'; 
        } else {
            return 'black'; 
        }
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: 'auto', textAlign: 'center', paddingTop: '50px', backgroundColor: backgroundColor }}>
            <div style={{ marginBottom: '20px' }}>
                <label style={{ fontSize: '18px' }}>
                    Enter a color:
                    <input
                        type="text"
                        value={color}
                        onChange={handleColorChange}
                        style={{ marginLeft: '10px', padding: '5px', fontSize: '16px' }}
                    />
                </label>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <label style={{ fontSize: '24px', fontWeight: 'bold', color: determineTextColor() }}>
                    {color.length > 0 ? color : 'No color entered'}
                </label>
                {/* <div style={{ color: determineTextColor(), marginTop: '10px' }}>
                    {color.length > 0 && (
                        <>
                            <p style={{ fontSize: '18px' }}> {color}</p>
                            {/* <p style={{ fontSize: '18px' }}>Color code: {textColor === 'black' ? '#000000' : '#ffffff'}</p> */}
                        {/* </>
                    )}
                </div> */}
            </div>

            <div>
                <button
                    style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px 20px', fontSize: '18px', cursor: 'pointer', borderRadius: '5px' }}
                    onClick={toggleTextColor}
                >
                    Toggle Text Color
                </button>
            </div>
        </div>
    );
};

export default ColorChanger;
