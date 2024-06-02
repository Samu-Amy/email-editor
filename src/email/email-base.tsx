import { Body, Column, Container, Head, Heading, Html, Row, Section, Tailwind, Text } from "@react-email/components";

// TODO: poi esporta la base
// TODO: cambia html con uno per le mail (guarda sul sito scritto su notion)
export const EmailBase = () => {
    return (
        <Html>
            <Head>Mail title</Head>
            <Tailwind>
                <Body>
                    <EmailContent />
                </Body>
            </Tailwind>
        </Html>
    );
}

// TODO: usa le proprietà dei componenti (margin, as, ecc.)

// Component for preview
export const EmailContent = () => {
    return (
        <Container className="shadow-md rounded-md p-4">
            <Section className="m-4">
                <Heading className="font-bold text-lg">Test email</Heading>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, maiores!</Text>
            </Section>
            <Row className="m-4">
                <Column className="text-center">
                    <Text>A</Text>
                </Column>
                <Column className="text-center">
                    <Text>B</Text>
                </Column>
                <Column className="text-center">
                    <Text>C</Text>
                </Column>
            </Row>
        </Container>
    );
}