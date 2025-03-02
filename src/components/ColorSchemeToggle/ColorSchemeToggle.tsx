import { useMantineColorScheme } from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons-react";

export function ColorSchemeToggle() {
    const { colorScheme, setColorScheme } = useMantineColorScheme();

    return colorScheme === "light" ? (
        <IconSun onClick={() => setColorScheme("dark")} cursor="pointer" color="white">
            Light
        </IconSun>
    ) : (
        <IconMoonStars onClick={() => setColorScheme("light")} cursor="pointer" color="white">
            Dark
        </IconMoonStars>
    );
}
