import { Text, View } from "react-native";

const CommonScreen = () => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text style={{ fontSize: 20, fontWeight: '900', color: '#000' }}>Club Screen</Text>
		</View>
	)
}

export default CommonScreen;