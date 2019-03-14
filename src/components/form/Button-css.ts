import { css } from '@emotion/core'
import { Color, Type, Label } from '@/theme'
import * as polished from 'polished'

export const buttonStyle = css`
  ${Label('button')}
  ${Type.headerFont}
  background: ${Color.brandPrimary};
  text-align: center;
  color: #fff;
  padding: 12px;
  border-radius: 4px;
  letter-spacing: 0.02em;
  cursor: pointer;

  &:hover, &:active {
    background: ${polished.darken(0.15, Color.brandPrimary)}
  }
`;