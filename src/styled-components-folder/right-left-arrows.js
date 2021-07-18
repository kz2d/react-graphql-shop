import { Component } from "react";
import styled from "styled-components";
import  {ReactComponent as RightArrowSVG}  from "../assets/svg/right-arrow.svg";
import  {ReactComponent as LeftArrowSVG}  from "../assets/svg/left-arrow.svg";

export class RightArrow extends Component{
    render(){
        return (
            <RightArrowWrapper {...this.props}>
                <RightArrowSVG/>
            </RightArrowWrapper>
        )
    }
}


const RightArrowWrapper = styled.div`
  height: 24px;
  width: 24px;
  cursor: pointer;
  padding-top:6px;
  padding-right:9px;
  position:absolute;
  top:calc(50% - 12px);
  right:0;
  svg{
      float:right;
  }
`;

export class LeftArrow extends Component{
    render(){
        return (
            <LeftArrowWrapper {...this.props}>
                <LeftArrowSVG/>
            </LeftArrowWrapper>
        )
    }
}


const LeftArrowWrapper = styled.div`
  height: 24px;
  width: 24px;
  cursor: pointer;
  padding-top:6px;
  padding-left:9px;
  top:calc(50% - 12px);
  position:absolute;
`;
