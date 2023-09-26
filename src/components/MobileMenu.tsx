import { HStack, Text, VStack } from "@chakra-ui/react"
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes"
import { bgSecondary, textPrimary } from "../App"
import { Link } from "react-router-dom"
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub"
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope"

interface Props {
    isMenuOpen: boolean,
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }: Props) => {


    const openMenu = () => setIsMenuOpen(true);
    const closeMenu = () => setIsMenuOpen(false);

    const toggleMenu = () => {
        if (isMenuOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    return <>
        <HStack justifyContent='space-between' width='100%'>
            <Text fontSize='24px' color='white' fontWeight='600'>Dstack.</Text>
            <FontAwesomeIcon fontSize='24px' color="white" icon={isMenuOpen ? faTimes : faBars} onClick={toggleMenu} />
        </HStack>

        {isMenuOpen &&
            <VStack
                position='absolute'
                fontSize='20px'
                top='55px'
                zIndex='2'
                bg={bgSecondary}
                width='100%'
                height='100%'
                color={textPrimary}
                spacing='30px'
                padding='30px'
            >
                <Link to='/'>
                    <Text _hover={{ color: 'white' }}>Home</Text>
                </Link>

                <Link to='/work'>
                    <Text _hover={{ color: 'white' }}>Work</Text>
                </Link>

                <Link to='/blog'>
                    <Text _hover={{ color: 'white' }}>Blog</Text>
                </Link>

                <Link to='https://www.linkedin.com/in/destiny-ayomah-822286197/'>
                    <Text _hover={{ color: 'white' }}>LinkedIn</Text>
                </Link>

                <Text color='white' fontWeight='600'>Connect With Me</Text>

                <HStack width='100%' spacing='20px' justifyContent='center'>
                    <Link to='https://github.com/destinyayomah'>
                        <HStack fontSize='20px'>
                            <FontAwesomeIcon icon={faGithub} color='white' />
                        </HStack>
                    </Link>

                    <Link to='https://twitter.com/destiny_ayomah?t=HG7VzYclmnbvj5iYZz1qug&s=09'>
                        <HStack fontSize='20px'>
                            <FontAwesomeIcon icon={faXTwitter} color='white' />
                        </HStack>
                    </Link>

                    <Link to='mailto:lilsoftx@gmail.com'>
                        <HStack fontSize='20px'>
                            <FontAwesomeIcon icon={faEnvelope} color="white" />
                        </HStack>
                    </Link>
                </HStack>
            </VStack>}
    </>
}

export default MobileMenu