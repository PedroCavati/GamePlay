import { colors, typography } from "@/themes";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from ".";

export default function MatchCard({ title, source, date, category, role, customStyle }) {
    return(
        <View style={[styles.matchContainer, customStyle]}>
            <View style={styles.matchLeftContainer}>
                <Avatar source={source} customStyle={styles.matchAvatar}/>

                <View style={styles.leftTextContainer}>
                    <Text style={styles.titleText}>{title}</Text>

                    <View style={styles.dateContainer}>
                        <AntDesign name="calendar" size={16} color={colors.iconRed}/>
                        <Text style={styles.dateText}>{date}</Text>
                    </View>
                </View>

                <View>
                    <Text style={styles.categoryText}>{category}</Text>
                    <Text style={styles.roleText}>{role}</Text>
                </View>
            </View>
        </View>      
    )
}

const styles = StyleSheet.create({
    matchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.debugOne,
    },

    matchLeftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.debubTwo,
    },

    matchAvatar: {
        width: 64,
        height: 68,
    },

    leftTextContainer: {
        marginLeft: 20,
    },
    
    titleText: {
        ...typography.matchTitle,
        color: colors.textWhite,
    },

    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.debugThree
    },

    dateText: {
        ...typography.matchDate,
        color: colors.textWhite,
    },

    categoryText: {
        ...typography.headerSubtitle,
        color: colors.textGray,
    },

    roleText: {
        ...typography.headerSubtitle,
        color: colors.textRed,
    }
})