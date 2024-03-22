import { Text, View, StyleSheet, Image, Dimensions } from "react-native";

const offer = 'https://s3-ap-southeast-1.amazonaws.com/bsy/iportal/images/zomato-banner-change_74B641A1E3AE1100D7015078982A3409.jpg'

const screenHeight = Dimensions.get('screen').height;

const OfferImage = () => {
	return (
		<View style={{ marginVertical: 10 }}>
			<Image source={{ uri: offer }} style={{ height: screenHeight / 5.5, borderRadius: 12, marginHorizontal: 12 }} />
		</View>
	)
}

export default OfferImage;