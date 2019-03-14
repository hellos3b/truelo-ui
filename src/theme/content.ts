import Color from './colors'
import { css } from '@emotion/core'

export default {
  borderLight: css`
    border: 1px solid ${Color.accentLight};
  `,

  borderDark: css`
    border: 1px solid ${Color.accentDark};
  `,

  borderRounded: css`
    border-radius: 3px;
  `,

  navbarHeight: `60px`
}