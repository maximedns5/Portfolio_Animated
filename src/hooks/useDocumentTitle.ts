import { useEffect } from 'react';

type UseDocumentTitleOptions = {
  description?: string;
};

export function useDocumentTitle(title: string, options?: UseDocumentTitleOptions) {
  useEffect(() => {
    const previousTitle = document.title;
    const descriptionTag =
      document.querySelector('meta[name="description"]') ??
      (() => {
        const meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
        return meta;
      })();

    const previousDescription = descriptionTag.getAttribute('content');

    document.title = title;

    if (options?.description) {
      descriptionTag.setAttribute('content', options.description);
    }

    return () => {
      document.title = previousTitle;
      if (previousDescription) {
        descriptionTag.setAttribute('content', previousDescription);
      }
    };
  }, [options?.description, title]);
}
