import { Advice } from './Advices.type';

export const ADVICES: Record<string, Advice> = {
  coffee: {
    id: 1,
    text: "Le café n'est pas interdit mais est à consommer avec modération",
  },
  alcohol: {
    id: 2,
    text: "L'alcool est fortement déconseillé pour les femmes enceintes.",
  },
};
