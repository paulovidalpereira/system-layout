import { extendTheme } from '@chakra-ui/react';

import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/500.css'
import '@fontsource/open-sans/600.css'
import '@fontsource/open-sans/700.css'
import '@fontsource/open-sans/800.css'

import { ButtonStyles as Button} from './components/ButtonStyles';

export const theme = extendTheme({
  fontSizes: {
    // sm: '13px',
  },
  styles: {
    global: {
      body: {
        fontFamily: 'Open Sans, Arial, Helvetica, sans-serif',
        fontSize: "sm",
        color: "gray.800",
        // lineHeight: "base",
      },
    },
  },
  components: {
    Button
  }
});
