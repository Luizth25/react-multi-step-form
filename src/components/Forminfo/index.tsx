import { PropsWithChildren } from "react";
import * as s from "./styles";

type TFormInfo = {
  title: string;
  secondButton: boolean;
  nextButton: () => void;
  backButton?: () => void;
};

const FormInfo: React.FC<PropsWithChildren<TFormInfo>> = ({
  title,
  children,
  nextButton,
  secondButton,
  backButton,
}) => {
  return (
    <s.Container>
      <h2>{title}</h2>
      {children}
      <s.ButtonContainer>
        <s.Button onClick={nextButton}>Next</s.Button>
        {secondButton ? <s.Button onClick={backButton}>Back</s.Button> : null}
      </s.ButtonContainer>
    </s.Container>
  );
};

export default FormInfo;
