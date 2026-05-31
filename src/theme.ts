import 'styled-components';

export interface Theme {
  background: string;
  text: string;
  cardBackground: string;
  cardBorder: string;
  cardShadow: string;
  cardShadowHover: string;
  techBadgeBackground: string;
  linkColor: string;
}

export const lightTheme: Theme = {
  background: '#ecdbc7',
  text: '#000000',
  cardBackground: 'rgba(255, 255, 255, 0.3)',
  cardBorder: 'rgba(0, 0, 0, 0.1)',
  cardShadow: 'rgba(0, 0, 0, 0.05)',
  cardShadowHover: 'rgba(0, 0, 0, 0.1)',
  techBadgeBackground: 'rgba(0, 0, 0, 0.1)',
  linkColor: '#000000'
};

export const darkTheme: Theme = {
  background: '#3a2f28',
  text: '#e8dcc8',
  cardBackground: 'rgba(80, 60, 50, 0.3)',
  cardBorder: 'rgba(200, 180, 160, 0.2)',
  cardShadow: 'rgba(0, 0, 0, 0.3)',
  cardShadowHover: 'rgba(0, 0, 0, 0.5)',
  techBadgeBackground: 'rgba(200, 180, 160, 0.15)',
  linkColor: '#e8dcc8'
};

// Extend styled-components DefaultTheme
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
