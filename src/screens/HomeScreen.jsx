import { View } from "react-native";
import Header from "../components/Header";
import TopTabs from "../navigation/TopTabs";

const HomeScreen = () => {
	return (
		<View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
			<Header />
			<TopTabs />
		</View>
	)
}

export default HomeScreen;