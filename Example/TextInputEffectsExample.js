import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import {
  Kaede,
  Hoshi,
  Jiro,
  Isao,
  Madoka,
  Akira,
  Hideo,
  Kohana,
  Makiko,
  Sae,
  Fumi,
} from 'react-native-textinput-effects';

export default class TextInputEffectsExample extends Component {

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        <View style={[styles.card, { backgroundColor: '#8781bd' }]}>
          <Text style={styles.title}>Sae</Text>
          <Sae
            label={'Email Address'}
            iconClass={FontAwesomeIcon}
            iconName={'pencil'}
            iconColor={'white'}
          />
          <Sae
            style={styles.input}
            label={'Invitation Code'}
            iconClass={FontAwesomeIcon}
          />
        </View>
        <Kaede
          style={styles.input}
          label={'Number'}
          labelStyle={{
            color: '#990fe2',
            backgroundColor: '#f5f785',
          }}
          inputStyle={{
            color: 'white',
            backgroundColor: '#d693f9',
          }}
          keyboardType="numeric"
        />
        <Hoshi
          style={styles.input}
          label={'Street'}
          backgroundColor={'#F9F7F6'}
          borderColor={'#00ffaa'}
        />
        <Fumi
          style={styles.input}
          label={'Degree'}
          iconClass={FontAwesomeIcon}
          iconName={'graduation-cap'}
          iconColor={'#00aeef'}
        />
        <Jiro
          style={styles.input}
          label={'Cat\'s name'}
          borderColor={'#00ffaa'}
        />
        <Isao
          style={styles.input}
          label={'Middle name'}
          borderColor={'#da7071'}
        />
        <Akira
          style={styles.input}
          label={'Maiden Name'}
          borderColor={'#7A7593'}
        />
        <Madoka
          style={styles.input}
          label={'Weight'}
          borderColor={'#7A7593'}
        />
        <Hideo
          style={styles.input}
          iconClass={FontAwesomeIcon}
          iconName={'envelope'}
          iconColor={'white'}
        />
        <Kohana
          style={styles.input}
          label={'Phone'}
          iconClass={FontAwesomeIcon}
          iconName={'phone'}
          iconColor={'#ddd'}
        />
        <Makiko
          style={styles.input}
          label={'Comment'}
          iconClass={FontAwesomeIcon}
          iconName={'comment'}
          iconColor={'white'}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: '#F9F7F6',
  },
  content: {
    // not cool but enough to make all inputs visible when keyboard is active
    paddingBottom: 300,
  },
  card: {
    height: 180,
  },
  input: {
    marginTop: 4,
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    opacity: 0.8,
  },
});
