import React from "react";
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableOpacity,
	SafeAreaView,
} from "react-native";

import { ToastAndroid } from "react-native";

function feedbackDesenvolvedor() {
	ToastAndroid.show("Em Desenvolvimento.", ToastAndroid.SHORT);
}

export default function List({ data }) {
	return (
		<SafeAreaView>
			<View style={styles.container}>
				<Text style={{ fontSize: 16 }}>{data.title}</Text>
				
				<Text style={{ marginBottom: 10 }}>
					Criador: {data.creator}
				</Text>

				<View style={styles.linhaIcones}>
					<View
						style={{ flexDirection: "row", alignItems: "center" }}
					>
						<Image
							style={styles.img}
							source={require("../../assets/calendario.png")}
						/>
						<Text style={styles.valor}>{data.dia}</Text>
					</View>
					<View
						style={{ flexDirection: "row", alignItems: "center" }}
					>
						<Image
							style={styles.img}
							source={require("../../assets/measure.png")}
						/>
						<Text style={styles.valor}>{data.km} km</Text>
					</View>

					<View
						style={{ flexDirection: "row", alignItems: "center" }}
					>
						<Image
							style={styles.img}
							source={require("../../assets/ciclista.png")}
						/>
						<Text style={styles.valor}>
							{data.participants.length}
						</Text>
					</View>

					<View
						style={{ flexDirection: "row", alignItems: "center" }}
					>
						<Image
							style={styles.img}
							source={require("../../assets/linhas-de-ecg.png")}
						/>
						<Text style={styles.valor}>{data.rhythm}</Text>
					</View>

					<View
						style={{
							marginTop: 10,
							alignItems: "center",
							flexDirection: "row",
						}}
					>
						<Image
							style={styles.img}
							source={require("../../assets/linha-de-largada.png")}
						/>
						<Text style={{ fontSize: 12 }}>{data.largada}</Text>
					</View>
				</View>

				<TouchableOpacity
					style={styles.touchable}
					onPress={() => feedbackDesenvolvedor()}
				>
					<Text style={styles.learMore}>Ver mais</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#FFFFFF",
		padding: 20,
		marginBottom: 10,
		width: 340,
		borderRadius: 3,
	},

	linhaIcones: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
	},

	img: {
		width: 20,
		height: 20,
		marginRight: 10,
	},

	valor: {
		fontSize: 12,
	},

	learMore: {
		textAlign: "right",
		fontSize: 12,
		fontWeight: "bold",
		fontStyle: "italic",
	},
});
