import React, {Component} from 'react';
import {LayoutAnimation, StyleSheet, TabBarIOS, Text, View} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import StartScreen from '../StartScreen/index';
import Home from './Home';
import Camera from './Camera';

class Dashboard extends Component {
  state = {
    selected_tab: 'home',
    render_count: 0
  };

  componentWillReceiveProps(nextProps) {
    const {navigator, user} = nextProps;
    if (!user.profile || user.profile.status !== 'authenticated') {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
      navigator.replace({title: 'StartScreen', component: StartScreen});
    }
  }

  _renderContent = (pageText) => {
    return (
      <View style={[styles.tabContent, {backgroundColor: '#fff'}]}>
        <Text style={styles.tabText}>{pageText}</Text>
      </View>
    );
  };

  render() {
    const {dispatch, user} = this.props;

    return (
      <TabBarIOS
        unselectedTintColor="#000"
        tintColor="#000"
        barTintColor="#fff">
        <Icon.TabBarItemIOS
          title="Home"
          iconName="ios-home-outline"
          selectedIconName="ios-home"
          selected={this.state.selected_tab === 'home'}
          onPress={() => this.setState({selected_tab: 'home'})}>
          <Home dispatch={dispatch} user={user}/>
        </Icon.TabBarItemIOS>

        <Icon.TabBarItemIOS
          title="Camera"
          iconName="ios-camera-outline"
          selectedIconName="ios-camera"
          selected={this.state.selected_tab === 'camera'}
          onPress={() => this.setState({selected_tab: 'camera'})}>
          <Camera/>
        </Icon.TabBarItemIOS>

        <TabBarIOS.Item
          systemIcon="bookmarks"
          badge={this.state.render_count > 0 ? this.state.render_count : undefined}
          selected={this.state.selected_tab === 'bookmarks'}
          onPress={() => this.setState({selected_tab: 'bookmarks', render_count: ++this.state.render_count})}>
          {this._renderContent('Bookmarks Tab', this.state.render_count)}
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center'
  },
  tabText: {
    color: '#61dafb',
    margin: 50,
    fontSize: 40
  },
});

function mapStateToProps(state) {
  const {user} = state;
  return {user};
}

export default connect(mapStateToProps)(Dashboard);
