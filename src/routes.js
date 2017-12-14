import React from 'react'
import { Router, Route, hashHistory } from 'react-router'

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Home} />
        <Route path="*" component={Whoops404} />
    </Router>
)

export default routes
