import React from 'react';

class Demo2 extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    render() {
        const { testStore } = this.props
        return (
            <div className="demo1">
                demo2
            </div>
        )
    }
}

export default Demo2;