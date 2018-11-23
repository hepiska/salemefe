import styled from 'styled-components'
import { colors, shadows } from '@pomona/pomona3-ui/lib/constants'

export const Wrapper = styled.div`
  font-family: 'Linotte';
  display: ${({ display }) => display || 'flex'};
  position: ${({ position }) => position || 'static'};
  flex: ${({ flex }) => flex || null};
  flex-wrap: ${({ wrap }) => wrap || null};
  border-radius: ${({ radius }) => radius || '8px'};
  flex-direction: ${({ direction }) => direction || 'column'};
  align-items: ${({ align }) => align || 'center'};
  justify-content: ${({ justify }) => justify || 'center'};
  margin: ${({ margin }) => margin || null};
  padding: ${({ padding }) => padding || null};
  width: ${({ width }) => width || null};
  max-width: ${({ maxWidth }) => maxWidth || null};
  height: ${({ height }) => height || null};
  border: ${({ border }) => border || null};
  box-shadow: ${({ shadow }) => shadow || null};
  background: ${({ background }) => background || null};
  overflow: ${({ overflow }) => overflow || null};
  cursor: ${({ cursor }) => cursor || null};
  ${props => (props.focus ? `
    :hover {
      box-shadow: ${shadows.focused};
    }
    :focus {
      box-shadow: ${shadows.focused};
    }
  ` : null)}
`

export const ImageWrapper = styled.img`
  position: static;
  border-radius: ${({ radius }) => radius || null};
  margin: ${({ margin }) => margin || null};
  padding: ${({ padding }) => padding || null};
  width: ${({ width }) => width || null};
  max-width: ${({ maxWidth }) => maxWidth || null};
  height: ${({ height }) => height || null};
  border: ${({ border }) => border || null};
`

export const NavContainer = styled.div`
  position: fixed;
  height: 56px;
  width: 100vw;
  z-index: 10;
  box-shadow: ${({ shadow }) => shadow || shadows.idle};
  background: ${({ backgroundColor }) => backgroundColor || colors.white};
  ${({ position }) => {
    switch (position) {
      case 'top':
        return 'top: 0px; left: 0px;'
      default:
        return 'bottom: 0px; left: 0px;'
    }
  }};
`

export const LocalNavContainer = styled.div`
  width: 100%;
  max-width: 460px;
  height: 56px;
  z-index: 11;
  margin: 0px auto;
  position: relative;
`

export const RootContainer = styled.div`
  width: 100%;
  max-width: 1200px;
`
export const Container = styled.div`
  width: 100%;
  max-width: 720px;
`

export const PlainLink = styled.a`
  text-decoration: ${({ textDecoration }) => textDecoration || 'none'};
  margin: ${({ margin }) => margin || null};
  padding: ${({ padding }) => padding || null};
  color: ${({ color }) => color || null};
  cursor: pointer;
`