import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'red'
    },
    containerMain: {
        marginTop:30,
        padding: 20
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

    }
})

export default styles;