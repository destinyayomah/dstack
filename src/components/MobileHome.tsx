import { Avatar, Button, HStack, Heading, Text, VStack } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import destinyAlt from '../assets/destiny-tint.png'
import { bgSecondary, textPrimary } from "../App"
import { Link } from "react-router-dom"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import MobileMenu from "./MobileMenu"

interface Props {
    isMenuOpen: boolean,
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const MobileHome = ({ isMenuOpen, setIsMenuOpen }: Props) => {


    return <>
        <VStack padding='15px 5%' bg={bgSecondary}>
            <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

            <Avatar src={destinyAlt} size='xl' />

            <Heading width='100%' fontSize='24px' textAlign='center' margin='15px 0' fontWeight='500'>Hello, I'm <br /> Destiny Ayomah.</Heading>

            <Text fontWeight='400' maxWidth='500px' fontSize='11px' color={textPrimary} textAlign='center' lineHeight='1.8'>
                I'm a <Text display='inline' color='white'>Full Stack Software Engineer</Text>, close on more than <Text display='inline' color='white'>half a decade</Text> of experience. I've got over <Text display='inline' color='white'>100 websites</Text> live utilizing my <Text display='inline' color='white'>problem solving skills</Text> with <Text display='inline' color='white'>HTML, CSS, Javascript, Typescript, JQuery, React, MySQL, MongoDB, Express, NodeJs, NestJs, Php, Flutter and Dart!</Text>
            </Text>

            <Button
                fontSize='12px'
                padding='0 30px'
                borderRadius='3px'
                margin='20px 0'
            >
                My Work
            </Button>

            <HStack width='100%' spacing='20px' justifyContent='center'>
                <Link to='https://github.com/destinyayomah'>
                    <HStack fontSize='20px'>
                        <FontAwesomeIcon icon={faGithub} color='white' />
                    </HStack>
                </Link>

                <Link to='https://twitter.com/destiny_ayomah?t=HG7VzYclmnbvj5iYZz1qug&s=09'>
                    <HStack fontSize='20px'>
                        <FontAwesomeIcon icon={faTwitter} color='white' />
                    </HStack>
                </Link>

                <Link to='mailto:lilsoftx@gmail.com'>
                    <HStack fontSize='20px'>
                        <FontAwesomeIcon icon={faEnvelope} color="white" />
                    </HStack>
                </Link>
            </HStack>

            <Text color={textPrimary} width='100%' marginTop='10px' fontSize='11px' textAlign='center'>
                Inspired by
                <Text color='white' display="inline">
                    <Link to='https://kadet.dev/'> Collins Enebeli</Link>
                </Text>
            </Text>
        </VStack>
    </>
}
