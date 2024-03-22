import { Text, View, StyleSheet, Image, Dimensions, FlatList } from "react-native";
import ApplicationFonts from "../config/appFonts";

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const logo1 = 'https://cdn.dribbble.com/users/418509/screenshots/14091820/media/39a386f211beeec58685eed64f6ef017.png?resize=400x0'
const logo2 = 'https://placeit-assets0.s3-accelerate.amazonaws.com/custom-pages/make-your-own-sports-logo-design/soccer-logo-maker-a196.png'

const DATA = [
	{
		id: '1',
		team1: 'Chennai Super Kings',
		team2: 'Royal Challengers Bangalore',
		logo1: logo1,
		logo2: logo2,
		month: 'March',
		date: '22',
		time: '7.30 PM',
		status: 'Playing'
	}
]
const UpcomingEvents = () => {

	const renderData = ({ item }) => {
		return (
			<View style={styles.card}>
				<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 16 }}>
					<View style={{ backgroundColor: '#FFF', elevation: 1, borderRadius: 12, alignItems: 'center', width: 100, paddingVertical: 10 }}>
						<Text style={styles.matchDuration}>{item.month}</Text>
						<Text style={[styles.matchDuration, { fontSize: 22 }]}>{item.date}</Text>
						<Text style={styles.matchDuration}>{item.time}</Text>
					</View>
					<View>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<Image source={{ uri: item.logo1 }} style={{ height: 30, width: 30, borderRadius: 15 }} />
							<Text style={styles.teamTxt}>{item.team1}</Text>
						</View>

						<View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12 }}>
							<Image source={{ uri: item.logo2 }} style={{ height: 30, width: 30, borderRadius: 15 }} />
							<Text style={styles.teamTxt}>{item.team2}</Text>
						</View>
					</View>
				</View>

				<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 16, marginHorizontal: 14 }}>
					<View style={{ borderWidth: 1, borderRadius: 30, borderColor: '#eee', padding: 8, paddingHorizontal: 14, backgroundColor: '#F0FFFF' }}>
						<Text style={{ color: '#4a4a4a', fontSize: 11, fontFamily: ApplicationFonts.MontserratMedium }}>Net Session</Text>
					</View>
					<View>
						<Text style={{ fontSize: 14, fontFamily: ApplicationFonts.MontserratMedium, color: '#0047AB' }}>0.4 M </Text>
					</View>
				</View>

				<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 25, marginHorizontal: 14 }}>
					<View>
						<Text style={styles.statusTxt}>Status: </Text>
					</View>
					<View style={styles.status}>
						<Text style={styles.statusTxt}>{item.status}</Text>
						<Image source={require('../../assets/image/tick.png')} style={{ height: 20, width: 20, marginStart: 4 }} />

					</View>
				</View>

			</View>
		)
	}
	return (
		<View style={{ marginVertical: 20 }}>
			<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 14 }}>
				<Text style={styles.headingTxt}>Upcoming Events </Text>
				<Text style={styles.seeAll}>See all</Text>
			</View>
			<View>
				<FlatList
					data={DATA}
					keyExtractor={(item) => item.id}
					renderItem={renderData}
					horizontal
					showsHorizontalScrollIndicator={false}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	card: {
		height: screenHeight / 3.8,
		width: screenWidth / 1.06,
		borderRadius: 14,
		marginHorizontal: 8,
		backgroundColor: '#EEE',
		marginTop: 12
	},
	headingTxt: {
		fontSize: 16,
		fontFamily: ApplicationFonts.MontserratSemiBold,
		color: '#1B1B1B'
	},
	seeAll: {
		color: '#0047AB',
		fontSize: 12,
		fontFamily: ApplicationFonts.MontserratMedium
	},
	matchDuration: {
		fontFamily: ApplicationFonts.MontserratSemiBold, color: '#1b1b1b', fontSize: 14
	},
	teamTxt: {
		fontSize: 13, marginStart: 5,
		color: '#1b1b1b', fontFamily: ApplicationFonts.MontserratSemiBold
	},
	status: {
		paddingHorizontal: 14,
		paddingVertical: 8,
		backgroundColor: '#FFF',
		borderRadius: 8,
		flexDirection: 'row',
		alignItems: 'center'
	},
	statusTxt: {
		fontSize: 14,
		color: '#7a7a7a',
		fontFamily: ApplicationFonts.MontserratSemiBold
	}
})
export default UpcomingEvents;