import {
  ActionIcon,
  Badge,
  Button,
  Center,
  Stack,
} from "@mantine/core";

export default function HomePage() {
  return (
    <Center h="100vh" w="100vw">
      <Stack align="center">
        <Button variant="my-button-variant">
          my-button-variant Button using css
        </Button>
        <Button variant="my-variant">my-variant Button</Button>
        <Badge variant="my-variant">my-variant Badge</Badge>
        <ActionIcon variant="my-variant">A</ActionIcon>
      </Stack>
    </Center>
  );
}
