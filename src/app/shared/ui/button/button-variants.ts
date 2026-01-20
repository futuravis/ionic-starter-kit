export type ButtonVariantKey = 'solid' | 'outline' | 'clear';

export const BUTTON_VARIANTS: Record<
  ButtonVariantKey,
  {
    fill: 'solid' | 'outline' | 'clear';
    className: string;
  }
> = {
  solid: {
    fill: 'solid',
    className: 'app-button-solid',
  },
  outline: {
    fill: 'outline',
    className: 'app-button-outline',
  },
  clear: {
    fill: 'clear',
    className: 'app-button-clear',
  },
};
