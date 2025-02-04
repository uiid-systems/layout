import { ax, ay } from "./alignments";
import { direction } from "./direction";
import { visibility } from "./visibility";

const properties = { ax, ay, direction };

export type StyleProps = {
  ax?: (typeof ax.values)[number];
  ay?: (typeof ay.values)[number];
  direction?: (typeof direction.values)[number];
  visibility?: (typeof visibility.values)[number];
};

export const responsiveProps = ({
  props,
  selector,
}: {
  props: StyleProps;
  selector: string;
}): string => {
  const styles: string[] = [];

  Object.entries(props).map(([prop, value]) => {
    if (!value) return null;

    styles.push(
      `${properties[prop as keyof typeof properties].property}: ${value};`
    );
  });

  return `${selector}{${styles.join(" ")}}`;
};
