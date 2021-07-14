import styled, { css } from "styled-components"
import { COLORS } from "../assets/Constants"

export const PrimaryButton=styled.a`
    cursor:pointer;
    min-width: 140px;
    min-height: 43px;
    border:1px solid ${COLORS.text};
    display:grid;
    place-items:center;
    ${props=>props.primary&&css`
    border:0px solid ${COLORS.background};
    background-color:${COLORS.primary};
    color:${COLORS.background};
    span{
        color:${COLORS.background};
    }
    `}
`