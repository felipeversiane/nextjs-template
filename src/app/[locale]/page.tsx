import { useTranslations } from 'next-intl';
import React from 'react';

const Page = () => {
  const t = useTranslations('text')
  return (
    <div>
      {t('texto')}
    </div>
  );
}
export default Page;
