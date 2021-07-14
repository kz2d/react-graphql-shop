import { ReactComponent as PlusBut } from "../../assets/svg/plus-button.svg";
import { Button } from "../../styled-components-folder/button";

const Plus = (props) => {
  return (
    <Button {...props}>
      <PlusBut />
    </Button>
  );
};

export default Plus;
