import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  flex-grow: 1;
  display: inline-block;
  box-sizing: border-box;
  color: ${props => props.theme.colors.text};
  padding: 5px 20px;
  margin-right: ${props => props.isMobile ? 0 : props.theme.margins.sm };
  margin-bottom: ${props => props.isMobile ? props.theme.margins.md : 0};
  height: 60px;
  border: 5px solid ${props => props.theme.colors.veryLightGrey};
  border-radius: ${props => props.theme.radius.md};
  font-size: ${props => props.theme.fontSizes.nm};
  outline: none;
  -webkit-outline: none;
  &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: ${props => props.theme.colors.lightGrey};
  }
  &::-moz-placeholder { /* Firefox 19+ */
    color: ${props => props.theme.colors.lightGrey};
  }
  &:-ms-input-placeholder { /* IE 10+ */
    color: ${props => props.theme.colors.lightGrey};
  }
  &:-moz-placeholder { /* Firefox 18- */
    color: ${props => props.theme.colors.lightGrey};
  }
  &:focus {
    border: 5px solid ${props => props.theme.colors.black};
  }
`;

export default StyledInput
