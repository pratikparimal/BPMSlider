import React from 'react';
import '../css/Metronome.css';
import BPMViewComponent from './BPMViewComponent';

class BPMMainView extends React.Component{
    render(){
        return(
            <div className="metronome">
                <BPMViewComponent />
            </div>
        )
    }
    
}

export default BPMMainView;