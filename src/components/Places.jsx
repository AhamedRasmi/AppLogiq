import { Text, View, StyleSheet, Image, FlatList, Dimensions } from "react-native";
import ApplicationFonts from "../config/appFonts";

const image1 = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
const image2 = 'https://images.unsplash.com/photo-1596192414706-131f4e6537cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZhbmN5JTIwcmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
const image3 = 'https://wallpaperaccess.com/full/3014596.jpg'

const DATA = [
	{
		id: '1',
		image: image1,
		title: 'Aroma Mocha',
		distance: '0.5M away'
	},
	{
		id: '2',
		image: image2,
		title: 'Grill and Chill',
		distance: '0.8M away'
	},
	{
		id: '3',
		image: image3,
		title: 'Bismi Briyani',
		distance: '1.5M away'
	}
]

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const Places = () => {

	const renderData = ({ item }) => {
		return (
			<View style={styles.card}>
				<Image source={{ uri: item.image }} style={{ height: '75%', width: '100%', borderTopRightRadius: 10, borderTopLeftRadius: 10 }} />
				<Text style={styles.text}>{item.title}</Text>
				<Text style={styles.distance}>{item.distance}</Text>
			</View>
		)
	}
	return (
		<View>
			<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 14, marginTop: 20 }}>
				<Text style={styles.headingTxt}>Places to Eat</Text>
				<Text style={styles.seeAll}>See all</Text>
			</View>
			<View>
				<FlatList
					data={DATA}
					keyExtractor={(item) => item.id}
					renderItem={renderData}
					horizontal
					showsHorizontalScrollIndicator={false}
					style={{ paddingBottom: 20 }}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	card: {
		height: screenHeight / 3.4,
		width: screenWidth / 2.2,
		borderRadius: 10,
		marginHorizontal: 8,
		backgroundColor: '#e6e6ea',
		marginVertical: 20,
		alignItems: 'center',
		paddingBottom: 8
	},
	headingTxt: {
		fontSize: 16,
		fontFamily: ApplicationFonts.MontserratSemiBold,
		color: '#1B1B1B'
	},
	text: {
		marginTop: 12,
		fontSize: 15,
		color: '#1b1b1b',
		fontFamily: ApplicationFonts.MontserratSemiBold
	},
	distance: {
		fontSize: 13,
		marginTop: 3,
		color: '#1b1b1b',
		fontFamily: ApplicationFonts.MontserratRegular
	},
	seeAll: {
		color: '#0047AB',
		fontSize: 12,
		fontFamily: ApplicationFonts.MontserratMedium
	}
})
export default Places;