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

interface MaintenanceProps {
    maintenanceDate?: string;
    maintenanceDuration?: string;
}

export const SystemMaintenance = ({
    maintenanceDate = "Sunday, January 15, 2024 at 2:00 AM EST",
    maintenanceDuration = "2 hours",
}: MaintenanceProps) => (
    <Html>
        <Head />
        <Preview>Scheduled system maintenance notification</Preview>
        <Body style={main}>
            <Container style={container}>
                <Section style={section}>
                    <Heading style={h1}>🔧 Scheduled Maintenance</Heading>
                    <Text style={text}>
                        We wanted to let you know about upcoming scheduled maintenance for our platform.
                    </Text>

                    <Section style={noticeBox}>
                        <Text style={noticeText}>
                            <strong>When:</strong> {maintenanceDate}
                        </Text>
                        <Text style={noticeText}>
                            <strong>Duration:</strong> Approximately {maintenanceDuration}
                        </Text>
                        <Text style={noticeText}>
                            <strong>Impact:</strong> The platform will be temporarily unavailable
                        </Text>
                    </Section>

                    <Text style={text}>
                        During this time, we'll be upgrading our infrastructure to improve performance and reliability.
                    </Text>

                    <Text style={text}>
                        We apologize for any inconvenience this may cause and appreciate your patience.
                    </Text>

                    <Text style={text}>
                        If you have any questions, please don't hesitate to contact our support team.
                    </Text>

                    <Text style={text}>
                        Thank you,<br />
                        The Engineering Team
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
};

const noticeBox = {
    backgroundColor: "#fff3cd",
    border: "1px solid #ffeaa7",
    borderRadius: "4px",
    padding: "16px",
    margin: "20px 0",
};

const h1 = {
    color: "#333",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
    fontSize: "24px",
    fontWeight: "bold",
    margin: "40px 0",
    padding: "0",
    textAlign: "center" as const,
};

const text = {
    color: "#333",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
    fontSize: "14px",
    lineHeight: "24px",
    margin: "16px 0",
};

const noticeText = {
    color: "#856404",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
    fontSize: "14px",
    lineHeight: "20px",
    margin: "4px 0",
};

export default SystemMaintenance;