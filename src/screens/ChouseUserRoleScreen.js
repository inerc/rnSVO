import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
  Alert,
  SafeAreaView,
} from 'react-native';

const Separator = () => <View style={styles.separator} />;

class ChouseUserRoleScreen extends Component {
  onItemPress = item => {
    this.props.navigation.navigate(item);
  };

  render = () => {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>
            Если вы являетесь полевым инженером выберите эту роль и
            авторизуйтесь
          </Text>
          <Button
            title="Полевой инженер"
            onPress={this.onItemPress.bind(this, 'engineer/login')}
          />
        </View>
        <Separator />
        <View>
          <Text style={styles.title}>
            Если вы являетесь оператором техники выберите эту роль и
            авторизуйтесь
          </Text>
          <Button
            title="Оператор техники"
            color="#f194ff"
            onPress={this.onItemPress.bind(this, 'operator')}
          />
        </View>
      </SafeAreaView>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default ChouseUserRoleScreen;
