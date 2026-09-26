import { ActionButton, BackgroundView, CategoryButton, ProfileImage } from "@/components";
import { CATEGORIES } from "@/data";
import { colors, typography } from "@/themes";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const [selectedIds, setSelectedIds] = useState([CATEGORIES[0].id]);

  const toggleCategory = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  function handleSchedule() {
    // Schedule button logic
  }

  return (
    <BackgroundView>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.topContainer}>
            <View style={styles.userInfo}>
          <ProfileImage source={require('../../assets/images/profile-pic-1.png')} />

          <View style={styles.textContainer}>
            <Text style={styles.headerText}>
              Olá, <Text style={styles.headerNameText}>Tiago</Text>
            </Text>
            <Text style={styles.headerSubtitleText}>Hoje é dia de vitória</Text>
          </View>
          </View>

          <ActionButton
            onPress={handleSchedule}
            icon={<AntDesign name="plus" size={24} color="#FFF" />}
            customStyle={styles.scheduleButton}
          />
        </View>

      <View style={styles.categoriesContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContent}
        >
          {CATEGORIES.map((category) => (
            <CategoryButton
              key={category.id}
              source={category.source}
              title={category.title}
              isSelected={selectedIds.includes(category.id)}
              onPress={() => toggleCategory(category.id)}
            />
          ))}
        </ScrollView>
      </View>

        <View style={styles.matchesHeader}>
          <Text style={styles.matchesTitle}>Partidas Agendadas</Text>
          <Text style={styles.matchesTotal}>Total 6</Text>
        </View>
      </SafeAreaView>
    </BackgroundView>
  );
}

const styles = StyleSheet.create({
safeArea: {
    flex: 1,
    alignItems: 'center',
},

  topContainer: {
    flexDirection: 'row',
    width: '87%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 28,
  },

  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  textContainer: {
    marginLeft: 16,
  },

  headerText: {
    ...typography.header,
    color: colors.textWhite,
  },

  headerNameText: {
    ...typography.headerName,
  },

  headerSubtitleText: {
    ...typography.headerSubtitle,
    color: colors.textWhite,
  },

  scheduleButton: {
    width: 48,
    height: 48,
  },

  categoriesContainer: {
    width: '100%',
    paddingLeft: '6.5%',
    marginBottom: 32,
  },

  categoriesContent: {
    gap: 8,
    paddingRight: 24,
  },

  matchesHeader: {
    flexDirection: 'row',
    width: '87%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16
  },

  matchesTitle: {
    ...typography.matchTitle,
    color: colors.textWhite,
  },

  matchesTotal: {
    ...typography.headerSubtitle,
    color: colors.textWhite,
  },
});