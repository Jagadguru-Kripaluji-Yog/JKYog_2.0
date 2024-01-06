import { SVGIconProps } from '@/src/types/icons';
import { theme } from '@/src/utils/tailwind';

export function getPathFill(variant: SVGIconProps['variant'], defaultColor?: string) {
  const colors = theme().colors;
  switch (variant) {
    case 'primary':
      return colors['button-primary'];
    case 'primary-dark':
      return colors['primary'];
    case 'light-brown':
      return colors['light-brown'];
    case 'secondary':
      return 'white';
    default:
      return defaultColor || colors['heading'];
  }
}

export function getInvertedPathFill(variant: SVGIconProps['variant']) {
  const colors = theme().colors;
  switch (variant) {
    case 'secondary':
      return colors['button-primary'];
    default:
      return 'white';
  }
}
