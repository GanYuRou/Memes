import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Group from 'views/Group';
import Hot from 'views/Hot';
import Fun from 'views/Fun';
import Sort from 'views/Sort';
import GroupDetail from 'components/GroupDetail';


const BasicRouter = () => {
    return (
        <Switch>
            <Route path="/group" component={Group} />
            <Route path="/hot" component={Hot} />
            <Route path="/fun" component={Fun} />
            <Route path="/sort" component={Sort} />
            <Route path="/detail" component={GroupDetail} />
            <Redirect to="/group" />
        </Switch>
    );
}

export default BasicRouter;
