import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<any>;
  image: string;
}

export interface CompanyInfo {
  name: string;
  address: string;
  zip: string;
  email: string;
  phone: string;
}