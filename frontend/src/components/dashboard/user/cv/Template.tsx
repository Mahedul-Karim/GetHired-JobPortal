import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { flexDirection: "row", backgroundColor: "#f8f9fa", padding: 20 },
  leftColumn: {
    width: "40%",
    backgroundColor: "#1a3a53",
    padding: 20,
    color: "white",
  },
  rightColumn: { width: "60%", backgroundColor: "white", padding: 20 },
  profileContainer: { alignItems: "center", marginBottom: 20 },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    border: "3px solid white",
  },
  headline: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 15,
    borderBottom: "1px solid white",
    paddingBottom: 4,
  },
  contactText: { fontSize: 12, marginBottom: 5 },
  rightTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1a3a53",
    textAlign: "center",
    marginBottom: 5,
  },
  rightSubTitle: {
    fontSize: 12,
    textAlign: "center",
    color: "#666",
    textTransform: "uppercase",
    marginBottom: 10,
  },
  experienceItem: { marginBottom: 10 },
  experienceTitle: { fontWeight: "bold", fontSize: 12 },
  experienceCompany: { fontSize: 10, color: "#555" },
  experienceDescription: { fontSize: 10, marginTop: 5, color: "#666" },
  skillsList: { flexDirection: "row", flexWrap: "wrap", marginTop: 5 },
  skillItem: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    padding: 4,
    margin: 2,
    fontSize: 10,
    borderRadius: 3,
  },
});

const Template = ({ user }: { user: any }) => {
  if (!user || !user?.resume) {
    return <></>;
  }

  const {
    profilePic,
    resume,
    phone,
    email,
    address,
    portfolio,
    firstName,
    lastName,
    knownLanguages,
  } = user;

  const { headline, skills, experiences, education, projects } = resume;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Left Column */}
        <View style={styles.leftColumn}>
          <View style={styles.profileContainer}>
            {profilePic?.url && (
              <Image src={profilePic.url} style={styles.profileImage} />
            )}
            <Text>{firstName}</Text>
            <Text style={styles.headline}>{headline}</Text>
          </View>

          <Text style={styles.sectionTitle}>Contact</Text>
          {phone && <Text style={styles.contactText}>📞 {phone}</Text>}
          {email && <Text style={styles.contactText}>📧 {email}</Text>}
          {address && <Text style={styles.contactText}>📍 {address}</Text>}
          {portfolio && <Text style={styles.contactText}>🌐 {portfolio}</Text>}

          <Text style={styles.sectionTitle}>Education</Text>
          {education?.map((edu: any, index: number) => (
            <Text key={index} style={styles.contactText}>
              {edu.degree} at {edu.university} ({edu.startDate} - {edu.endDate})
            </Text>
          ))}

          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skillsList}>
            {skills?.map((skill: any, index: number) => (
              <Text key={index} style={styles.skillItem}>
                {skill}
              </Text>
            ))}
          </View>

          <Text style={styles.sectionTitle}>Languages</Text>
          <View style={styles.skillsList}>
            <Text style={styles.skillItem}>{knownLanguages}</Text>
          </View>
        </View>

        {/* Right Column */}
        <View style={styles.rightColumn}>
          {/* <Text style={styles.rightTitle}>{firstName} {headline}</Text>
      {jobTitle && <Text style={styles.rightSubTitle}>{jobTitle}</Text>}

      {profile && (
        <>
          <Text style={styles.sectionTitle}>Profile</Text>
          <Text style={styles.experienceDescription}>{profile}</Text>
        </>
      )} */}

          <Text style={styles.sectionTitle}>Work Experience</Text>
          {experiences?.map((exp: any, index: number) => (
            <View key={index} style={styles.experienceItem}>
              <Text style={styles.experienceTitle}>{exp.workingPosition}</Text>
              <Text style={styles.experienceCompany}>
                {exp.companyName} ({exp.startDate} - {exp.endDate})
              </Text>
              {exp.description && exp.description.length > 0 && (
                <Text style={styles.experienceDescription}>
                  {exp.description.join(", ")}
                </Text>
              )}
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default Template;
