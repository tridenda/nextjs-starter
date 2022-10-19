import styles from "./base-template.module.css";

export type BaseTemplateProps = {
  sampleTextProp: string;
};

const Base: React.FC<BaseTemplateProps> = ({ sampleTextProp }) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default Base;
