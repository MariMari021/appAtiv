import { View, StyleSheet, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function PageDois() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={ESTILO.tudo}>
                <View style={ESTILO.header}>
                    <Text style={ESTILO.title}>
                        Cupons Descobertos
                    </Text>
                    <Image source={require("../assets/cupom.png")} style={ESTILO.cupom} />
                </View>
                <View style={ESTILO.main}>
                    <Text style={ESTILO.texto}>Adicione cupons na aba Home.</Text>
                    <Image style={ESTILO.imagem} source={require("../assets/casa.png")} />
                </View>

            </View>

        </SafeAreaView>
    )
}

const ESTILO = StyleSheet.create({
    header: {
        flexDirection:"row",
        height:95,
        backgroundColor: "#FFD700",
        borderBottomLeftRadius: 28,
        borderBottomRightRadius: 28,
        alignItems:"center",
        justifyContent:"space-evenly"

    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#FFF"
    },
    cupom:{
        width:42,
        height:42
    },
    main:{
        backgroundColor:"#fff",
        height:550,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
    tudo:{
        backgroundColor:"#fff"
       
    },
    texto:{
        fontSize:17
    },
    imagem:{
        width:33,
        height:33
    }


})