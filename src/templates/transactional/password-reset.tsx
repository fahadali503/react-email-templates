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

interface PasswordResetProps {
    userFirstname?: string;
    resetPasswordLink?: string;
}

export const PasswordReset = ({
    userFirstname = "there",
    resetPasswordLink = "https://example.com/reset",
}: PasswordResetProps) => (
    <Html>
        <Head />
        <Preview>Reset your password</Preview>
        <Body style={main}>
            <Container style={container}>
                <Section style={section}>
                    <Heading style={h1}>🔒 Password Reset</Heading>
                    <Text style={text}>Hi {userFirstname},</Text>
                    <Text style={text}>
                        Someone recently requested a password change for your account. If this was you, you can set a new password here:
                    </Text>
                    <Button style={button} href={resetPasswordLink}>
                        Reset Password
                    </Button>
                    <Text style={text}>
                        If you don't want to change your password or didn't request this, just ignore and delete this message.
                    </Text>
                    <Text style={text}>
                        This link will expire in 24 hours for security reasons.
                    </Text>
                    <Text style={text}>
                        Best regards,<br />
                        The Security Team
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
    backgroundColor: "#dc2626",
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

export default PasswordReset;