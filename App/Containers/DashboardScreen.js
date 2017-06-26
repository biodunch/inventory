import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import SimplePage from './SimplePage';

import type { NavigationState } from 'react-native-tab-view/types';

type Route = {
  key: string,
  title: string,
};

type State = NavigationState<Route>;

const dataObjects = {
  first: [
    {title: 'Add Distributors', color: 'red'},
    {title: ' Manage Distributors', color: 'yellow'},
    {title: ' Track Sales', color: 'blue'},
    {title: ' Delete Distributors', color: 'green'}
  ]
}

export default class TopBarTextExample extends PureComponent<void, *, State> {
  static title = 'Scrollable top bar';
  static appbarElevation = 0;
  // static navigation =
  //  console.log(this.props.navigation);



  state: State = {
    index: 1,
    routes: [
      { key: '1', title: 'Distributors',
        grid :[
          {title: 'Add Distributors', color: 'green',mode : 'ADD'},
          {title: ' Manage Distributors', color: 'brown', mode : 'MANAGE'},
          {title: ' Track Sales', color: 'blue', mode : 'VIEW'},
          {title: ' Delete Distributors', color: '#e73536', mode : 'DELETE'}
        ]
      },
      { key: '2', title: 'Customers',
      grid :[
        {title: 'Add Sec. Customer', color: 'green', mode : 'ADD'},
        {title: ' View Inventory', color: '#e73536', mode : 'MANAGE'},
        {title: ' Track Purchases', color: 'blue', mode : 'VIEW'},
        {title: ' Delete Sec. Customer', color: 'brown',mode : 'DELETE' }
      ] },
      { key: '3', title: 'Products',
      grid :[
        {title: 'Approve Products', color: 'green',mode : 'ADD'},
        {title: ' Manage Products', color: 'blue', mode : 'MANAGE'},
        {title: ' View Sales', color: 'brown', mode : 'VIEW'},
        {title: ' Delete Products', color: '#e73536', mode : 'DELETE'}
      ] },
    ],
  };

  _handleChangeTab = index => {
    this.setState({
      index,
    });
  };

  _renderHeader = props => {
    return (
      <TabBar
        {...props}
        scrollEnabled
        indicatorStyle={styles.indicator}
        style={styles.tabbar}
        tabStyle={styles.tab}
        labelStyle={styles.label}
      />
    );
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
      case '1':
        return (
          <SimplePage
            state={route.grid}
            style={{ backgroundColor: '#ff4081' }}
            transition={this.props.navigation}
          />
        );
      case '2':
        return (
          <SimplePage
            state={route.grid}
            style={{ backgroundColor: '#673ab7' }}
            transition={this.props.navigation}
          />
        );
      case '3':
        return (
          <SimplePage
            state={route.grid}
            transition={this.props.navigation}
            style={{ backgroundColor: '#4caf50' }}
          />
        );
      default:
        return null;
    }
  };

  render() {
    return (
      <TabViewAnimated
        style={[styles.container, this.props.style]}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onRequestChangeTab={this._handleChangeTab}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabbar: {
    backgroundColor: '#222',
  },
  tab: {
    width: 140,
  },
  indicator: {
    backgroundColor: '#ffeb3b',
  },
  label: {
    color: '#fff',
    fontWeight: '800',
  },
});
