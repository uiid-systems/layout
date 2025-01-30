import { cx } from "@/ui/cva";

import {
  Box,
  type BoxProps,
  Group,
  Stack,
  Layer,
  WrapperConditional,
  WrapperSwitch,
} from "layout";

const condition = true;

export default function Home() {
  return (
    <main className="flex gap-12 min-h-screen items-center justify-center">
      <Placeholder />

      <Group gap="small">
        <PlaceholderGroup />
      </Group>

      <Stack gap="small">
        <PlaceholderGroup />
      </Stack>

      {/** @todo support single child fragment */}
      <Layer offset={{ x: 20, y: 20 }}>
        <Placeholder />
        <Placeholder render={<h1 />} className="bg-[tomato]" />
        <Placeholder render={() => <h2 className="bg-[mediumseagreen]" />} />
      </Layer>

      <WrapperConditional condition={condition} wrapper={<Placeholder />} />

      <WrapperSwitch
        condition={condition}
        wrappers={{
          true: <Placeholder className="bg-[mediumseagreen]" />,
          false: <Placeholder className="bg-[tomato]" />,
        }}
      />
    </main>
  );
}

const PlaceholderGroup = () => (
  <>
    <Placeholder />
    <Placeholder render={<h1 />} className="bg-[tomato]" />
    <Placeholder render={() => <h2 className="bg-[mediumseagreen]" />} />
  </>
);

const Placeholder = ({ className, ...props }: BoxProps) => (
  <Box className={cx("bg-[gold] size-16", className)} {...props} />
);
