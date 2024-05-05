import './Box.css';

function Box({isActive, toggleBox}) {

    return (<div onClick={toggleBox} className="Box" style={{backgroundColor: isActive ? 'green' : 'yellow'}}></div>)
}

export default Box;