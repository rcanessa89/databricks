export interface FooterProps {
  text: string;
}

export interface FooterNavProps {
  onArrowClick: () => void;
}

export interface FooterNavListProps {
  title: string;
  items: {
    link: string;
    text: string;
  }[];
}
