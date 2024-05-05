import './Box.css';
import {useState} from 'react'

function Box() {
    const [isActive, setIsActive] = useState(false);

    const toggleIsActive = () => setIsActive(!isActive);

    return (<div onClick={toggleIsActive} className="Box" style={{backgroundColor: isActive ? 'green' : 'yellow'}}></div>)
}

export default Box;