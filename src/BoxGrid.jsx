import Box from './Box';
import { useState } from 'react';

function BoxGrid({ numBoxes = 9 }) {
    const [boxes, setBoxes] = useState(new Array(numBoxes).fill(false));

   
    const reset = () => setBoxes(new Array(numBoxes).fill(false));

    const toggleBox = (idx) => {
        setBoxes(oldBoxes => 
            oldBoxes.map((value, i) => i === idx ? !value : value)
        );
    };

    return (
        <div className='BoxGrid'>
          {boxes.map((isActive, idx) => (
              <Box key={idx} isActive={isActive} toggleBox={() => toggleBox(idx)} />
          ))}
          <button onClick={reset}>Reset</button>
        </div>
    );
}

export default BoxGrid;
