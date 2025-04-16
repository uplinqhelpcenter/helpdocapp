// Uplinq brand colors
export const colors = {
  // Neutral colors
  'up-n01': '#050505',
  'up-n02': '#0E0E0F',
  'up-n03': '#18181A',
  'up-n04': '#222223',
  'up-n05': '#2C2D2E',
  'up-n06': '#363738',
  'up-n07': '#404142',
  'up-n08': '#5C5D5E',
  'up-n09': '#78787A',
  'up-n10': '#959596',
  'up-n11': '#B1B1B2',
  'up-n12': '#CFCFCF',
  'up-n13': '#E9E9EB',
  'up-nff': '#FFFFFF',
};

export type ColorKey = keyof typeof colors;

// Theme configuration for light mode
export const lightTheme = {
  // Background colors
  background: colors["up-nff"],
  foreground: colors["up-n01"],
  
  // Card colors
  card: colors["up-n13"],
  "card-foreground": colors["up-n01"],
  
  // Primary colors - using darker neutrals
  primary: colors["up-n03"],
  "primary-foreground": colors["up-nff"],
  
  // Secondary colors
  secondary: colors["up-n12"],
  "secondary-foreground": colors["up-n03"],
  
  // Border colors
  border: colors["up-n12"],
  input: colors["up-n12"],
  ring: colors["up-n08"],
  
  // Muted colors
  muted: colors["up-n13"],
  "muted-foreground": colors["up-n08"],
  
  // Accent colors
  accent: colors["up-n13"],
  "accent-foreground": colors["up-n01"],
  
  // Destructive colors
  destructive: "#FF0000", // Using standard red for error/destructive
  "destructive-foreground": colors["up-nff"],
};

// Theme configuration for dark mode
export const darkTheme = {
  // Background colors
  background: colors["up-n01"],
  foreground: colors["up-n13"],
  
  // Card colors
  card: colors["up-n03"],
  "card-foreground": colors["up-n13"],
  
  // Primary colors
  primary: colors["up-n12"],
  "primary-foreground": colors["up-n01"],
  
  // Secondary colors
  secondary: colors["up-n04"],
  "secondary-foreground": colors["up-n13"],
  
  // Border colors
  border: colors["up-n04"],
  input: colors["up-n04"],
  ring: colors["up-n08"],
  
  // Muted colors
  muted: colors["up-n03"],
  "muted-foreground": colors["up-n11"],
  
  // Accent colors
  accent: colors["up-n04"],
  "accent-foreground": colors["up-n13"],
  
  // Destructive colors
  destructive: "#FF0000", // Using standard red for error/destructive
  "destructive-foreground": colors["up-nff"],
};