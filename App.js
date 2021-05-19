import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

import { ListPedal } from "./ListPedal";

import List from "./src/componets/List";

export default function App() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Grupos de Pedal</Text>

			<FlatList
				style={styles.flatlist}
				keyboardShouldPersistTaps="handled"
				data={ListPedal}
				keyExtractor={(item) => String(item.id)}
				renderItem={({ item }) => <List data={item} />}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: getStatusBarHeight(true) + 30,
		backgroundColor: "#f1eaea",
	},

	title: {
		fontSize: 20,
		fontWeight: "bold",
		paddingLeft: 20,
		textAlignVertical: "center",
		height: 50,
		borderBottomWidth: 1.5,
		borderBottomColor: "#b5aeae",
	},

	flatlist: {
		paddingHorizontal: 10,
		marginTop: 5,
	},
});
