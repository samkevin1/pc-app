import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: "white"
    },
    title: {
        fontSize: 35,
        color: 'black',
        fontWeight: '600',
        marginTop: 100,
        alignSelf: 'center'
    },
    input: {
        alignSelf: 'center',
        height: 40,
        width: 330,
        borderRadius: 4,
        borderColor: '#f5f5f5',
        borderWidth: 0.6,
        backgroundColor: '#f5f5f5',
        fontSize: 10,
        fontWeight: '600',
        marginTop: 15
    },
    button: {
        alignSelf: 'center',
        height: 30,
        width: 330,
        borderRadius: 4,
        borderWidth: 0.6,
        backgroundColor: '#016DFB',
        marginTop: 15
    },
    disabledButton: {
        alignSelf: 'center',
        height: 30,
        width: 330,
        borderRadius: 4,
        borderWidth: 0.6,
        backgroundColor: '#80ACFA',
        marginTop: 15
    },
    labelStyle: {
        fontSize: 10,
        fontWeight: '600',
    },
    contentStyle: {
        alignItems: 'center',
        alignSelf: 'center'
    },
    or: {
        fontSize: 18,
        fontWeight: '600',
        marginLeft: 15,
        marginRight:15,
        color: '#6c757d'
    },
    orContainer: {
        flexDirection: 'row',
        marginTop: 15,
        alignItems: 'center'
    },
    leftHr: {
        flex: 3,
        borderBottomWidth: 0.5,
        borderColor:'black',
        marginTop:10,
        marginLeft: 25
    },
    rightHr: {
        flex: 3,
        borderBottomWidth: 0.5,
        borderColor:'black',
        marginTop: 10,
        marginRight: 25
    },
    lastHr: {
        borderBottomWidth: 0.5,
        borderColor:'black',
        width: 420,
        marginTop: 300
    }
});

export default styles;
