import React, {Component} from 'react';
import {StyleSheet, TabBarIOS, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Dashboard extends Component {
  state = {
    selected_tab: 'home',
    render_count: 0
  };

  _renderContent = (pageText) => {
    return (
      <View style={[styles.tabContent, {backgroundColor: '#3b5998'}]}>
        <Text style={styles.tabText}>{pageText}</Text>
      </View>
    );
  };

  render() {
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
          {this._renderContent('Home Tab')}
        </Icon.TabBarItemIOS>

        <Icon.TabBarItemIOS
          title="Camera"
          iconName="ios-camera-outline"
          selectedIconName="ios-camera"
          selected={this.state.selected_tab === 'camera'}
          onPress={() => this.setState({selected_tab: 'camera'})}>
          {this._renderContent('Camera Tab')}
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
    color: 'white',
    margin: 50,
    fontSize: 40
  },
});

export default Dashboard;
