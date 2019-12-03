export class Routes {
  public static ROUTES: IRoutes = {
    anamnese: '/anamnese',
    auth: '/auth',
    intro: '/intro',
    login: '/auth/login',
    register: '/auth/register',
    blogs: '/blogs',
    schedule: '/schedule',
    settings: '/setting',
    notifications: '/notifications',
    trainers: '/trainers',
    gyms: '/gyms',
    training:'/training',
    drills:'/drills',
    shop: '/shop',
    shopHome: '/shop/home',
    shopBasket: '/shop/basket',
    shopCheckout: '/shop/checkout',
    shopProfile: '/shop/profile',
    shopSearch: '/shop/search',
    shopComplete: '/shop/complete',
    profile: '/profile',
  };
}
export interface IRoutes {
  anamnese: string;
  auth: string;
  intro: string;
  login: string;
  register: string;
  blogs: string;
  schedule: string;
  notifications: string;
  trainers: string;
  training: string;
  drills: string;
  gyms: string;
  settings: string;
  shop: string;
  shopHome: string;
  shopBasket: string;
  shopCheckout: string;
  shopProfile: string;
  shopSearch: string;
  shopComplete: string;
  profile: string;
}
