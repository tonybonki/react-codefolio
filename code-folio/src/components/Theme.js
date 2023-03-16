import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const noBorder = defineStyle({
    border: '1px dashed', // change the appearance of the border
    borderRadius: 0,
});

export const kbdTheme = defineStyleConfig({
  variants: { noBorder },
});
