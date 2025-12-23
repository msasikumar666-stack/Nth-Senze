export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
}