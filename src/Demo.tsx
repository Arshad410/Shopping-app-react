import React from "react";

type State = { no: number };


class Demo extends React.PureComponent {
    state: State = { no: 0 };
    render(){
        console.log("RENDER CALLED", this.state);
        const name = "MIke";

        return (
            <div>
                <button onClick={() => this.setState({ no: 1 })}>Change state to 1</button>
                <button onClick={() => this.setState({ no: 0} )}>Change state to 0</button>
            </div>
        );
    }
}

export default Demo;