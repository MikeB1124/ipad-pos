import { SafeAreaView, View, Text, Image } from "react-native"
import tw from "tailwind-react-native-classnames"
import { useSelector } from "react-redux"

const Navbar = () => {
    const {total} = useSelector((state) => state.checkout)

    return (
        <View style={tw`p-4 flex-row`}>
            <Image style={{width:128, height: 68}} source={require("../assets/logo.png")}></Image>
            <Text style={tw``}>Home Page</Text>
            {total ? <Text>{total}</Text> : <View></View>}
        </View>
    )
}

export default Navbar