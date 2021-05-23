import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function List({ data }) {
	return (
		<View style={styles.container}>
				
				<View style={styles.card}>
					{/* <Text style={{ fontSize: 16 }}> {data.title} </Text>

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

					</View> */}

				</View>
		</View>
	);
}

const styles = StyleSheet.create({

	container: {
		paddingLeft: 20,
	},
	card: {
		width: 280,
		backgroundColor: "#FFF",
		height: 350,
		borderRadius: 5,
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
});
