import React from 'react';

class Demo1 extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    render() {
        const { testStore } = this.props
        return (
            <div className="demo1">
                demo1
            </div>
        )
    }
}

export default Demo1;