import styled from 'styled-components'

export const Wrapper = styled.div`
  font-family: 'Linotte';
  display: ${({ display }) => display || 'flex'};
  position: ${({ position }) => position || 'static'};
  flex: ${({ flex }) => flex || null};
  flex-wrap: ${({ wrap }) => wrap || null};
  border-radius: ${({ radius }) => radius || '0'};
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
`

export const ImageWrapper = styled.img`
  position: static;
  border-radius: ${({ radius }) => radius || null};
  margin: ${({ margin }) => margin || null};
  padding: ${({ padding }) => padding || null};
  width: ${({ width }) => width || null};
  max-width: ${({ maxWidth }) => maxWidth || null};
  max-height: 100%;
  height: ${({ height }) => height || null};
  border: ${({ border }) => border || null};
`

export const NavContainer = styled.div`
  position: fixed;
  height: 56px;
  width: 100vw;
  z-index: 10;
  box-shadow: ${({ shadow }) => shadow || null};
  background: ${({ backgroundColor }) => backgroundColor || '#fff'};
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


export const FontWrapper = styled.p`
  margin: ${({ dmargin, margin }) => dmargin || margin || 0};
  padding: ${({ dpadding, padding }) => dpadding || padding || null};
  font-family: ${({ fontFamily }) => fontFamily || "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif"};
  font-size: ${({ sizeType, size }) => {
    if (size) {
      return size
    } else if (sizeType === 'title' || sizeType === 'h1') {
      return '16px'
    } else if (sizeType === 'h2' || sizeType === 'body') {
      return '14px'
    } else {
      return '12px'
    }
  }};
  font-weight: ${({ weight, weightType }) => {
    if (weight) {
      return weight
    } else if (weightType === 'semibold') {
      return '500'
    } else if (weightType === 'light') {
      return '300'
    } else {
      return '400'
    }
  }};
  color: ${({ color }) => color || '#000'};
  line-height: ${({ lineHeight }) => lineHeight || '1.2'};
  text-align: ${({ textAlign }) => textAlign || 'left'};
  @media screen and (max-width: 768px) {
    padding: ${({ padding }) => padding || null};
    margin: ${({ margin }) => margin || null};
  }
  `