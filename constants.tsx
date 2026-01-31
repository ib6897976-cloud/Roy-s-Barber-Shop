
import React from 'react';
import { Scissors, ShieldCheck, Star, Users, MapPin, Sparkles } from 'lucide-react';
import { Service, Review, TrustPoint } from './types';

export const SHOP_INFO = {
  phone: "+17732971005",
  displayPhone: "(773) 297-1005",
  address: "3217 W Bryn Mawr Ave, Chicago, IL 60659",
  hours: [
    { day: "Mon", time: "Closed" },
    { day: "Tue - Fri", time: "9AM - 7PM" },
    { day: "Sat", time: "9AM - 7PM" },
    { day: "Sun", time: "9AM - 4:31PM" }
  ]
};

export const SERVICES: Service[] = [
  { name: 'Classic Haircut', description: 'Precision scissor and clipper work tailored to your head shape.' },
  { name: 'Fades & Lineups', description: 'Sharp, modern tapers and razor-edged alignment.' },
  { name: 'Straight Razor Shave', description: 'The legendary hot towel treatment and a baby-smooth finish.' },
  { name: 'Beard Sculpting', description: 'Full beard shaping, trimming, and conditioning.' },
  { name: 'Junior Cuts', description: 'Patient, professional service for the next generation.' },
  { name: 'The Roy Special', description: 'Full service haircut and straight razor shave combo.' }
];

export const REVIEWS: Review[] = [
  {
    name: "Jonathan Eng",
    text: "Best barber in Chicago! I've been going to Roy's for years. Friendly, consistent, reliable service every time. I have thick hair with a tough cowlick and Roy tames it perfectly every visit.",
    rating: 5,
    highlight: "Cowlick Specialist"
  },
  {
    name: "Mike Sandoval",
    text: "Roy has been my barber for over 20 years. All humor aside, there's a reason why most of Roy's clients have been with him for many years. He's become like family to me.",
    rating: 5,
    highlight: "20+ Years of Loyalty"
  },
  {
    name: "Danielle Hasan",
    text: "By far, the best barber! This is the only person who cuts my boys' hair perfectly. He treats us like family. Roy is truly a master of his trade.",
    rating: 5,
    highlight: "Family & Mastery"
  },
  {
    name: "Robert Hattaway",
    text: "I am 74 years old and I can honestly say this is the best haircut I have ever had anywhere. Eddie and Roy are da men!! Simply magnificent.",
    rating: 5,
    highlight: "Best Cut Ever"
  }
];

export const TRUST_POINTS: TrustPoint[] = [
  {
    title: "Mastery Over Decades",
    description: "20+ years of legendary reputation in the heart of Chicago.",
    icon: <Scissors className="w-6 h-6" />
  },
  {
    title: "Any Hair, Any Style",
    description: "Experts in thick hair, cowlicks, fades, and traditional lineups.",
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    title: "Family First",
    description: "A welcoming, clean, and professional space for all ages.",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Old-School Service",
    description: "Every visit includes the attention to detail that defined the classic era.",
    icon: <ShieldCheck className="w-6 h-6" />
  }
];

export const SHOP_IMAGES = [
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=1200"
];
