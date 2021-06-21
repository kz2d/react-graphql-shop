import styled from 'styled-components'
import { ReactComponent as MinusBut } from '../../assets/svg/minus-button.svg'
import {Button} from '../../styled-components-folder/Button'

const Minus = (props) => {
    return (
        <Button {...props} ><MinusBut/></Button>
    );
}


export default Minus;