import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container:{
        paddingVertical: 20,
        alignItems: 'center',
        paddingHorizontal: 40,
    },
    avatarContainer:{
        position: 'relative',
    },
    icon :{
        position: 'absolute',
        bottom: 2,
        right: 0
    },
    emailText:{
        paddingVertical: 10,
        fontSize: 15,
        fontFamily: 'lato'
    },
    counterContainer: {
        flexDirection: 'row',
        paddingVertical: 10
    },
    counterItemContainer:{
        flex:1,
        alignItems: 'center'
    },
    counterNumberText:{
        fontFamily: 'lato_bold',
        fontSize: 16,
    },
    counterLabelText:{
        fontFamily: 'lato',
        fontSize: 11,
        color: 'gray'

    }
})

export default styles