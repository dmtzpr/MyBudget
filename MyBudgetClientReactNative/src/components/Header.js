import React, { Component } from 'react';
import { TextInput, TouchableOpacity, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';

import LogoPanel from './LogoPanel';
import FooterPanel from './FooterPanel';

const styles = StyleSheet.create({});

export default class Home extends Component {
    render() {
        const { userName, totalBalance } = this.props;
        return (
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 50 }}>
                    <Text style={{ textAlign: 'center' }}>Sign in</Text>
                </View>
                <View style={{ flex: 50 }}>
                    <Text style={{ textAlign: 'center' }}>Sign in</Text>
                </View>
            </View>
        );
    }
}
