import { cx } from "@/ui/cva";

import { Box, type BoxProps } from "@/ui/layout/box";
import { WrapperConditional } from "@/ui/layout/wrapper-conditional";
import { WrapperSwitch } from "@/ui/layout/wrapper-switch";
import { Group } from "@/ui/layout/group";
import { Stack } from "@/ui/layout/stack";
import { Layer } from "@/ui/layout/layer";

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
        <Placeholder render={<h1 />} className="bg-primary" />
        <Placeholder render={() => <h2 className="bg-tertiary" />} />
      </Layer>

      <WrapperConditional condition={condition} wrapper={<Placeholder />} />

      <WrapperSwitch
        condition={condition}
        wrappers={{
          true: <Placeholder className="bg-tertiary" />,
          false: <Placeholder className="bg-primary" />,
        }}
      />
    </main>
  );
}

const PlaceholderGroup = () => (
  <>
    <Placeholder />
    <Placeholder render={<h1 />} className="bg-primary" />
    <Placeholder render={() => <h2 className="bg-tertiary" />} />
  </>
);

const Placeholder = ({ className, ...props }: BoxProps) => (
  <Box className={cx("bg-secondary size-16", className)} {...props} />
);
