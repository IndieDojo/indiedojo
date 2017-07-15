import styled from 'styled-components';

export const FluidContainer = styled.div`
  margin: 0 auto;
  padding: 0 ${props => `${props.theme.outerMargin}rem`};
`
export const Container = styled.div`
  margin: 0 auto;
  padding: 0 ${props => props.theme.halfGutterWidth};
  @media only screen and (min-width: ${props => props.theme.screenSizes.sm} ) {
    width: ${props => props.theme.containers.sm};
  }
  @media only screen and (min-width: ${props => props.theme.screenSizes.md}) {
    width: ${props => props.theme.containers.md};
  }
  @media only screen and (min-width: ${props => props.theme.screenSizes.lg} ) {
    width: ${props => props.theme.containers.lg};
  }
`

export const ContainerSmall = Container.extend`
  max-width: 700px;
`

export const Row = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-wrap: wrap;
  margin: 0 ${props => props.theme.gutterCompensation};
  flex-direction: ${props => {
    if (!!props.reverse && !props.column) return "row-reverse";
    if (!!props.column && !props.reverse) return "column";
    if (!!props.reverse && !!props.column) return "column-reverse";
    return "row"
  }};
`

export const Cell = styled.div`
  box-sizing: border-box;
  flex: 1 0 0;
  flex-basis: ${props => !!props.xs ? 100*props.xs/12 : 0}%;
  max-width: ${props => !!props.xs ? 100*props.xs/12 : 100}%;
  padding: 0 ${props => props.theme.halfGutterWidth};
  margin-left: ${props => !!props.xsOffset ? 100*props.xsOffset/12 : 0}%;
  justify-content: ${props => {
    if (!!props.start) return "flex-start";
    if (!!props.end) return "flex-end";
    if (!!props.center) return "center";
    if (!!props.around) return "space-around";
    if (!!props.between) return "space-between";
    return "flex-start";
  }};
  text-align: ${props => {
    if (!!props.center) return "center";
    if (!!props.start) return "start";
    if (!!props.end) return "end";
    return "start";
  }};
  align-items: ${props => {
    if (!!props.middle) return "center";
    if (!!props.bottom) return "flex-end";
    return "flex-start";
  }};
  order: ${ props => {
    if (!!props.first) return -1;
    if (!!props.last) return 1;
    return 0;
  }};

  @media only screen and (min-width: ${props => props.theme.screenSizes.sm}) {
    margin-left: ${props => {
      if (!!props.smOffset) return 100*props.smOffset/12;
      if (!!props.xsOffset) return 100*props.xsOffset/12;
      return 0;
    }}%;
    flex-basis: ${props => {
      if (!!props.sm) return 100*props.sm/12;
      if (!!props.xs) return 100*props.xs/12;
      return 0;
    }}%;
    max-width: ${props => {
      if (!!props.sm) return 100*props.sm/12;
      if (!!props.xs) return 100*props.xs/12;
      return 100;
    }}%;
  }

  @media only screen and (min-width: ${props => props.theme.screenSizes.md}) {
    margin-left: ${props => {
      if (!!props.mdOffset) return 100*props.mdOffset/12;
      if (!!props.smOffset) return 100*props.smOffset/12;
      if (!!props.xsOffset) return 100*props.xsOffset/12;
      return 0;
    }}%;
    flex-basis: ${props => {
      if (!!props.md) return 100*props.md/12;
      if (!!props.sm) return 100*props.sm/12;
      if (!!props.xs) return 100*props.xs/12;
      return 0;
    }}%;
    max-width: ${props => {
      if (!!props.md) return 100*props.md/12;
      if (!!props.sm) return 100*props.sm/12;
      if (!!props.xs) return 100*props.xs/12;
      return 100;
    }}%;
  }

  @media only screen and (min-width: ${props => props.theme.screenSizes.lg}) {
    margin-left: ${props => {
      if (!!props.lgOffset) return 100*props.lgOffset/12;
      if (!!props.mdOffset) return 100*props.mdOffset/12;
      if (!!props.smOffset) return 100*props.smOffset/12;
      if (!!props.xsOffset) return 100*props.xsOffset/12;
      return 0;
    }}%;
    flex-basis: ${props => {
      if (!!props.lg) return 100*props.lg/12;
      if (!!props.md) return 100*props.md/12;
      if (!!props.sm) return 100*props.sm/12;
      if (!!props.xs) return 100*props.xs/12;
      return 0;
    }}%;
    max-width: ${props => {
      if (!!props.lg) return 100*props.lg/12;
      if (!!props.md) return 100*props.md/12;
      if (!!props.sm) return 100*props.sm/12;
      if (!!props.xs) return 100*props.xs/12;
      return 100;
    }}%;
  }
`
