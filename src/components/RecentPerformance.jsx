import { Text, View, StyleSheet, Image, FlatList, Dimensions } from "react-native";
import ApplicationFonts from "../config/appFonts";

const logo1 = 'https://cdn.dribbble.com/users/418509/screenshots/14091820/media/39a386f211beeec58685eed64f6ef017.png?resize=400x0'
const logo2 = 'https://placeit-assets0.s3-accelerate.amazonaws.com/custom-pages/make-your-own-sports-logo-design/soccer-logo-maker-a196.png'
const profile = 'https://m.media-amazon.com/images/M/MV5BOThiOTJhZGQtNTlmZC00NDMzLWE5MzktZmY5N2Y0M2QyYzEyXkEyXkFqcGdeQXVyOTAyMDgxODQ@._V1_.jpg'
const profile2 = 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTvBcL0QiKXQFIDrvcbdi8Dwkf8rWUkcIjhmMMKr46VpaskgCmEZ_I0eETNAxKIo1hZdq-1QTlOrQEVpjM'

const DATA = [
	{
		id: '1',
		Runs: '109',
		balls: '90',
		fours: '08',
		sixes: '5',
		playerImg: profile2,
		StrikeRate: '140.8',
		rank: '1',
		logo: logo1,
		match: 'RCB 1st 11'
	},
	{
		id: '2',
		Runs: '101',
		balls: '99',
		fours: '10',
		sixes: '04',
		playerImg: profile,
		StrikeRate: '130.8',
		rank: '2',
		logo: logo2,
		match: 'MI 1st 11'
	},
	{
		id: '3',
		Runs: '90',
		balls: '70',
		fours: '03',
		sixes: '05',
		playerImg: profile2,
		StrikeRate: '180.8',
		rank: '3',
		logo: logo1,
		match: 'CSK 1st 11'

	}
]


const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const RecentPerformance = () => {

	const renderData = ({ item }) => {
		return (
			<View style={styles.card}>
				<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 8, marginHorizontal: 10 }}>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Image source={{ uri: item.logo }} style={{ height: 30, width: 30, borderRadius: 15 }} />
						<Text style={{ color: '#000', marginStart: 10, fontSize: 14, fontFamily: ApplicationFonts.MontserratSemiBold }}>{item.match}</Text>
					</View>
					<View style={{ borderWidth: 1, borderRadius: 30, borderColor: '#eee', padding: 8, paddingHorizontal: 14, backgroundColor: '#F0FFFF' }}>
						<Text style={{ color: '#4a4a4a', fontSize: 11, fontFamily: ApplicationFonts.MontserratMedium }}>Man of the match</Text>
					</View>
				</View>
				<View style={{ flexDirection: 'row', marginVertical: 9, }}>
					<Image source={{ uri: item.playerImg }} style={{ height: 70, width: 70, borderRadius: 35, marginStart: 10 }} />
					<View style={{ flexDirection: 'row', alignItems: 'center', }}>
						<View style={{ marginLeft: 30 }}>
							<Text style={styles.commonTxt}>Runs</Text>
							<Text style={styles.text}>{item.Runs}</Text>
						</View>
						<View style={{ marginLeft: 30 }}>
							<Text style={styles.commonTxt}>Balls</Text>
							<Text style={styles.text}>{item.balls}</Text>
						</View>
						<View style={{ marginLeft: 30 }}>
							<Text style={styles.commonTxt}>4's</Text>
							<Text style={styles.text}>{item.fours}</Text>
						</View>
						<View style={{ marginLeft: 40 }}>
							<Text style={styles.commonTxt}>6's</Text>
							<Text style={styles.text}>{item.sixes}</Text>
						</View>
					</View>
					<View>
					</View>
				</View>
				<View style={{ position: 'absolute', bottom: 10, left: 10 }}>
					<Text style={{ fontSize: 13, fontFamily: ApplicationFonts.MontserratMedium, color: '#4a4a4a' }}>SR: <Text style={styles.rank}>{item.StrikeRate}</Text></Text>
				</View>
				<View style={{ position: 'absolute', bottom: 10, right: 10 }}>
					<Text style={{ fontSize: 13, fontFamily: ApplicationFonts.MontserratMedium, color: '#4a4a4a' }}>Current Rank: <Text style={styles.rank}>{item.rank}</Text></Text>
				</View>
			</View>
		)
	}
	return (
		<View>
			<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 14, marginTop: 20 }}>
				<Text style={styles.headingTxt}>Recent Performance</Text>
				<Text style={{ color: '#0047AB', fontSize: 12, fontFamily: ApplicationFonts.MontserratMedium }}>Full Scoreboard</Text>
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
		height: screenHeight / 5.7,
		width: screenWidth / 1.1,
		borderRadius: 12,
		marginStart: 14,
		backgroundColor: '#eee',
		marginVertical: 20
	},
	text: {
		fontSize: 17,
		color: '#000',
		fontFamily: ApplicationFonts.MontserratSemiBold
	},
	rank: {
		fontSize: 15,
		color: '#A9A9A9',
		fontFamily: ApplicationFonts.MontserratSemiBold,
	},
	headingTxt: {
		fontSize: 16,
		fontFamily: ApplicationFonts.MontserratSemiBold,
		color: '#1B1B1B'
	},
	commonTxt: { fontSize: 12, color: '#4a4a4a', fontFamily: ApplicationFonts.MontserratRegular },
})
export default RecentPerformance;