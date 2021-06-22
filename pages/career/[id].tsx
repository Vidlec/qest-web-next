import React from 'react'
import { useRouter } from 'next/router'
import Paragraph from 'components/Paragraph'
import theme from 'theme'
import Container from 'components/Container'
import Col from 'components/Col'
import Row from 'components/Row'
import Headline from 'components/Headline'
import { useTranslation } from 'react-i18next'

const CareerDetail: React.FC = () => {
    const router = useRouter()
    const { id } = router.query
    const { t } = useTranslation()

    return (
        <>
            <Container>
                <Headline color={theme.colors.green}>
                    {id}
                </Headline>
                <Paragraph
                    dangerouslySetInnerHTML={{
                        __html: 'Qest hledá hledá dobře vyzbrojeného C# Developera, který se nebojí rozvíjet znalosti a výzvám se staví s nadšením.',
                    }}
                />
                <Row>
                    <Col mobile={12} desktopSmall={7} desktop={8}>
                        <h2>S ČÍM A JAK <br/> KONKRÉTNĚ PRACUJEME?</h2>
                        <Paragraph
                            dangerouslySetInnerHTML={{
                                __html: 'ASP.NET Core (latest), C# (latest), <br/> SignalR/WebSockets, MongoDB, MS SQL, <br /> RabbitMQ, Redis, Docker, Kubernetes (Azure)',
                            }}
                        />
                        <h2>CO SE ČEKÁ OD TEBE?</h2>
                        <ul>
                            <li>že ti alespoň něco z výše zmíněného není cizí</li>
                            <li>že se zajímáš o nové technologie a chceš na sobě pracovat</li>
                            <li>že máš analytické myšlení a umíš zapojit i selský rozum</li>
                            <li>že se na tebe budeme moct spolehnout</li>
                            <li>že budeš součástí komunity a občas s námi něco podnikneš</li>
                        </ul>
                        <h2>ZAUJALI JSME TĚ?</h2>
                        <p>Tak pojď do toho! Napiš nám, jak bys chtěl přispět a začlenit se do Qestu.</p>
                        <a href="/contacts">napiš nám</a>
                    </Col>
                    <Col>
                        <h2>CO NABÍZÍME</h2>
                        <Paragraph
                            dangerouslySetInnerHTML={{
                                __html: '                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae deleniti doloribus dolorum eos expedita explicabo iusto, magnam, magni minima minus mollitia non possimus repellendus, sit temporibus veniam voluptas voluptatibus?',
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CareerDetail
