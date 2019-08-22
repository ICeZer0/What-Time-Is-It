import React from 'react';

class Clock extends React.Component {
    render(){
        return Date(Date.now());
    }
}

export default Clock;