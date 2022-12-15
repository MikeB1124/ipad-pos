import { SafeAreaView, View, Text, Button } from "react-native"
import Navbar from "../components/Navbar"
import { setTotal } from "../slices/checkoutSlice"
import { useDispatch } from "react-redux"
import tw from "tailwind-react-native-classnames"


const HomePage = () => {
    const dispatch = useDispatch()

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <Navbar/>
            <Button onPress={() => dispatch(setTotal(11))} title="Increase to 11"/>
        </SafeAreaView>
    )
}

export default HomePage