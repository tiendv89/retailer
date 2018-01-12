import React from 'react';
import firebase from 'react-native-firebase';
import { StyleSheet, Platform, Image, Text, View } from 'react-native';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            // firebase things?
        };
    }

    componentDidMount() {
        // firebase things?
    }

    _signIn() {
        GoogleSignin.signIn()
            .then((user) => {
                console.log('ah du')
                console.log(user);
            })
            .catch((err) => {
                console.log('WRONG SIGNIN', err);
            })
            .done();
    }

    render() {
        return (
            <View style={styles.container}>
                <GoogleSigninButton
                    style={{width: 48, height: 48}}
                    size={GoogleSigninButton.Size.Icon}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={() => this._signIn()}/>
                <Text style={styles.welcome}>
                    Welcome to the React Native{'\n'}Firebase starter project!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit App.js
                </Text>
                {Platform.OS === 'ios' ? (
                    <Text style={styles.instructions}>
                        Press Cmd+R to reload,{'\n'}
                        Cmd+D or shake for dev menu
                    </Text>
                ) : (
                    <Text style={styles.instructions}>
                        Double tap R on your keyboard to reload,{'\n'}
                        Cmd+M or shake for dev menu
                    </Text>
                )}
                <View style={styles.modules}>
                    <Text style={styles.modulesHeader}>The following Firebase modules are enabled:</Text>
                    {firebase.admob.nativeModuleExists && <Text style={styles.module}>Admob</Text>}
                    {firebase.analytics.nativeModuleExists && <Text style={styles.module}>Analytics</Text>}
                    {firebase.auth.nativeModuleExists && <Text style={styles.module}>Authentication</Text>}
                    {firebase.crash.nativeModuleExists && <Text style={styles.module}>Crash Reporting</Text>}
                    {firebase.firestore.nativeModuleExists && <Text style={styles.module}>Cloud Firestore</Text>}
                    {firebase.messaging.nativeModuleExists && <Text style={styles.module}>Messaging</Text>}
                    {firebase.perf.nativeModuleExists && <Text style={styles.module}>Performance Monitoring</Text>}
                    {firebase.database.nativeModuleExists && <Text style={styles.module}>Realtime Database</Text>}
                    {firebase.config.nativeModuleExists && <Text style={styles.module}>Remote Config</Text>}
                    {firebase.storage.nativeModuleExists && <Text style={styles.module}>Storage</Text>}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    logo: {
        height: 80,
        marginBottom: 16,
        width: 80,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    modules: {
        margin: 20,
    },
    modulesHeader: {
        fontSize: 16,
        marginBottom: 8,
    },
    module: {
        fontSize: 14,
        marginTop: 4,
        textAlign: 'center',
    }
});
