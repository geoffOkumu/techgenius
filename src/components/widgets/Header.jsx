import styled from 'styled-components'

import { media } from '../styles/utils'

export const MenuContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;

  figure {
    margin: 0;
    display: none;

    ${media.tablet`
        display: block;
    `}
  }
`

export const Header = styled.header`
  height: 500px;
  position: relative;

  img {
    width: 80% !important;
    height: 500px !important;
    object-fit: cover;

    ${media.tablet`
        width: 100% !important;
    `}
  }
`

export const HeaderOverlay = styled.div`
  height: 500px;
  width: 80%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgb(0, 0, 0, 0.8);

  ${media.tablet`
      width: 100% !important;
  `}
`

export const TextOverlay = styled.div`
  height: 500px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  h1 {
    display: block;
    color: #fff;
    font-weight: 400;
    font-size: 200px;
    margin-bottom: 1rem;

    ${media.phone`
      font-size: 6rem;
      margin-top: 180px;
    `}
  }

  p {
    display: block;
    color: #fff;
    font-weight: 400;
    font-size: 1.4rem;

    ${media.phone`
      font-size: 1.2rem;
    `}
  }
`
