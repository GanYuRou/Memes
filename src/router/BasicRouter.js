import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Group from 'views/Group';
import Hot from 'views/Hot';
import Sort from 'views/Sort';
import UploadForm from 'views/UploadForm';
import Center from 'views/Center';
import GroupDetail from 'components/GroupDetail';


const BasicRouter = () => {
    return (
        <Switch>
            <Route path="/group" component={Group} />
            <Route path="/hot" component={Hot} />
            <Route path="/sort" component={Sort} />
            <Route path="/upload" component={UploadForm} />
            <Route path="/center" component={Center} />
            <Route path="/detail" component={GroupDetail} />
            <Redirect to="/group" />
        </Switch>
    );
}

export default BasicRouter;
