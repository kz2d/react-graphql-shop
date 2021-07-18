import styled from "styled-components"

export const Price = styled.span`
    font-family: 'Raleway';
    font-size:  ${props=>props.bold?'24px':'18px'};
    font-style: normal;
    font-weight: ${props=>props.bold?700:500};
    line-height: 29px;
    letter-spacing: 0em;
`
