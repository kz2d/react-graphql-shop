import { ReactComponent as MinusBut } from "../../assets/svg/minus-button.svg";
import { Button } from "../../styled-components-folder/button";

const Minus = (props) => {
  return (
    <Button {...props}>
      <MinusBut />
    </Button>
  );
};

export default Minus;
