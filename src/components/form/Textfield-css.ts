import { css } from '@emotion/core'
import {Label, Color, Content, Type} from '@/theme'

export const inputStyle = css`
  ${Label('input-text')}
  ${Type.formField}
  ${Content.borderDark}
  ${Content.borderRounded}

  font-family: inherit;

  outline-color: #00b900;
  padding: 8px;
  width: 100%;

  &:focus, &:active {
    border-color: ${Color.brandPrimary}
  }
`;

export const formGroup = css`
  ${Label('form-container')}
`;

export const inputGroup = css`
  ${Label('input-group')}
  display: flex;
`;