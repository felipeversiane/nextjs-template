import {Pathnames} from 'next-intl/navigation';

export const locales = ['pt-BR', 'en-US'] as const;

export const pathnames = {
  '/': '/',
  '/tools': {
    'en-US': '/tools',
    'pt-BR': '/ferramentas'
  },
  '/about': {
    'en-US': '/about',
    'pt-BR': '/sobre'
  },
  '/contact': {
    'en-US': '/contact',
    'pt-BR': '/contato'
  }
} satisfies Pathnames<typeof locales>;

export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;