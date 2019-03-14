import { css } from '@emotion/core'
import Color from './colors'
import { Label } from './helpers'

export default {
  brandName: css`
    font-weight: 400;
    letter-spacing: 0.02em;
    font-family: 'lato', sans-serif;
  `,

  headerFont: css`
    font-family: 'lato',sans-serif;
  `,

  bodyFont: css`
    font-family: 'Open Sans', sans-serif;
  `,

  formLabel: css`
    ${Label('input-text-label')}
    font-size: 0.8em;
    font-weight: 800;
    color: ${Color.fontLight};
    display: block;
    letter-spacing: 0.03em;
    line-height: 1.9;
  `,

  formField: css`
    font-size: 1em;
    color: ${Color.fontDark};
  `,

  pageHeader: css`
    font-family: 'lato',sans-serif;
    font-size: 1.6em;
    font-weight: 600;
    line-height: 2;
  `
}