export type NavLink = {
  label: string;
  route: string;
};

export type TCategory = {
  id?: number;
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
  id: number;
  title: string;
  price: number;
  cat_prefix: string;
  img: string;
  max: number;
  quantity?: number;
  isLiked?: boolean;
};
