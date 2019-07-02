import React, {Component} from 'react';
import AppNavigator from './Navigations/AppNavigator';
import {Provider} from 'react-redux';
import store from './Services/Redux/store'

export default class noteapp extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigator/>
            </Provider>
        )
    }
}

