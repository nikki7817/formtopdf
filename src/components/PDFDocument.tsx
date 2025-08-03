"use client";

import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { useFormStore } from "../app/store/useFormStore";

// PDF Styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: "#ffffff",
  },
  section: {
    marginBottom: 10,
    flexDirection: "row",
  },
  label: {
    width: 120,
    fontWeight: "bold",
    fontSize: 12,
  },
  value: {
    fontSize: 12,
  },
});

// PDF Component
export default function PDFDocument() {
  const { name, email, phone, position, description } = useFormStore();

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{name}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{email}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>{phone}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Position:</Text>
          <Text style={styles.value}>{position}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Description:</Text>
          <Text style={styles.value}>{description}</Text>
        </View>
      </Page>
    </Document>
  );
}
