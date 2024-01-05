import { SVGIconProps } from '@/src/types/icons';
import { theme } from '@/src/utils/tailwind';

export function getPathFill(variant: SVGIconProps['variant']) {
  // @ts-expect-error can't resolve custom theme
  const [primary, primaryDark] = [theme().colors['button-primary'], theme().colors['primary']];
  const pathFillColor =
    variant === 'primary'
      ? primary
      : variant === 'secondary'
        ? 'white'
        : variant === 'primary-dark'
          ? primaryDark
          : 'black';
  return pathFillColor;
}
