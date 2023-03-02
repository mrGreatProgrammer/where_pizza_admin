export interface INavLink {
  id: number;
  title: string;
  icon?: any;
  link: string;
}

// создаю интерфейс пользователя
export interface IUserInfo {
  id: number;
  fullName: string;
  tel: string;
  role: string;
}