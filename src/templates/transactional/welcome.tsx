import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Text,
} from "@react-email/components";

interface WelcomeEmailProps {
    userFirstname?: string;
}

export const WelcomeEmail = ({
    userFirstname = "there",
}: WelcomeEmailProps) => (
    <Html>
        <Head />
        <Preview>Welcome to our platform!</Preview>
        <Body style={main}>
            <Container style={container}>
                <Section style={section}>
                    <Heading style={h1}>🎉 Welcome!</Heading>
                    <Text style={text}>Hi {userFirstname},</Text>
                    <Text style={text}>
                        Welcome to our platform! We're excited to have you on board.
                    </Text>
                    <Text style={text}>
                        To get started, please verify your email address by clicking the button below:
                    </Text>
                    <Button style={button} href="https://example.com/verify">
                        Verify Email Address
                    </Button>
                    <Text style={text}>
                        If you have any questions, feel free to reach out to our support team.
                    </Text>
                    <Text style={text}>
                        Best regards,<br />
                        The Team
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
    margin: "16px 0",
};

const button = {
    backgroundColor: "#007ee6",
    borderRadius: "4px",
    color: "#fff",
    fontFamily: "Helvetica, Arial, sans-serif",
    fontSize: "15px",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    width: "200px",
    padding: "14px 7px",
    margin: "20px auto",
};

export default WelcomeEmail;