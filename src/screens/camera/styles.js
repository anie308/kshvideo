import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    camera: {
        height: '100%',
        backgroundColor: 'black',
        aspectRatio: 9 /16,
    },
    bottomBarContainer:{
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center'
    },
    recordButtonContainer: {
        flex: 1,
        marginHorizontal: 30,

    },
    recordButton: {
        borderWidth: 8,
        borderColor: "#ff404087",
        backgroundColor: '#ff4040',
        borderRadius: 100,
        height: 80,
        width: 80,
        alignSelf: 'center',
        marginBottom: 30

    }, 
    galleryButton: {
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
        height: 50,
        width: 50,
    },
    galleryButtonImage: {
        height: 50,
        width: 50,
    },
    sideBarContainer: {
        top: 60,
        right: 0,
        marginHorizontal: 20,
        position: 'absolute'
    },
    sidebarButton: {
        alignItems: 'center',
        marginBottom: 25
    },
    iconText: {
        color: 'white',
        fontSize: 12,
        marginTop: 5
    },
})

export default styles