import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const noBorder = defineStyle({ // change the appearance of the border

});

export const kbdTheme = defineStyleConfig({
  variants: { noBorder },
});
