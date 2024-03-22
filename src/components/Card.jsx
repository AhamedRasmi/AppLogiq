import { Text, View, StyleSheet, Image } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ApplicationFonts from "../config/appFonts";

const arrow = 'https://img.icons8.com/ios-glyphs/30/FFFFFF/chevron-right.png'

const Card = () => {
	return (
		<View style={styles.cardContainer}>
			<View style={styles.card}>
				<MaterialCommunityIcons name="arrow-bottom-left-thin-circle-outline" color="#fff" size={40} />
				<Text style={styles.text}>You have 2 new request from clubs</Text>
				<Image source={{ uri: arrow }} style={styles.arrowImg} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	cardContainer: {
		marginTop: 15,
		height: 90,
		backgroundColor: '#3CB043',
		justifyContent: 'center',
		borderRadius: 13,
		marginHorizontal: 13
	},
	card: {
		flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'
	},
	text: { color: '#fff', fontSize: 13, fontFamily: ApplicationFonts.MontserratSemiBold },
	arrowImg: { height: 20, width: 20 }
})

export default Card;