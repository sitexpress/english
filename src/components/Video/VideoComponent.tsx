import ReactPlayer from "react-player/vimeo";
import { AspectRatio } from "@mantine/core";
import { theme } from "@/theme";
import { useMediaQuery } from "@mantine/hooks";

export function VideoComponent() {
    const options = {
        height: "auto",
        width: "100%",
        playerVars: {
            modestbranding: 1,
            showinfo: 0,
            rel: 0,
        },
    } as const;


    const xs = theme.breakpoints?.xs;
    const sm = theme.breakpoints?.sm;
    const md = theme.breakpoints?.md;
    const lg = theme.breakpoints?.lg;
    const xg = theme.breakpoints?.xg;
    const xl = theme.breakpoints?.xl;

    const matchesXs = useMediaQuery(`(min-width: ${xs})`);
    const matchesSm = useMediaQuery(`(min-width: ${sm})`);
    const matchesMd = useMediaQuery(`(min-width: ${md})`);
    const matchesLg = useMediaQuery(`(min-width: ${lg})`);
    const matchesXg = useMediaQuery(`(min-width: ${xg})`);
    const matchesXl = useMediaQuery(`(min-width: ${xl})`);

    const width = matchesXl
    ? "100%"
    : matchesXg
      ? "110%"
      : matchesLg
        ? "120%"
        : matchesMd
          ? "150%"
          : matchesSm
            ? "200%"
            : matchesXs
              ? "300%"
              : "390%"

    return (
        <AspectRatio ratio={16 / 9}>
            <ReactPlayer
                // ref={playerRef}
                style={{filter: "brightness(0.6)", }}
                width={width}
                url="https://player.vimeo.com/video/1050390623?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                // title="vessel-trimmed - Made with Clipchamp"
                muted
                onUnstarted
                playing
                height="100%"
                onPlaybackQualityChange={1080}
                loop
                start={180000}
                modestbranding
                opts={options}
            />
        </AspectRatio>
    );
}

