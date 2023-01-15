import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
        paddingLeft: 5,
    },
    heading: {
        alignSelf: 'center',
        fontSize: 40,
        fontFamily: 'Rubik',
        color: '#6060EF',
        marginTop: 5,
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        fontFamily: 'Rubik',
        paddingLeft: 20,
        marginTop: 20,
    },
    input: {
        width: '80%',
        height: 40,
        fontFamily: 'Rubik',
        marginLeft: 25,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
    bac_ok: {
        alignSelf: 'center',
        marginTop: 40,
        fontSize: 40,
        fontFamily: 'Rubik',
        color: 'red',      
    },
    bac_warning: {
        alignSelf: 'center',
        marginTop: 40,
        fontSize: 40,
        fontFamily: 'Rubik',
        color: '#FFd500',      
    },
    bac_danger: {
        alignSelf: 'center',
        marginTop: 40,
        fontSize: 40,
        fontFamily: 'Rubik',
        color: '#FF0000',      
    },
    errorText: {
        marginBottom: 5,
        marginLeft: 25,
        fontFamily: 'Rubik',
        color: 'red',
    },
    buttonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        fontFamily: 'Rubik',
        textTransform: "uppercase"
      }
});