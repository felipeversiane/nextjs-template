import createMiddleware from 'next-intl/middleware';
import {pathnames, locales, localePrefix} from '@/config';

export default createMiddleware({
  defaultLocale: 'pt-BR',
  locales,
  pathnames,
  localePrefix
});

export const config = {
  matcher: [
    '/',

    '/(pt-BR|en-US)/:path*',

    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};