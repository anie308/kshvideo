import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: '100%',
        padding: 20,
        backgroundColor: 'white',

    },
    formContainer:{
        flexDirection: 'row',
    },
    inputContainer:{
        padding: 5,
        marginRight: 20,
        flex: 1,
        borderWidth: 1,
    },
    inputText: {
      width: '100%',

        fontFamily: 'lato',
        alignSelf: 'flex-start'
    },
    mediaPreview: {
        aspectRatio: 9 / 16,
        backgroundColor: 'black',
        width: 60,
    },
    spacer: {
        flex:1
    },
    buttonContainer: {
        marginVertical: 10,
        flexDirection: "row",
    },
    cancelButton: {
        width: '100%',
        alignItems: 'center',
        flex:1,
        borderColor: 'lightgray',
        borderWidth: 1,
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
        borderRadius: 4,
        marginRight: 10

    },
    postButton: {
        width: '100%',
        alignItems: 'center',
        flex:1,
       backgroundColor: '#F6BE00',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
        borderRadius: 4,
        marginRight: 10

    },
    cancelButtonText: {
        fontFamily: 'lato_bold',
        fontSize: 16,
        marginLeft: 5,
    },
    postButtonText: {
        fontFamily: 'lato_bold',
        fontSize: 16,
        color: 'white',
        marginLeft: 5,
    }
})

export default styles