import { useLayoutEffect, useState } from 'react';
interface PageDimension {
  width: number;
  height: number;
}

interface useMediaQueryOption extends Partial<PageDimension> {
  rule: string;
}

interface MediaQueryResult extends PageDimension {
  hasMatch: boolean;
}

const useMediaQuery = (option: useMediaQueryOption) => {
  const [pageDimension, setPageDimension] = useState<MediaQueryResult>({
    width: 0,
    height: 0,
    hasMatch: false,
  });

  useLayoutEffect(() => {
    const queryMedia = window.matchMedia(option.rule);

    let queryHandler: () => void;
    queryMedia.addEventListener(
      'change',
      (queryHandler = () => {
        const pageDimensions = document.documentElement.getClientRects();
        const lastPageDimension = pageDimensions.item(
          pageDimensions.length - 1
        )!;

        setPageDimension(() => ({
          width: lastPageDimension.width,
          height: lastPageDimension.height,
          hasMatch: queryMedia.matches,
        }));
      })
    );

    queryHandler();
    console.log(queryMedia);
    return () => {
      queryMedia.removeEventListener('change', queryHandler);
    };
  }, []);

  return pageDimension;
};

export { useMediaQuery };
