import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: 80,
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
        textAlign: 'center',
        fontFamily: 'sans-serif'
    },
    normalText: {
        marginTop: 20,
        fontWeight: '200',
        fontSize: 20,
        color: 'darkslategray',
        textAlign: 'center'
    },
    emailButton: {
        backgroundColor: 'yellow',
        marginTop: 50,
        borderColor: 'lightgray',
        borderWidth: 1,
        botderStyle: 'solid',
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center"
    },
    providerButtonText: {
        fontSize: 18
    },

    altText:{
        marginVertical: 30,
        textAlign: 'center'
    },
    socialCon: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    socialButton: {
        marginHorizontal: 10,
        padding: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 70
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