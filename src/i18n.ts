import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {locales} from './config';

export default getRequestConfig(async ({locale}) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (
      await (locale === 'en-US'
        ? 
          import('@/messages/en-US.json')
        : import(`@/messages/${locale}.json`))
    ).default
  };
});