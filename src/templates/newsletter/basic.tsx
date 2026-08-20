import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Text,
} from "@react-email/components";

interface NewsletterEmailProps {
    userFirstname?: string;
}

export const NewsletterBasic = ({
    userFirstname = "there",
}: NewsletterEmailProps) => (
    <Html>
        <Head />
        <Preview>Our latest newsletter is here!</Preview>
        <Body style={main}>
            <Container style={container}>
                <Section style={section}>
                    <Heading style={h1}>📧 Newsletter</Heading>
                    <Text style={text}>Hi {userFirstname},</Text>
                    <Text style={text}>
                        Welcome to our latest newsletter! We have some exciting updates to share with you.
                    </Text>
                    <Text style={text}>
                        Thanks for reading!
                    </Text>
                </Section>
            </Container>
        </Body>
    </Html>
);

const main = {
    backgroundColor: "#ffffff",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    maxWidth: "580px",
};

const section = {
    padding: "24px",
    border: "solid 1px #dedede",
    borderRadius: "5px",
    textAlign: "center" as const,
};

const h1 = {
    color: "#333",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
    fontSize: "24px",
    fontWeight: "bold",
    margin: "40px 0",
    padding: "0",
};

const text = {
    color: "#333",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
    fontSize: "14px",
    lineHeight: "24px",
};

export default NewsletterBasic;