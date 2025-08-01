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

interface ProductAnnouncementProps {
    productName?: string;
    launchDate?: string;
}

export const ProductAnnouncement = ({
    productName = "Revolutionary New Feature",
    launchDate = "March 15, 2024"
}: ProductAnnouncementProps) => (
    <Html>
        <Head />
        <Preview>Exciting new product launch!</Preview>
        <Body style={main}>
            <Container style={container}>
                <Section style={header}>
                    <Heading style={h1}>🚀 New Product Launch</Heading>
                </Section>

                <Section style={section}>
                    <Img
                        src="https://react-email-demo-7s5r0trkn-resend.vercel.app/static/vercel-team.png"
                        width="580"
                        height="300"
                        alt="New Product"
                        style={image}
                    />

                    <Heading style={h2}>Introducing {productName}</Heading>

                    <Text style={text}>
                        We're thrilled to announce the launch of our newest product that will revolutionize the way you work.
                    </Text>

                    <Text style={text}>
                        Key features include:
                    </Text>

                    <Text style={bulletPoint}>✨ Advanced AI-powered automation</Text>
                    <Text style={bulletPoint}>⚡ Lightning-fast performance</Text>
                    <Text style={bulletPoint}>🔒 Enterprise-grade security</Text>
                    <Text style={bulletPoint}>📱 Mobile-first design</Text>

                    <Button style={button} href="https://example.com/product">
                        Learn More
                    </Button>

                    <Text style={text}>
                        Limited time offer: Get 30% off for the first month!
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
    backgroundColor: "#667eea",
    color: "#ffffff",
    padding: "20px",
    textAlign: "center" as const,
};

const section = {
    padding: "24px",
    textAlign: "center" as const,
};

const h1 = {
    color: "#ffffff",
    fontSize: "28px",
    fontWeight: "bold",
    margin: "0",
    padding: "0",
};

const h2 = {
    color: "#333",
    fontSize: "22px",
    fontWeight: "bold",
    margin: "20px 0",
    padding: "0",
};

const text = {
    color: "#333",
    fontSize: "16px",
    lineHeight: "24px",
    margin: "16px 0",
};

const bulletPoint = {
    color: "#333",
    fontSize: "14px",
    lineHeight: "20px",
    margin: "8px 0",
    textAlign: "left" as const,
};

const image = {
    borderRadius: "8px",
    margin: "20px 0",
};

const button = {
    backgroundColor: "#667eea",
    borderRadius: "6px",
    color: "#fff",
    fontFamily: "Helvetica, Arial, sans-serif",
    fontSize: "16px",
    fontWeight: "bold",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    width: "200px",
    padding: "16px 0",
    margin: "30px auto",
};

export default ProductAnnouncement;