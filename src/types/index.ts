export interface IHeadingText {
  children: React.ReactNode;
  className?: string;
}

export interface IButton {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  onClick?: React.EventHandler<React.MouseEvent>;
  type?: "button" | "submit" | "reset" | undefined;
}

export interface IInput {
  placeholder?: string;
  className?: string;
  onChange?: React.EventHandler<React.ChangeEvent<HTMLInputElement>>;
}

export interface IStoryCard {
  id: string | number;
  title: string;
  image: string;
  date: string;
}
export interface IServiceCard {
  id: string | number;
  title: string;
  image: string;
  description: string;
}

export interface IHeadingDescription {
  headingText: string;
  descriptionText?: string;
  className?: string;
}
