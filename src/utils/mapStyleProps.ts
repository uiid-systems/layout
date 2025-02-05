import * as properties from "../properties";

export type StyleProps = {
  [K in keyof typeof properties]?: (typeof properties)[K]["values"][number];
};

export const mapStyleProps = (props: StyleProps): React.CSSProperties => {
  let styles: React.CSSProperties = {};

  Object.entries(props).map(([prop, value]) => {
    if (!value) return null;
    const property = prop as keyof typeof properties;
    styles = { ...styles, ...{ [properties[property]?.property]: value } };
  });

  return styles;
};
