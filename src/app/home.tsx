import { ActionButton, BackgroundView, CategoryButton, ProfileImage } from "@/components";
import { colors, typography } from "@/themes";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {

    function handleSchedule() {

    }

    function handleSelection() {

    }

    return (
        <BackgroundView>

            <SafeAreaView style={{ alignItems: 'center' }}>

                <View style={styles.topContainer}>
                    <ProfileImage source={require('../../assets/images/profile-pic-1.png')} />

                    <View style={styles.textContainer}>
                        <Text style={styles.headerText}>
                            Olá, {' '}
                            <Text style={styles.headerNameText}>Tiago</Text>
                        </Text>
                        <Text style={styles.headerSubtitleText}>Hoje é dia de vitória</Text>
                    </View>

                    <ActionButton
                        onPress={handleSchedule}
                        icon={<AntDesign name="plus" size={24} color="#FFF" />}
                        customStyle={styles.scheduleButton}
                    />
                </View>

            </SafeAreaView>

            <View style={styles.scrollContainer}>
                <ScrollView horizontal style={styles.scrollView} contentContainerStyle={styles.scrollContentContainer}>
                    <CategoryButton
                        source={require("../../assets/images/ranked-icon.png")}
                        title="Ranqueada"
                        onPress={handleSelection} />
                    <CategoryButton
                        source={require("../../assets/images/ranked-icon.png")}
                        title="Ranqueada"
                        onPress={handleSelection} />
                    <CategoryButton
                        source={require("../../assets/images/ranked-icon.png")}
                        title="Ranqueada"
                        onPress={handleSelection} />
                </ScrollView>
            </View>
            
            <SafeAreaView style={{ alignItems: 'center' }}>
                <View style={styles.matchesContainer}>
                    <Text style={styles.matchesTitle}>Partidas Agendadas</Text>
                    <Text style={styles.matchesTotal}>Total 6</Text>
                </View>
            </SafeAreaView>

        </BackgroundView>
    )
}

const styles = StyleSheet.create({
    topContainer: {
        flexDirection: 'row',
        width: '87%',
        position: 'relative',
        alignItems: 'center'
    },

    textContainer: {
        flexDirection: 'column',
        marginLeft: 20
    },

    headerText: {
        ...typography.header,
        color: colors.textWhite
    },

    headerNameText: {
        ...typography.headerName
    },

    headerSubtitleText: {
        ...typography.headerSubtitle,
        color: colors.textWhite
    },

    scheduleButton: {
        position: 'absolute',
        right: 0
    },

    scrollContainer: {
        alignItems: 'center',
    },

    scrollView: {
        width: '87%',
        flexGrow: 0,
    },

    scrollContentContainer: {
        gap: 8,
    },

    matchesContainer: {
        flexDirection: 'row',
        width: '87%',
        position: 'relative',
        alignItems: 'center',
        backgroundColor: colors.buttonRed
    },

    matchesTitle: {
        position: 'absolute',
        left: 0,
        ...typography.matchTitle,
        color: colors.textWhite
    },

    matchesTotal: {
        position: 'absolute',
        right: 0,
        ...typography.headerSubtitle,
        color: colors.textWhite
    }
})