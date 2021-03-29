import React from 'react'

// styled component
import { Container, Flex } from '../styles/globalStyles'
import { FooterNav, FooterContent, FooterSocial} from '../styles/footerStyles'
// icon
import {Instagram, Facebook, Vimeo } from "../assets/svg/social-icons"

const Footer = ({onCursor}) => {
    return (
        <FooterNav>
            <Container>
                <Flex spaceBetween>
                    <FooterContent>
                        <p>123-456-789</p>
                        <p>info@furrow.studio</p>
                    </FooterContent>
                    <FooterContent wider>
                        <p>Ho Chi Minh City</p>
                        <p>Van Lang University</p>
                    </FooterContent>
                    <FooterSocial>
                        <a 
                            onMouseEnter={() => onCursor('pointer')} 
                            onMouseLeave={onCursor}
                            href="/">
                            <Facebook />
                        </a>
                        <a 
                            onMouseEnter={() => onCursor('pointer')} 
                            onMouseLeave={onCursor}
                            href="https://www.instagram.com/hi991016/">
                            <Instagram />
                        </a>
                        <a 
                            onMouseEnter={() => onCursor('pointer')} 
                            onMouseLeave={onCursor}
                            href="/">
                            <Vimeo />
                        </a>
                    </FooterSocial>
                </Flex>
            </Container>
        </FooterNav>
    )
}

export default Footer
