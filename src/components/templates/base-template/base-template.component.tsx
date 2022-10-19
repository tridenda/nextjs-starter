import { Container } from "./base-template.styles";

export type BaseTemplateProps = {
  sampleTextProp: string;
};

const Base: React.FC<BaseTemplateProps> = ({ sampleTextProp }) => {
  return <Container>{sampleTextProp}</Container>;
};

export default Base;
