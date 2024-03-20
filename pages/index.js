import { View, StyleSheet, Text, Image, TouchableOpacity, Modal } from "react-native";
import { ModalTokens } from '../components/modal';
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export function Home() {
    const [telaModal, configTelaModal] = useState(false)

    function gerarToken() {
        configTelaModal(true);
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={ESTILO.tudo}>
                <View style={ESTILO.header}>
                    <Text style={ESTILO.title}>
                        Mercado Livre
                    </Text>
                    <Image source={require("../assets/logo.png")} style={ESTILO.logo} />
                </View>
                <View style={ESTILO.imagem}>
                    <Image source={require("../assets/centro.png")} style={ESTILO.central} />
                </View>
                <View style={ESTILO.main}>
                    <Text style={ESTILO.titleDois}>
                        Obtenha descontos em até 50% OFF
                    </Text>
                    <TouchableOpacity style={ESTILO.button} onPress={gerarToken}>
                        <Text style={ESTILO.buttonText}>
                            Cupom de Desconto
                        </Text>
                        <Image source={require("../assets/cupom.png")} style={ESTILO.cupom} />
                    </TouchableOpacity>

                    <Modal visible={telaModal} animationType="fade" transparent={true}>
                        <ModalTokens fechar={() => configTelaModal(false)} />
                    </Modal>
                </View>

            </View>
        </SafeAreaView>
    )
}

const ESTILO = StyleSheet.create({
    header: {
        backgroundColor: "#FFD700",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#FFF"
    },
    logo: {
        width: 80,
        height: 80
    },
    imagem: {
        alignItems: 'center',
        backgroundColor: "#FFD700",
        height: 320,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35

    },
    central: {
        width: 280,
        height: 280
    },
    main:{
      padding:37,
      alignItems:'center',
      backgroundColor:'#fff',
      height:350

    },
    titleDois: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000"
    },
    button:{
        flexDirection:"row",
        marginTop:25,
        backgroundColor: "#FFD700",
        height:50,
        width:310,
        borderRadius:15,
        alignItems:'center',
        justifyContent:'space-evenly'
    }, 
    buttonText:{
        fontSize:17,
        fontWeight: "bold",
        color: "#fff"
    },
    cupom:{
        width:40,
        height:40
    },
    tudo:{
        backgroundColor:"#fff"
    }

})

