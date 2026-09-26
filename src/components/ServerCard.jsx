import { colors, typography } from "@/themes";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Avatar } from ".";

export default function ServerCard({ title, source, date, category, role, onPress, customStyle }) {
    return (
        <TouchableOpacity
            style={[styles.serverContainer, customStyle]}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <Avatar source={source} customStyle={styles.serverAvatar} />

            <View style={styles.contentWrapper}>
                <View style={styles.infoRow}>
                    <View style={styles.middleTextContainer}>
                        <Text style={styles.titleText} numberOfLines={1}>{title}</Text>

                        <View style={styles.dateContainer}>
                            <AntDesign name="calendar" size={16} color={colors.iconRed} />
                            <Text style={styles.dateText}>{date}</Text>
                        </View>
                    </View>

                    <View style={styles.rightTextContainer}>
                        <Text style={styles.categoryText}>{category}</Text>

                        <View style={styles.roleContainer}>
                            <Ionicons name="person-sharp" size={16} color={colors.iconRed} />
                            <Text style={styles.roleText}>{role}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.divider} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    serverContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 16,
    },

    serverAvatar: {
        width: 64,
        height: 68,
    },

    contentWrapper: {
        flex: 1,
        marginLeft: 20,
    },

    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 24,
    },

    middleTextContainer: {
        flex: 1,
        marginRight: 12,
    },

    titleText: {
        ...typography.serverTitle,
        color: colors.textWhite,
    },

    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },

    dateText: {
        ...typography.serverDate,
        color: colors.textWhite,
        marginLeft: 6,
    },

    rightTextContainer: {
        alignItems: 'flex-end'
    },

    categoryText: {
        ...typography.headerSubtitle,
        color: colors.textGray,
    },

    roleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },

    roleText: {
        ...typography.headerSubtitle,
        color: colors.textRed,
        marginLeft: 6,
    },

    divider: {
        height: 1,
        backgroundColor: colors.dividerBlue,
        marginTop: 12,
    },
})