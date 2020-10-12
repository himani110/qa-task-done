import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { Home } from '../home';
import { Factorial } from '../factorial';
import { Fibonacci } from '../fibonacci';
import { RandomSquare } from '../randomSquare';

export const AppRoutes = () => {
    return (
        <Switch>
            <Route exact={true} path={'/'} component={Home} />
            <Route exact={true} path={'/factorial'} component={Factorial} />
            <Route exact={true} path={'/fibonacci'} component={Fibonacci} />
            <Route exact={true} path={'/random-square'} component={RandomSquare} />
            <Redirect path="*" to={'/'} />
        </Switch>
    );
};
