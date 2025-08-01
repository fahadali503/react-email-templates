import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Section,
    Text,
} from "@react-email/components";

interface AdvancedNewsletterProps {
    userFirstname?: string;
}

export const NewsletterAdvanced = ({
    userFirstname = "there",
}: AdvancedNewsletterProps) => (
    <Html>
        <Head />
        <Preview>Advanced newsletter with rich content</Preview>
        <Body style={main}>
            <Container style={container}>
                <Section style={header}>
                    <Heading style={h1}>🚀 Advanced Newsletter</Heading>
                </Section>

                <Section style={section}>
                    <Text style={text}>Hi {userFirstname},</Text>
                    <Text style={text}>
                        Check out our latest features and updates below.
                    </Text>

                    <Img
                        src="https://react-email-demo-7s5r0trkn-resend.vercel.app/static/vercel-team.png"
                        width="580"
                        height="250"
                        alt="Featured Image"
                        style={image}
                    />

                    <Text style={text}>
                        We've been working hard to bring you the best experience possible.
                    </Text>

                    <Button style={button} href="https://example.com">
                        Learn More
                    </Button>
                </Section>

                <Section style={footer}>
                    <Text style={footerText}>
                        Thanks for being part of our community!
                    </Text>
                </Section>
            </Container>
        </Body>
    </Html>
);

const main = {
    backgroundColor: "#ffffff",
    fontFamily: "Helvetica, Arial, sans-serif",
};

const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    maxWidth: "580px",
};

const header = {
    backgroundColor: "#f6f9fc",
    padding: "20px",
    textAlign: "center" as const,
};

const section = {
    padding: "24px",
    border: "solid 1px #dedede",
    borderRadius: "5px",
    textAlign: "center" as const,
    marginTop: "20px",
};

const footer = {
    backgroundColor: "#f6f9fc",
    padding: "20px",
    textAlign: "center" as const,
    marginTop: "20px",
};

const h1 = {
    color: "#333",
    fontSize: "24px",
    fontWeight: "bold",
    margin: "40px 0",
    padding: "0",
};

const text = {
    color: "#333",
    fontSize: "14px",
    lineHeight: "24px",
    margin: "16px 0",
};

const footerText = {
    color: "#666",
    fontSize: "12px",
    lineHeight: "16px",
};

const image = {
    borderRadius: "8px",
    margin: "20px 0",
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

export default NewsletterAdvanced;