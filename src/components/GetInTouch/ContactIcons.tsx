import { IconAt, IconMapPin, IconPhone, IconSun } from "@tabler/icons-react";
import { Box, Stack, Text } from "@mantine/core";
import classes from "./ContactIcons.module.css";

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<"div">, "title"> {
    icon: typeof IconSun;
    title: React.ReactNode;
    description: React.ReactNode;
}

function ContactIcon({ icon: Icon, title, description, ...others }: ContactIconProps) {
    return (
        <div className={classes.wrapper} {...others}>
            <Box mr="md">
                <Icon size={24} />
            </Box>

            <div>
                <Text size="xs" fw="500" className={classes.title}>
                    {title}
                </Text>
                <Text className={classes.description}  fw="500" >{description}</Text>
            </div>
        </div>
    );
}

const MOCKDATA = [
    { title: "Email", description: "ensysta.inc@gmail.com", icon: IconAt },
    { title: "Phone", description: "+1 (646) 413-9075", icon: IconPhone },
    { title: "We are based", description: "New York, USA", icon: IconMapPin },
    { title: "Working hours", description: "8 a.m. – 6 p.m.", icon: IconSun },
];

export function ContactIconsList() {
    const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />);
    return <Stack>{items}</Stack>;
}
