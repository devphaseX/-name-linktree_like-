import React from 'react';
import type { ImageAssest } from '../../assets';
import { sortBy } from '../util/';

type StyleClassType = { name: string; priority: number };

interface ButtonWithImageProps {
  imageInfo: ImageAssest;
  buttonType: 'link' | 'button';
  extraButtonProps?: Record<PropertyKey, any>;
  styleClass: Array<StyleClassType>;
}

export const ButtonWithImage: React.FC<ButtonWithImageProps> = (props) => {
  const { buttonType, imageInfo, extraButtonProps, styleClass } = props;

  let mappedButtonType: string;
  const styleClassSorted = sortBy(
    styleClass,
    (a, b) => b.priority - a.priority
  ).map((style) => style.name.trim());

  switch (buttonType) {
    case 'link': {
      mappedButtonType = 'a';
      break;
    }

    default: {
      if (buttonType !== 'button') {
        throw new TypeError(
          `Invalid button type provide - type: {${buttonType}}`
        );
      }

      mappedButtonType = buttonType;
    }
  }

  return React.createElement(
    mappedButtonType,
    { ...extraButtonProps, className: styleClassSorted.join(' ') },
    <img src={imageInfo.url} title={imageInfo.title} />
  );
};
