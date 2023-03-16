import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const noBorder = defineStyle({ // change the appearance of the border
    borderRadius: 0,
});

export const kbdTheme = defineStyleConfig({
  variants: { noBorder },
});
