import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Group from 'views/Group';
import Hot from 'views/Hot';
import Fun from 'views/Fun';
import Sort from 'views/Sort';


const BasicRouter = () => {
    return (
        <Switch>
            <Route path="/group" component={Group} />
            <Route path="/hot" component={Hot} />
            <Route path="/fun" component={Fun} />
            <Route path="/sort" component={Sort} />
        </Switch>
    );
}

export default BasicRouter;
