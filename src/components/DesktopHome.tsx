import { Avatar, Box, HStack, Heading, Show, Stack, Text, VStack } from "@chakra-ui/react"
import destinyAlt from '../assets/destiny-tint.png'
import { textPrimary } from "../App"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { Link } from "react-router-dom"
import { useState } from "react"
import Work from "../pages/Work"


interface Props {
    isMenuOpen: boolean,
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DesktopHome = ({ isMenuOpen, setIsMenuOpen }: Props) => {
    const [work, setWork] = useState(true);
    const [article, setArticle] = useState(false);
    const [linkedin, setLinkedin] = useState(false);

    return <>
        <Stack justifyContent='space-between' padding={{ base: '10px 5%', lg: '50px 5%' }} direction={{ base: 'column', md: 'row' }} height='100vh'>
            <VStack justifyContent='space-between' flex='1' >
                <Box>
                    <Heading width='100%' fontSize={{ base: '28px', lg: '48px' }} margin='15px 0' fontWeight='500'>Hello, I'm <br /> Destiny Ayomah.</Heading>

                    <Text width='90%' fontWeight='400' fontSize={{ base: '12px', lg: '16px' }} color={textPrimary} lineHeight='2'>
                        I'm a <Text display='inline' color='white'>Full Stack Software Engineer</Text>, close on more than <Text display='inline' color='white'>half a decade</Text> of experience. I've got over <Text display='inline' color='white'>100 websites</Text> live utilizing my <Text display='inline' color='white'>problem solving skills</Text> with <Text display='inline' color='white'>HTML, CSS, Javascript, Typescript, JQuery, React, MySQL, MongoDB, Express, NodeJs, NestJs, Php, Flutter and Dart!</Text>
                    </Text>
                </Box>

                <VStack color={textPrimary} alignItems='start' width='100%' spacing='20px' fontSize={{ base: '12px', lg: '16px' }}>
                    <Link
                        to='/'
                        onMouseEnter={() => setWork(true)}
                        onMouseLeave={() => setWork(false)}
                    >
                        <HStack spacing='30px' _hover={{ color: 'white' }}>
                            <Text>00</Text>
                            <Box
                                width={work ? '100px' : '70px'}
                                bg={work ? 'white' : textPrimary}
                                height='1px'
                                transition='width 0.3s ease-in-out'
                            ></Box>
                            <Text>WORK</Text>
                        </HStack>
                    </Link>

                    <Link
                        to="/"
                        onMouseEnter={() => setArticle(true)}
                        onMouseLeave={() => setArticle(false)}
                    >
                        <HStack spacing='30px' _hover={{ color: 'white' }}>
                            <Text>01</Text>
                            <Box
                                width={article ? '100px' : '70px'}
                                bg={article ? 'white' : textPrimary}
                                height='1px'
                                transition='width 0.3s ease-in-out'
                            ></Box>
                            <Text>ARTICLES</Text>
                        </HStack>
                    </Link>

                    <Link
                        to='https://www.linkedin.com/in/destiny-ayomah-822286197/'
                        onMouseEnter={() => setLinkedin(true)}
                        onMouseLeave={() => setLinkedin(false)}
                    >
                        <HStack spacing='30px' _hover={{ color: 'white' }}>
                            <Text>02</Text>
                            <Box
                                width={linkedin ? '100px' : '70px'}
                                bg={linkedin ? 'white' : textPrimary}
                                height='1px'
                                transition='width 0.3s ease-in-out'
                            ></Box>
                            <Text>LINKED IN</Text>
                        </HStack>
                    </Link>
                </VStack>

                <HStack justifyContent='start' width='100%' spacing='20px'>
                    <Avatar src={destinyAlt} size={{ base: 'sm', lg: 'lg' }} />

                    <Link to='https://github.com/destinyayomah'>
                        <HStack fontSize={{ base: '12px', lg: '16px' }}>
                            <FontAwesomeIcon icon={faGithub} color={textPrimary} />
                            <Text>GitHub</Text>
                        </HStack>
                    </Link>

                    <Link to='https://twitter.com/destiny_ayomah?t=HG7VzYclmnbvj5iYZz1qug&s=09'>
                        <HStack fontSize={{ base: '12px', lg: '16px' }}>
                            <FontAwesomeIcon icon={faTwitter} color={textPrimary} />
                            <Text>Twitter</Text>
                        </HStack>
                    </Link>

                    <Link to='mailto:lilsoftx@gmail.com'>
                        <HStack fontSize={{ base: '12px', lg: '16px' }}>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <Text>Email</Text>
                        </HStack>
                    </Link>
                </HStack>

                <Text color={textPrimary} width='100%' fontSize={{ base: '10px', lg: '13px' }}>
                    Inspired by
                    <Text color='white' display="inline">
                        <Link to='https://kadet.dev/'> Collins Enebeli</Link>
                    </Text>
                </Text>
            </VStack>

            <Show above="md">
                <Work isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            </Show>
        </Stack>
    </>
}

export default DesktopHome