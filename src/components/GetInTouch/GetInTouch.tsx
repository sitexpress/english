import {
    Button,
    Container,
    Group,
    Overlay,
    Paper,
    rem,
    SimpleGrid,
    Text,
    Textarea,
    TextInput,
    Title,
} from "@mantine/core";
// import cover from "/images/hero/contact-form.jpg";
import { ContactIconsList } from "./ContactIcons";
import classes from "./GetInTouch.module.css";
import { useState } from "react";
import { useForm } from "@mantine/form";
import { IconCheck, IconX } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
import { sendMessage } from "../../../api/telegram";

type GetInTouchType = {
    targetRef?: any;
}
export const GetInTouch:React.FC<GetInTouchType> = ({targetRef}) => {
    const [submittedValues, setSubmittedValues] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);

    const xIcon = <IconX style={{ width: rem(20), height: rem(20) }} />;
    const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />;

    const form = useForm({
        mode: "controlled",
        initialValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
        validate: {
            name: (value) =>
                value.length < 2 ? "Please enter your name. It should contain at least 2 letters!" : null,
            email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email format!"),
            subject: (value) => (value.length < 3 ? "The title must be at least 3 letters long!" : null),
            message: (value) => (value.length < 6 ? "Please describe in a bit more detail..." : null),
        },
    });

    const handleSubmit = async (values: typeof form.values): Promise<void> => {
        try {
            setIsLoading(true);
            const date = new Date();
            setSubmittedValues(JSON.stringify(values, null, 2));
            const line1 = `From: /Get in touch contact form/`;
            const line2 = `------------------------------`;
            const line3 = `Date: ${date.getDate()}/${date.getMonth().toString().length < 2 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}/${date.getFullYear()}`;
            const line4 = `Time: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds().toString().length < 2 ? `0${date.getSeconds()}` : date.getSeconds()}`;
            const line5 = `------------------------------`;
            const line6 = `Name: ${values.name}`;
            const line7 = `Email": ${values.email}`;
            const line8 = `Subject: ${values.subject}`;
            const line9 = `Message: ${values.message}`;

            await sendMessage(line1, line2, line3, line4, line5, line6, line7, line8, line9);
            notifications.show({
                position: "top-center",
                title: (
                    <Title order={4} ta="center" c="green.8">
                        Success!
                    </Title>
                ),
                message: `Contact form sent successfully! We will call you back within 10 minutes if it is during business hours (9am-8pm ET) now!🌟`,
                withCloseButton: true,
                autoClose: 10000,
                color: "green",
                icon: checkIcon,
                loading: isLoading,
                radius: "xl",
                withBorder: true,
            });
        } catch (error) {
            // form.setFieldError("email", error as string);
            notifications.show({
                position: "top-center",
                title: "Something went wrong",
                message: `Please try checking your internet connection and submit the request again in a few minutes! 🌟`,
                withCloseButton: true,
                autoClose: 5000,
                color: "red",
                icon: xIcon,
                loading: isLoading,
                radius: "xl",
                withBorder: true,
            });
        } finally {
            setIsLoading(false);
            form.reset();
        }
    };

    return (
        <Container size="lg" pt="xl">
            <Title order={2} fw={900} fz={24} ta="center" mb="xs" ref={targetRef}>
                Contact form
            </Title>
            <Paper shadow="md" radius="lg">
                <div className={classes.wrapper}>
                    <div
                        className={classes.contacts}
                        style={{
                            backgroundImage: `url(${"/images/hero/contact-form.jpg"})`,
                            backgroundPosition: "center",
                        }}
                    >
                        <Text fz="lg" fw={700} className={classes.title} c="white">
                            Contact information
                        </Text>

                        <ContactIconsList />
                    </div>
                    <form className={classes.form} onSubmit={form.onSubmit(handleSubmit)}>
                        <Text fz="lg" fw={700} className={classes.title}>
                            Get in touch
                        </Text>

                        <div className={classes.fields}>
                            <SimpleGrid cols={{ base: 1, sm: 2 }}>
                                <TextInput
                                    label="Your name"
                                    placeholder="Name"
                                    key={form.key("name")}
                                    {...form.getInputProps("name")}
                                />
                                <TextInput
                                    label="Your email"
                                    placeholder="hello@mantine.dev"
                                    key={form.key("email")}
                                    {...form.getInputProps("email")}
                                />
                            </SimpleGrid>
                            <TextInput
                                mt="md"
                                label="Subject"
                                placeholder="Subject"
                                key={form.key("subject")}
                                {...form.getInputProps("subject")}
                            />
                            <Textarea
                                mt="md"
                                label="Your message"
                                placeholder="Please include all relevant information"
                                minRows={3}
                                key={form.key("message")}
                                {...form.getInputProps("message")}
                            />

                            <Group justify="flex-end" mt="md">
                                <Button
                                    loading={isLoading}
                                    type="submit"
                                    className={classes.control}
                                    variant="gradient"
                                    gradient={{ from: "#3F4AB7", to: "rgb(96, 109, 255)", deg: 64 }}
                                >
                                    Send
                                </Button>
                            </Group>
                        </div>
                    </form>
                </div>
            </Paper>
        </Container>
    );
}
