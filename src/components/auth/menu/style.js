import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: 70,
        flex: 1
    },
    containerMain: {
        padding: 20,
        flex: 1
        
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'darkslategray',
        textAlign: 'center'
    },
    providerButton: {
        marginTop: 20,
        borderColor: 'lightgray',
        borderWidth: 1,
        botderStyle: 'solid',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    providerButtonText: {
        paddingRight: 20
    },
    containerBottomButton: {
        backgroundColor: 'ghostwhite',
        padding: 20,
        alignItems: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'lightgray'
    },
    bottomButtonText: {
        fontWeight: '600',
        color: 'red'
    }
})

export default styles;