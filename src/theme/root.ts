import { css } from '@emotion/core'
import Color from './colors'
import Type from './type'

export default css`
  body {
    ${Type.bodyFont}
    font-size: 14px;
    color: ${Color.fontDark};
    background: ${Color.background};
    font-family: 'Open Sans', sans-serif;
    letter-spacing: -0.02em;
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #ccc;
  }
`;