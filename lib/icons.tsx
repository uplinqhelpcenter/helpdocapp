'use client';

import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

// Create a mapping of icon names to dynamic imports
const iconMap: Record<string, ComponentType<any>> = {
  // Bookkeeping and finance icons
  'calculator': dynamic(() => import('lucide-react').then(mod => mod.Calculator)),
  'history': dynamic(() => import('lucide-react').then(mod => mod.History)),
  'zap': dynamic(() => import('lucide-react').then(mod => mod.Zap)),
  'file-text': dynamic(() => import('lucide-react').then(mod => mod.FileText)),
  'calendar': dynamic(() => import('lucide-react').then(mod => mod.Calendar)),
  'layers': dynamic(() => import('lucide-react').then(mod => mod.Layers)),
  'trending-up': dynamic(() => import('lucide-react').then(mod => mod.TrendingUp)),
  
  // Navigation and UI icons
  'book-open': dynamic(() => import('lucide-react').then(mod => mod.BookOpen)),
  'play-circle': dynamic(() => import('lucide-react').then(mod => mod.PlayCircle)),
  'layout': dynamic(() => import('lucide-react').then(mod => mod.Layout)),
  'link': dynamic(() => import('lucide-react').then(mod => mod.Link)),
  'user': dynamic(() => import('lucide-react').then(mod => mod.User)),
  'shield': dynamic(() => import('lucide-react').then(mod => mod.Shield)),
  
  // Getting started icons
  'rocket': dynamic(() => import('lucide-react').then(mod => mod.Rocket)),
  'book': dynamic(() => import('lucide-react').then(mod => mod.Book)),
  'share': dynamic(() => import('lucide-react').then(mod => mod.Share)),
  'check-circle': dynamic(() => import('lucide-react').then(mod => mod.CheckCircle)),
  
  // Account management icons
  'package': dynamic(() => import('lucide-react').then(mod => mod.Package)),
  'credit-card': dynamic(() => import('lucide-react').then(mod => mod.CreditCard)),
  'settings': dynamic(() => import('lucide-react').then(mod => mod.Settings)),
  
  // App feature icons
  'refresh-cw': dynamic(() => import('lucide-react').then(mod => mod.RefreshCw)),
  'grid': dynamic(() => import('lucide-react').then(mod => mod.Grid)),
  'upload': dynamic(() => import('lucide-react').then(mod => mod.Upload)),
  'bar-chart-2': dynamic(() => import('lucide-react').then(mod => mod.BarChart2)),
  
  // Security icons
  'lock': dynamic(() => import('lucide-react').then(mod => mod.Lock)),
  'eye': dynamic(() => import('lucide-react').then(mod => mod.Eye)),
  'award': dynamic(() => import('lucide-react').then(mod => mod.Award)),
  
  // Integration icons
  'home': dynamic(() => import('lucide-react').then(mod => mod.Home)),
  'users': dynamic(() => import('lucide-react').then(mod => mod.Users)),
  'shopping-cart': dynamic(() => import('lucide-react').then(mod => mod.ShoppingCart)),
  
  // Misc icons
  'list': dynamic(() => import('lucide-react').then(mod => mod.List)), 
  'message-circle': dynamic(() => import('lucide-react').then(mod => mod.MessageCircle)),
  'upload-cloud': dynamic(() => import('lucide-react').then(mod => mod.UploadCloud)),
  'headphones': dynamic(() => import('lucide-react').then(mod => mod.Headphones)),
};

// Function to create an icon component from a string identifier
export function getIcon(name: string, props = {}) {
  // Check if the name has the lucide- prefix and remove it
  const iconName = name.startsWith('lucide-') ? name.substring(7) : name;
  
  // Get the icon component from our map
  const IconComponent = iconMap[iconName];
  
  if (!IconComponent) {
    console.warn(`Icon '${name}' not found in icon map`);
    return null;
  }
  
  // Create the element with the provided props
  return <IconComponent size={24} {...props} />;
}

// Export convenience function for use in MDX
export function Icon({ name, ...props }: { name: string; [key: string]: unknown }) {
  return getIcon(name, props);
}