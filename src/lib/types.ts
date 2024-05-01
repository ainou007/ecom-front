export type NavLink = {
  label: string;
  route: string;
};

export type TCategory = {
  id?: string;
  title: string;
  prefix: string;
  img: string;
};

export enum TLoading {
  idle,
  pending,
  succeeded,
  failed,
}

export type TProduct = {
  id: string;
  title: string;
  price: string;
  cat_prefix: string;
  img: string;
};
