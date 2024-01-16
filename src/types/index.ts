export interface IHeadingText {
  children: React.ReactNode;
  className?: string;
}

export interface IButton {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  onClick?: React.EventHandler<React.MouseEvent>;
}

export interface INewsCard {
  title: string;
  image: string;
  date: string;
}
