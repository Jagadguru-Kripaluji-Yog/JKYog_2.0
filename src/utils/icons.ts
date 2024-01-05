import { SVGIconProps } from '@/src/types/icons';
import { theme } from '@/src/utils/tailwind';

export function getPathFill(variant: SVGIconProps['variant']) {
  const colors = theme().colors;
  switch (variant) {
    case 'primary':
      // @ts-expect-error tw resolve config
      return colors['button-primary'];
    case 'primary-dark':
      // @ts-expect-error tw resolve config
      return colors['primary'];
    case 'light-brown':
      // @ts-expect-error tw resolve config
      return colors['light-brown'];
    case 'secondary':
      return 'white';
    default:
      return 'black';
  }
}
