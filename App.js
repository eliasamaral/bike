import React from "react";
import { FlatList, StyleSheet, View, TouchableOpacity, Text} from "react-native";
import { ListPedal } from "./ListPedal";
import Header from "./src/componets/Header";
import List from "./src/componets/Card";

export default function App() {
	return (
		<View style={styles.container}>

			<Header style={styles.header} />

			<FlatList
				style={styles.flatlist}
				keyboardShouldPersistTaps="handled"
				showsHorizontalScrollIndicator={false}
				data={ListPedal}
				horizontal={true}
				keyExtractor={(item) => String(item.id)}
				renderItem={({ item }) => <List data={item} />}
			/>

			<View style={styles.containerBtn}>
				<TouchableOpacity >
					<Text  style={styles.btn}>Adicionar meu Pedal</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#E8EAEB",
		alignItems: 'center',
	},

    containerBtn: {
		position:'absolute',
        width: '50%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
		bottom: 20,
		borderRadius: 50,
		borderWidth: 1
    },
});
