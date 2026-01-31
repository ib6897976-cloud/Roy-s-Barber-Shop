
export interface Service {
  name: string;
  description: string;
}

export interface Review {
  name: string;
  text: string;
  rating: number;
  highlight: string;
}

export interface TrustPoint {
  title: string;
  description: string;
  icon: React.ReactNode;
}
