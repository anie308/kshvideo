import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    formContainer: {
        marginTop: 40,
        height: '100%'
    },
    input:{
        borderColor: 'lightgray',
        borderWidth: 1,
        borderStyle: 'solid',
        marginVertical: 10,
        paddingVertical: 15,
        flexDirectionx: 'row',
        alignItems: 'flex-start',
        paddingHorizontal: 10,

    },
    textInput: {
        backgroundColor: 'white',
    },
    submitButton:{
        marginTop: 40,
        backgroundColor: 'red',
        padding: 15,
       alignItems: 'center'
    },
    submitButtonText: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'lato'
    }
})

export default styles