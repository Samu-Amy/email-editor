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
        <Container className="shadow-md rounded-md">
            <Section className="m-4">
                <Heading className="font-bold text-lg">Test email</Heading>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, maiores!</Text>
            </Section>
            <Row>
                <Column>
                    <Text>A</Text>
                </Column>
                <Column>
                    <Text>B</Text>
                </Column>
                <Column>
                    <Text>C</Text>
                </Column>
            </Row>
        </Container>
    );
}