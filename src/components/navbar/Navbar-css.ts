import { css } from '@emotion/core'
import { Color, Type, Label, Content } from '@/theme'
// import * as polished from 'polished'

export const cssNavbar = css`
  ${Label('nav-bar')}
  border-top: 1px solid ${Color.accentLight};
  background: #fff;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: ${Content.navbarHeight};
  display: flex;
`

export const cssNavItem = css`
  flex-grow: 1;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 10px;
  ${Type.headerFont};

  .title {
    font-size: 0.75em;
  }

  .icon {
    font-size: 24px;
  }
`

export const cssNavItemSelected = css`
  color: ${Color.brandPrimary};
`