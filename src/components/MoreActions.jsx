import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import ApplicationFonts from "../config/appFonts";

const arrow = "https://img.icons8.com/ios-filled/50/228BE6/circled-down-left-2.png"
const logo1 = 'https://cdn.dribbble.com/users/418509/screenshots/14091820/media/39a386f211beeec58685eed64f6ef017.png?resize=400x0'
const logo2 = 'https://placeit-assets0.s3-accelerate.amazonaws.com/custom-pages/make-your-own-sports-logo-design/soccer-logo-maker-a196.png'
const euro = "https://img.icons8.com/ios-filled/50/228BE6/euro-pound-exchange.png"

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const MoreActions = () => {
	return (
		<View>
			<View style={{ marginHorizontal: 14, }}>
				<Text style={styles.headingTxt}>More Actions</Text>
			</View>

			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<View style={styles.card}>
					<Image source={{ uri: arrow }} style={{ height: 50, width: 50, marginHorizontal: 14, marginVertical: 8 }} />
					<Text style={styles.requestTxt}>Requests</Text>
					<View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 17 }}>
						<Image source={{ uri: logo1 }} style={{ height: 30, width: 30, borderRadius: 20, }} />
						<Text style={styles.name}>DB Club</Text>
					</View>
					<View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12 }}>
						<Image source={{ uri: logo2 }} style={{ height: 30, width: 30, borderRadius: 20 }} />
						<Text style={styles.name}>DB Club</Text>
					</View>
				</View>
				<View style={styles.card}>
					<Image source={{ uri: euro }} style={{ height: 50, width: 50, marginHorizontal: 14, marginVertical: 8 }} />
					<Text style={styles.requestTxt}>Payments</Text>
					<View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 17 }}>
						<Image source={{ uri: logo1 }} style={{ height: 30, width: 30, borderRadius: 20, }} />
						<Text style={styles.name}>€ 12.44     <Text style={{ color: 'red' }}>Due</Text></Text>
					</View>
					<View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12 }}>
						<Image source={{ uri: logo2 }} style={{ height: 30, width: 30, borderRadius: 20 }} />
						<Text style={styles.name}>€ 234.12   <Text style={{ color: 'green' }}>Paid</Text></Text>
					</View>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	card: {
		height: screenHeight / 5,
		width: screenWidth / 2.2,
		borderRadius: 12,
		marginHorizontal: 8,
		backgroundColor: '#eee',
		marginVertical: 20,
		paddingStart: 12
	},
	name: {
		fontSize: 15,
		fontFamily: ApplicationFonts.MontserratSemiBold,
		color: '#1B1B1B',
		marginStart: 8
	},
	headingTxt: {
		fontSize: 16,
		fontFamily: ApplicationFonts.MontserratSemiBold,
		color: '#1B1B1B'
	},
	requestTxt: {
		fontSize: 13,
		color: '#a9a9a9',
		fontFamily: ApplicationFonts.MontserratMedium
	}
})
export default MoreActions;