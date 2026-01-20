export type ButtonVariantKey = 'solid' | 'outline';

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
};
