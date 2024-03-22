import { Text, View, Image, StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import ApplicationFonts from "../config/appFonts";

const profile = 'https://m.media-amazon.com/images/M/MV5BOThiOTJhZGQtNTlmZC00NDMzLWE5MzktZmY5N2Y0M2QyYzEyXkEyXkFqcGdeQXVyOTAyMDgxODQ@._V1_.jpg'

const Header = () => {
	return (
		<View style={styles.container}>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<Image source={{ uri: profile }} style={styles.profile} />
				<View style={{ marginStart: 18 }}>
					<Text style={styles.name}>Marnus </Text>
					<Text style={styles.desc}>Right hand batsman, Leeds</Text>
				</View>
			</View>
			<Ionicons name="notifications" color="#4a4a4a" size={25} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginVertical: 24,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginHorizontal: 20
	},
	profile: {
		height: 55,
		width: 55,
		borderRadius: 25
	},
	name: {
		fontSize: 16,
		color: '#1B1B1B',
		fontFamily: ApplicationFonts.MontserratSemiBold
	},
	desc: {
		color: '#7a7a7a',
		fontSize: 13,
		fontFamily: ApplicationFonts.MontserratMedium
	}
})
export default Header;