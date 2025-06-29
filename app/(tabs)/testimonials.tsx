// TestimonialsScreen.tsx (Translated to English)

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Star, MessageCircle, Send } from 'lucide-react-native';
import { GradientBackground } from '@/components/GradientBackground';
import { Button } from '@/components/Button';
import { Colors } from '@/constants/Colors';
import { testimonials } from '@/constants/Data';

export default function TestimonialsScreen() {
  const [showForm, setShowForm] = useState(false);
  const [userTestimonial, setUserTestimonial] = useState('');
  const [userName, setUserName] = useState('');

  const handleSubmitTestimonial = () => {
    if (!userName.trim() || !userTestimonial.trim()) {
      Alert.alert('Oops!', 'Please fill in your name and testimonial.');
      return;
    }

    Alert.alert(
      'Thank you! 💖',
      'Your testimonial has been successfully submitted! It will be reviewed and may appear in our list of inspiring stories.',
      [
        {
          text: 'Ok',
          onPress: () => {
            setShowForm(false);
            setUserTestimonial('');
            setUserName('');
          }
        }
      ]
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        color={index < rating ? Colors.warning : Colors.accent}
        fill={index < rating ? Colors.warning : 'transparent'}
      />
    ));
  };

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Testimonials</Text>
            <Text style={styles.subtitle}>
              Real stories from women who transformed their faces
            </Text>
          </View>

          {/* Testimonials List */}
          <View style={styles.testimonialsContainer}>
            {testimonials.map((testimonial) => (
              <View key={testimonial.id} style={styles.testimonialCard}>
                <View style={styles.testimonialHeader}>
                  <View style={styles.authorInfo}>
                    <Text style={styles.authorName}>{testimonial.name}</Text>
                    <Text style={styles.authorAge}>{testimonial.age} years old</Text>
                  </View>
                  <View style={styles.rating}>
                    {renderStars(testimonial.rating)}
                  </View>
                </View>
                
                <Text style={styles.testimonialText}>"{testimonial.text}"</Text>
                
                <View style={styles.testimonialFooter}>
                  <MessageCircle size={16} color={Colors.primary} />
                  <Text style={styles.verifiedText}>Verified testimonial</Text>
                </View>
              </View>
            ))}
          </View>

          {/* User Testimonial Form */}
          {!showForm ? (
            <View style={styles.ctaContainer}>
              <Text style={styles.ctaTitle}>Your Story Matters!</Text>
              <Text style={styles.ctaText}>
                Have you started or completed the challenge? Share your experience and inspire other women to transform their faces naturally.
              </Text>
              <Button
                title="I want to leave my testimonial"
                onPress={() => setShowForm(true)}
                size="large"
                style={styles.ctaButton}
              />
            </View>
          ) : (
            <View style={styles.formContainer}>
              <Text style={styles.formTitle}>Your Testimonial</Text>
              <Text style={styles.formSubtitle}>
                Share your experience with the 28-Day Facial Yoga journey
              </Text>
              
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Your name</Text>
                <TextInput
                  style={styles.textInput}
                  value={userName}
                  onChangeText={setUserName}
                  placeholder="How would you like to be called?"
                  placeholderTextColor={Colors.text.secondary}
                />
              </View>
              
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Your experience</Text>
                <TextInput
                  style={[styles.textInput, styles.textArea]}
                  value={userTestimonial}
                  onChangeText={setUserTestimonial}
                  placeholder="Describe your experience with facial yoga. How do you feel? What changes have you noticed? How has it impacted your self-esteem?"
                  placeholderTextColor={Colors.text.secondary}
                  multiline
                  numberOfLines={4}
                  textAlignVertical="top"
                />
              </View>
              
              <View style={styles.formButtons}>
                <Button
                  title="Cancel"
                  onPress={() => setShowForm(false)}
                  variant="outline"
                  size="medium"
                  style={styles.cancelButton}
                />
                <Button
                  title="Submit"
                  onPress={handleSubmitTestimonial}
                  size="medium"
                  style={styles.submitButton}
                />
              </View>
            </View>
          )}

          {/* Statistics */}
          <View style={styles.statsContainer}>
            <Text style={styles.statsTitle}>Proven Results</Text>
            <View style={styles.statsGrid}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>95%</Text>
                <Text style={styles.statLabel}>Saw results in 7 days</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>87%</Text>
                <Text style={styles.statLabel}>Completed all 28 days</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>92%</Text>
                <Text style={styles.statLabel}>Would recommend to a friend</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </GradientBackground>
  );
}

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
  testimonialsContainer: {
    paddingHorizontal: 20,
  },
  testimonialCard: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  testimonialHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  authorInfo: {
    flex: 1,
  },
  authorName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: Colors.text.primary,
  },
  authorAge: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.text.secondary,
  },
  rating: {
    flexDirection: 'row',
    gap: 2,
  },
  testimonialText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: Colors.text.primary,
    lineHeight: 24,
    marginBottom: 12,
    fontStyle: 'italic',
  },
  testimonialFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  verifiedText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: Colors.primary,
  },
  ctaContainer: {
    margin: 20,
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
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
    marginBottom: 20,
  },
  ctaButton: {
    minWidth: 250,
  },
  formContainer: {
    margin: 20,
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  formTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: Colors.text.primary,
    marginBottom: 8,
    textAlign: 'center',
  },
  formSubtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: Colors.text.secondary,
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 16,
  },
  inputLabel: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: Colors.text.primary,
    marginBottom: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: Colors.accent,
    borderRadius: 12,
    padding: 12,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: Colors.text.primary,
    backgroundColor: Colors.background,
  },
  textArea: {
    height: 100,
  },
  formButtons: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  cancelButton: {
    flex: 1,
  },
  submitButton: {
    flex: 1,
  },
  statsContainer: {
    margin: 20,
    backgroundColor: Colors.primary,
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  statsTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: Colors.white,
    textAlign: 'center',
    marginBottom: 20,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontFamily: 'Poppins-Bold',
    fontSize: 32,
    color: Colors.white,
    marginBottom: 4,
  },
  statLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: Colors.white,
    textAlign: 'center',
    lineHeight: 16,
  },
});