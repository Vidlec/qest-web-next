import { Facebook, Instagram, Linkedin, Twitter } from '@styled-icons/boxicons-logos'
import Container from 'components/Container'
import { FooterQuery } from 'gql/generated/types'
import * as React from 'react'
import {
    ArticleWrapper,
    Column,
    Email,
    IconBox,
    Line,
    Tel,
    Text,
    TextTaxIdentification,
    Title,
    Wrapper,
} from './styled'

const Footer: React.FC<FooterQuery['footer']> = ({ title, contact, social }) => {
    if (!contact || !social) return null

    return (
        <Wrapper>
            <Line />
            <Container>
                <Title>{title}</Title>
                <ArticleWrapper>
                    <Column>
                        <Email href={'mailto:' + contact.email}>{contact.email}</Email>
                        <Tel href={'tel:' + contact.phoneNumber}>{contact.phoneNumber}</Tel>
                        <IconBox>
                            <a href={social.facebook} target="_blank" rel="noreferrer">
                                <Facebook />
                            </a>
                            <a href={social.twitter} target="_blank" rel="noreferrer">
                                <Twitter />
                            </a>
                            <a href={social.instagram} target="_blank" rel="noreferrer">
                                <Instagram />
                            </a>
                            <a href={social.linkedIn} target="_blank" rel="noreferrer">
                                <Linkedin />
                            </a>
                        </IconBox>
                    </Column>

                    <Column>
                        <Text>{contact.address}</Text>
                    </Column>

                    <Column>
                        <Text> {contact.ico}</Text>
                        <Text> {contact.dic}</Text>
                        <TextTaxIdentification>{contact.legal}</TextTaxIdentification>
                    </Column>
                </ArticleWrapper>
            </Container>
        </Wrapper>
    )
}

export default Footer
