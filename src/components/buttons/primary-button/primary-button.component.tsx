import { ContainerButton } from "./primary-button.styles";

export type PrimaryButtonProps = {
  buttonText: string;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ buttonText }) => {
  return <ContainerButton>{buttonText}</ContainerButton>;
};

export default PrimaryButton;
