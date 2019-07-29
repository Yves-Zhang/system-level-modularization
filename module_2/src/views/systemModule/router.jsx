import React from 'react';
import {
    renderRoutes
} from 'react-router-config'
import {
    BrowserRouter,
    HashRouter,
    Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import {
    AsyncComponent
} from '@commonComponents'


const routes = [{
    title: 'demo1',
    path: '/demo1',
    exact: false,
    component: AsyncComponent(() => import("./demo1"))
},
{
    title: 'demo1',
    path: '/demo2',
    exact: false,
    component: AsyncComponent(() => import("./demo2"))
}
]

// @inject 与@observer的顺序不能错 否则会导致试图无法重新渲染
class RouterList extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // getTestData()
    }

    render() {
        return (
            <Router {...this.props}>
                <Switch>
                    {
                        renderRoutes(routes)
                    }
                </Switch>
            </Router>
        )
    }
}

if (window.system) {
    window.system.push(...RouterList)
} else {
    window.system = [RouterList]
}


export default RouterList