import { Alert, Image, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native";
import auth from "@react-native-firebase/auth";
import Carregamento from '../scripsts/Carregamento';
import { HomeProps, LoginProps } from "../scripsts/types";
import { useState } from "react";

const telaLogin = ({ navigation, route }: LoginProps) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function logar() {
        if (email && senha) {
            // setIsLoading(true);
            console.log('redefinir senha');
            auth()
                .signInWithEmailAndPassword(email, senha)
                .then(() => { navigation.navigate('homeTrue') })
                .catch((error) => Alert.alert(error))
                .finally(() => setIsLoading(false));
                
        }else{
            Alert.alert('error');
            navigation.navigate('homeTrue');
        }
    }

    function redefinirSenha() {
        if (email && senha) {   
            console.log('redefinir senha');
            auth()
                .sendPasswordResetEmail(email)
                .then(() => Alert.alert("Redefinir senha", "Enviamos um email para você"))
                .catch((error) => Alert.alert(error));
        }else{
            Alert.alert('error')
        }
    }

    function teste ( ){
        navigation.navigate('CadastroUsuario');
    }

    return(
        <>
            <View>
{//----------------------------------------------
}            
                <View style={Styles.headerr}>
                    <Text style={StylesInside.headerr}>Entrar</Text>
                </View>
            
{//----------------------------------------------
}
                <View style={Styles.imgg}>
                    <Image style={StylesInside.icon} source={require('../imgs/telaLoginImg.png')}/>
                </View>

{//----------------------------------------------
}
                <View style={Styles.body1}>
                    <View>
                        <Text style={{fontSize: 40, marginTop:10, marginLeft:20}}>
                            E-mail</Text>
                        <TextInput style={{backgroundColor: "white", marginHorizontal:20, marginTop:10, borderRadius:10, color: 'black', fontSize: 20}} 
                        onChangeText={(text) => { setEmail(text) }}/>
                    </View>

                    <View>
                        <Text style={{fontSize: 40, marginTop:20, marginLeft:20}} >
                            Senha
                        </Text>

                        <TextInput style={{backgroundColor: "white", marginHorizontal:20, marginTop:10, borderRadius:10, color: 'black', fontSize: 20}}
                        onChangeText={(text) => { setSenha(text) }} />
                    
                    </View>

                    <View style={StylesInside.viewButton}>

                        <TouchableHighlight style={StylesInside.buttonn} onPress={() => logar()}>
                            <Text style={{fontSize:40}}>
                                Entrar
                            </Text>
                        </TouchableHighlight>
                    </View>

                    <View style={StylesInside.footerButtonsView}>
                        <TouchableHighlight style={StylesInside.footerButtons} onPress={() => redefinirSenha()}>
                            <Text style={{fontSize: 20}}>Esqueci minha Senha</Text>
                        </TouchableHighlight>    

                        <TouchableHighlight style={StylesInside.footerButtons} onPress={()=>{teste()}}>
                            <Text style={{fontSize: 30}}>Cadastrar</Text>
                        </TouchableHighlight>


                    </View>
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


export default telaLogin;
//                         styles
//                       style inside
// -----------------------------=--------------------------------------
const StylesInside = StyleSheet.create({
    headerr:{
        color: "black",
        fontSize: 50,
    },
    icon:{
        height: '90%',
        width: '50%',
        marginTop: 15
    },
    buttonn:{
        backgroundColor: 'green',
        width: 200,
        height: 60,
        marginTop: 30,
        borderRadius: 10,
        borderWidth: 5,
        borderColor: "#333333",
        display: "flex",
        alignItems: "center"
    },
    viewButton:{
        width: '100%',
        display: "flex",
        alignItems: "center",
    },
    footerButtons:{
        flex:1,
        backgroundColor: 'red',
        width: 180,
        height: 60,
        marginHorizontal: 15,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: "#333333",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"


    },
    footerButtonsView:{
        display: "flex",
        flexDirection: "row",
        flex:1,
        alignItems:"flex-end"
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
        backgroundColor: 'grey',
        height: 530,
        width: "100%",
        display: "flex"
    },
    footerr: {
        backgroundColor: 'grey',
        height: '10%',
        width: "100%",
    },
    imgg:{
        height: 200,
        width: "100%",
        backgroundColor: 'grey',
        display: "flex",
        alignItems: "center"
    }
})
