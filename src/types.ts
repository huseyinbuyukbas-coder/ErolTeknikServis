/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  description: string;
  buttonText: string;
  features?: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  initials: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Brand {
  name: string;
  logoUrl?: string;
}

export interface ServiceRequest {
  fullName: string;
  phone: string;
  device: string;
  issue: string;
  address: string;
}
