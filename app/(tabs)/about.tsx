import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CircleCheck as CheckCircle, Shield, Clock, Users } from 'lucide-react-native';
import { GradientBackground } from '@/components/GradientBackground';
import { Colors } from '@/constants/Colors';
import { aboutContent } from '@/constants/Data';

export default function AboutScreen() {
  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>About the Method</Text>
            <Text style={styles.subtitle}>
              Discover the transformative power of Facial Yoga
            </Text>
          </View>

          {/* Hero Image */}
          <View style={styles.heroContainer}>
            <Image
              source={{ uri: 'https://i.ibb.co/Mx68M5tM/cover-png.png' }}
              style={styles.heroImage}
              resizeMode="cover"
            />
          </View>

          {/* What is Facial Yoga */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{aboutContent.title}</Text>
            <Text style={styles.sectionText}>{aboutContent.description}</Text>
          </View>

          {/* Benefits */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Proven Benefits</Text>
            <View style={styles.benefitsList}>
              {aboutContent.benefits.map((benefit, index) => (
                <View key={index} style={styles.benefitItem}>
                  <CheckCircle size={20} color={Colors.success} />
                  <Text style={styles.benefitText}>{benefit}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* How it Works */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>How It Works</Text>
            <Text style={styles.sectionText}>
              Facial yoga works by strengthening the 57 muscles in your face through specific, controlled exercises. Just like your body, your facial muscles respond to training, becoming firmer, more toned, and better defined.
            </Text>

            <View style={styles.processContainer}>
              <View style={styles.processStep}>
                <View style={styles.stepNumber}>
                  <Text style={styles.stepNumberText}>1</Text>
                </View>
                <Text style={styles.stepTitle}>Warm-up</Text>
                <Text style={styles.stepDescription}>
                  We begin with gentle movements to prepare the muscles
                </Text>
              </View>

              <View style={styles.processStep}>
                <View style={styles.stepNumber}>
                  <Text style={styles.stepNumberText}>2</Text>
                </View>
                <Text style={styles.stepTitle}>Exercises</Text>
                <Text style={styles.stepDescription}>
                  We target specific areas with focused techniques
                </Text>
              </View>

              <View style={styles.processStep}>
                <View style={styles.stepNumber}>
                  <Text style={styles.stepNumberText}>3</Text>
                </View>
                <Text style={styles.stepTitle}>Relaxation</Text>
                <Text style={styles.stepDescription}>
                  We finish with calming techniques and facial massage
                </Text>
              </View>
            </View>
          </View>

          {/* Features */}
          <View style={styles.featuresContainer}>
            <Text style={styles.sectionTitle}>Why Choose Our Method?</Text>

            <View style={styles.featuresList}>
              <View style={styles.featureItem}>
                <Shield size={32} color={Colors.primary} />
                <Text style={styles.featureTitle}>100% Natural</Text>
                <Text style={styles.featureDescription}>
                  No invasive procedures, needles, or chemicals
                </Text>
              </View>

              <View style={styles.featureItem}>
                <Clock size={32} color={Colors.primary} />
                <Text style={styles.featureTitle}>Just 10 Minutes</Text>
                <Text style={styles.featureDescription}>
                  Practical exercises that fit into your daily routine
                </Text>
              </View>

              <View style={styles.featureItem}>
                <Users size={32} color={Colors.primary} />
                <Text style={styles.featureTitle}>Thousands of Women</Text>
                <Text style={styles.featureDescription}>
                  Over 10,000 women have already transformed their faces
                </Text>
              </View>
            </View>
          </View>

          {/* Guarantee */}
          <View style={styles.guaranteeContainer}>
            <Text style={styles.guaranteeTitle}>Our Guarantee</Text>
            <Text style={styles.guaranteeText}>{aboutContent.guarantee}</Text>
            <Text style={styles.guaranteeSubtext}>
              If you don't see results in the first 7 days, we offer personalized support to adjust your routine.
            </Text>
          </View>

          {/* Call to Action */}
          <View style={styles.ctaContainer}>
            <Text style={styles.ctaTitle}>Ready to Start?</Text>
            <Text style={styles.ctaText}>
              Join thousands of women who have already discovered the secret to a younger, more radiant face—naturally.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  // (rest of the styles remain unchanged)
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 28,
    color: Colors.text.primary,
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: Colors.text.secondary,
    textAlign: 'center',
    lineHeight: 24,
  },
  heroContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 16,
    overflow: 'hidden',
    height: 200,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  sectionContainer: {
    marginHorizontal: 20,
    marginBottom: 24,
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: Colors.text.primary,
    marginBottom: 12,
  },
  sectionText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: Colors.text.secondary,
    lineHeight: 24,
  },
  benefitsList: {
    gap: 12,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  benefitText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: Colors.text.secondary,
    lineHeight: 24,
    flex: 1,
  },
  processContainer: {
    marginTop: 16,
    gap: 16,
  },
  processStep: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: Colors.secondary,
    borderRadius: 12,
  },
  stepNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  stepNumberText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: Colors.white,
  },
  stepTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: Colors.text.primary,
    marginBottom: 4,
  },
  stepDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.text.secondary,
    textAlign: 'center',
    lineHeight: 20,
  },
  featuresContainer: {
    marginHorizontal: 20,
    marginBottom: 24,
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  featuresList: {
    gap: 20,
  },
  featureItem: {
    alignItems: 'center',
    padding: 16,
  },
  featureTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: Colors.text.primary,
    marginTop: 12,
    marginBottom: 8,
  },
  featureDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.text.secondary,
    textAlign: 'center',
    lineHeight: 20,
  },
  guaranteeContainer: {
    marginHorizontal: 20,
    marginBottom: 24,
    backgroundColor: Colors.success,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  guaranteeTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: Colors.white,
    marginBottom: 12,
    textAlign: 'center',
  },
  guaranteeText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: Colors.white,
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 24,
  },
  guaranteeSubtext: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.white,
    textAlign: 'center',
    lineHeight: 22,
    opacity: 0.9,
  },
  ctaContainer: {
    margin: 20,
    backgroundColor: Colors.accent,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
  },
  ctaTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: Colors.text.primary,
    marginBottom: 12,
    textAlign: 'center',
  },
  ctaText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: Colors.text.secondary,
    textAlign: 'center',
    lineHeight: 24,
  },
});