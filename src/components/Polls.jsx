import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';
import React, { useState, useMemo } from 'react'
import ApplicationFonts from "../config/appFonts";

const screenHeight = Dimensions.get('screen').height;

const Polls = () => {
	const [selectedId, setSelectedId] = useState();

	const radioButtons = useMemo(() => ([
		{
			id: '1',
			label: 'Sam Billings',
			value: 'option1'
		},
		{
			id: '2',
			label: 'MS Dhoni     ',
			value: 'option2'
		},
		{
			id: '3',
			label: 'Bens Stokes',
			value: 'option3'
		}
	]), []);


	return (
		<View>
			<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 14, marginTop: 20 }}>
				<Text style={styles.headingTxt}>Polls</Text>
				<Text style={styles.seeAll}>See all</Text>
			</View>

			<View style={styles.card}>
				<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 8, marginHorizontal: 10 }}>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Text style={{ color: '#228BE6', margin: 12, fontSize: 12, fontFamily: ApplicationFonts.MontserratMedium }}>11 Votes</Text>
					</View>
					<View style={{ borderWidth: 1, borderRadius: 25, borderColor: '#eee', padding: 8, paddingHorizontal: 14, backgroundColor: '#F0FFFF' }}>
						<Text style={{ color: '#4a4a4a', fontSize: 11, fontFamily: ApplicationFonts.MontserratMedium }}>End of the session</Text>
					</View>
				</View>

				<View style={{ marginHorizontal: 12, marginVertical: 6 }}>
					<Text style={{ fontSize: 13, color: '#1b1b1b', fontFamily: ApplicationFonts.MontserratSemiBold }}>Who will be the man of the match in the upcoming lead club vs KKR match?</Text>
					<View style={{ marginTop: 25, alignItems: 'center', alignSelf: 'flex-start' }}>
						<RadioGroup
							radioButtons={radioButtons}
							onPress={setSelectedId}
							selectedId={selectedId}
							layout='column'
						/>
					</View>
					<TouchableOpacity activeOpacity={0.7} style={{ borderWidth: 1, borderColor: '#eee', padding: 12, borderRadius: 8, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
						<Text style={{ color: '#4169E1', fontSize: 13, fontFamily: ApplicationFonts.MontserratSemiBold }}>Vote</Text>
					</TouchableOpacity>

				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	card: {
		height: screenHeight / 3.1,
		borderRadius: 12,
		marginHorizontal: 12,
		backgroundColor: '#eee',
		marginVertical: 20
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
	}
})
export default Polls;