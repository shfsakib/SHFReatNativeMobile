import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 40,
        flex: 1,
        backgroundColor: "#fff",
    },
    card1: {
        margin: 10,
        marginTop: 50,
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 10,
        elevation: 10,
        shadowColor: '#000000',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    card: {
        margin: 10,
        backgroundColor: '#ffffff',
        padding: 20,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
    paragraph: {
        textAlign: 'center',
        marginTop: 5,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    participantImg: {
        width: 200,
        height: 200,
        resizeMode: 'stretch',
    },
    marginTop20: {
        marginTop: 20,
    }
});