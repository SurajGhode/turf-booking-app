import React from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

function PaymentMethodsScreen () {
    
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView>
        <TouchableOpacity style={[styles.paymentMethodContainer, { borderColor: colors.primary }]} activeOpacity={0.7}>
          <MaterialIcons name="credit-card" size={30} color={colors.primary} />
          <View style={styles.paymentMethodDetails}>
            <Text style={[styles.paymentMethodTitle, { color: colors.text }]}>Visa ending in 1234</Text>
            <Text style={[styles.paymentMethodSubtitle, { color: colors.text }]}>Expires 05/25</Text>
          </View>
          <TouchableOpacity style={styles.paymentMethodAction} activeOpacity={0.7}>
            <MaterialIcons name="delete" size={24} color={colors.text} />
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.paymentMethodContainer, { borderColor: colors.primary }]} activeOpacity={0.7}>
          <MaterialIcons name="credit-card" size={30} color={colors.primary} />
          <View style={styles.paymentMethodDetails}>
            <Text style={[styles.paymentMethodTitle, { color: colors.text }]}>MasterCard ending in 5678</Text>
            <Text style={[styles.paymentMethodSubtitle, { color: colors.text }]}>Expires 08/26</Text>
          </View>
          <TouchableOpacity style={styles.paymentMethodAction} activeOpacity={0.7}>
            <MaterialIcons name="delete" size={24} color={colors.text} />
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.paymentMethodContainer, { borderColor: colors.primary }]} activeOpacity={0.7}>
          <MaterialIcons name="add-circle-outline" size={30} color={colors.primary} />
          <Text style={[styles.paymentMethodTitle, { color: colors.primary }]}>Add Payment Method</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  paymentMethodContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 30,
  },
  paymentMethodDetails: {
    flex: 1,
    marginHorizontal: 10,
  },
  paymentMethodTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  paymentMethodSubtitle: {
    fontSize: 14,
  },
  paymentMethodAction: {
    marginLeft: 10,
  },
});

export default PaymentMethodsScreen;
