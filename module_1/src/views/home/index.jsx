import React from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'
import { BrowserRouter, HashRouter, Router, Switch, Route, Redirect } from 'react-router-dom';
import { Button } from 'antd'
import { DevTools } from '@commonComponents'

import { getTestData } from '@http/testHttp'

import Header from './header'
import { inject, observer } from 'mobx-react'

console.log('在这里打印全局变量：', global)

let Routers = []
if (global.system) {
    Routers = global.system
}

// @inject 与@observer的顺序不能错 否则会导致试图无法重新渲染

@inject('testStore')
@observer
class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // getTestData()
    }

    change = () => {
        const { testStore } = this.props
        testStore.add();
    }

    createRouter = (Routers) => {
        return Routers.map((Item, index) => {
            return <Item {...this.props} key={index} />
        })
    }

    render() {
        const { testStore } = this.props
        return (
            <div className="homeContent">
                {/* <Header /> */}
                num:{testStore.num}
                <Button onClick={this.change}>改变store里的值</Button>
                {
                    Routers && Routers.length != 0 ? this.createRouter(Routers) : null
                }
                <DevTools />
            </div>
        )
    }
}

export default Home;