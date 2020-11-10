export interface MenuListItemsProps {
  id: number;
  title: string;
  icon: any;
  path: string;
}

export interface SignInFormData {
  email: string;
  password: string;
}

export interface ToDo {
  key: number;
  text: string;
  completed: boolean;
}
