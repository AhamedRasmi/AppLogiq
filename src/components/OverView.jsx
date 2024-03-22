import { ScrollView } from "react-native";
import Card from "./Card";
import LiveScores from "./LiveScores";
import RecentPerformance from "./RecentPerformance";
import MoreActions from "./MoreActions";
import Polls from "./Polls";
import OfferImage from "./Offer";
import Places from "./Places";
import UpcomingEvents from "./UpcomingEvents";

const OverView = () => {
	return (
		<ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
			<Card />
			<UpcomingEvents />
			<LiveScores />
			<RecentPerformance />
			<MoreActions />
			<Polls />
			<OfferImage />
			<Places />
		</ScrollView>
	)
}
export default OverView;