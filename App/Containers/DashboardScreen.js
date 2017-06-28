import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import SimplePage from './SimplePage';
import {Colors} from '../Themes'

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
          {title: 'Add Distributor', color: '#66DE99',mode : 'ADD'},
          {title: ' Manage Distributor', color: '#ED6247', mode : 'VIEW'},
          {title: ' Track Sales', color: '#4075C0', mode : 'SALES'},
          {title: ' Delete Distributor', color: 'brown', mode : 'DELETE'}
        ]
      },
      { key: '2', title: 'Customers',
      grid :[
        {title: 'Add Sec. Customer', color: '#88ED47', mode : 'ADD'},
        {title: ' View Inventory', color: '#ED6247', mode : 'VIEW'},
        {title: ' Track Purchases', color: '#4075C0', mode : 'VIEW'},
        {title: ' Delete Sec. Customer', color: 'brown',mode : 'DELETE' }
      ] },
      { key: '3', title: 'Products',
      grid :[
        {title: 'Approve Products', color: '#88ED47',mode : 'APPROVE'},
        {title: ' Manage Products', color: '#ED6247', mode : 'PRODUCT'},
        {title: ' View Sales', color: '#4075C0', mode : 'SALES'},
        {title: ' Delete Products', color: 'brown', mode : 'DELETE'}
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
            // style={{  }}
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
    paddingTop:10
  },
  tabbar: {
    backgroundColor: Colors.bloodOrange,
  },
  tab: {
    width: 140,
  },
  indicator: {
    backgroundColor: '#fff',
  },
  label: {
    color: '#fff',
    fontWeight: '600',
  },
});
