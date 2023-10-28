import { StyleSheet, Text, View } from "react-native";

const telaHome = () =>{
    return(
        <>
            <View>
{//----------------------------------------------
}
                <View style={Styles.headerr}>
                    <Text style={StylesInside.headerr}>Home</Text>
                </View>
{//----------------------------------------------
}
                <View style={Styles.body1}>

                </View>
{//----------------------------------------------
}
                <View style={Styles.body2}>

                </View>
{//----------------------------------------------
}
                <View style={Styles.footerr}>

                </View>
{//----------------------------------------------
}
            </View>
        </>
    );
}
//                         styles
//                       style inside
// -----------------------------=--------------------------------------
const StylesInside = StyleSheet.create({
    headerr:{
        color: "black",
        fontSize: 40,
    }

});
//                       style view
// -----------------------------=--------------------------------------

const Styles = StyleSheet.create({
    headerr: {
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: 'white',
        height: '10%',
        width: "100%"
    },
    body1: {
        backgroundColor: 'blue',
        height: '50%',
        width: "100%"
    },
    body2: {
        backgroundColor: 'red',
        height: '30%',
        width: "100%"
    },
    footerr: {
        backgroundColor: 'purple',
        height: '10%',
        width: "100%"
    }
})
export default telaHome;