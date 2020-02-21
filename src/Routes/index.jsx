import React from 'react';
import { Switch, Route } from 'react-router-dom'

/* Paginas */
import Home from '../Pages/Home'
import About from '../Pages/About'

export default props => (
    <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/sobre' component={About} />
        <Route component={() => <h1>404 Pagina não encontrada.</h1>} />
    </Switch>
)