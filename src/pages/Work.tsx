import { Box, HStack, Show, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import { bgPrimary, bgSecondary, textPrimary } from "../App"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons/faCodeBranch"
import MobileMenu from "../components/MobileMenu"
import { Link } from "react-router-dom"

interface Props {
    isMenuOpen: boolean,
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Work = ({ isMenuOpen, setIsMenuOpen }: Props) => {
    const hiddenScrollbar = {
        '&::-webkit-scrollbar': {
            width: '0.5em',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'transparent',
        }
    }

    return <>
        <Box padding='15px 5%' overflow='auto' css={hiddenScrollbar} bg={bgSecondary} minH='100vh'>
            <Show below="md">
                <HStack>
                    <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                </HStack>
            </Show>

            <VStack flex='1' marginTop='30px' color={textPrimary} alignItems='start'>

                <Text fontWeight='700' fontSize={{ base: '12px', md: '16px' }}>FEATURED</Text>

                <VStack marginTop='20px' gap='20px' width='100%'>
                    <VStack spacing='20px' bg={bgPrimary} padding='30px 30px' borderRadius='10px' width='100%'>
                        <Box width='100%'>
                            <Text color='white' width='100%' fontWeight='600' fontSize={{ base: '24px', lg: '30px' }}>Lensture</Text>
                            <Text color='#BEBEBE' width='100%' fontSize={{ base: '11px', lg: '16px' }}>REACTJS + TYPESCRIPT + CHAKRA-UI</Text>
                        </Box>

                        <Text width='100%' fontSize={{ base: '11px', lg: '16px' }}>A dynamic photo library that allows authenticated users to perform sorting of the gallary.</Text>

                        <HStack width='100%' spacing='20px'>
                            <Link to='https://hngx-frontend-stage3-lensture.vercel.app/'>
                                <HStack width='100%' fontSize={{ base: '16px', lg: '24px' }}>
                                    <FontAwesomeIcon color="#BEBEBE" icon={faEye} />
                                    <Text color='#BEBEBE'>Live</Text>
                                </HStack>
                            </Link>

                            <Link to='https://github.com/destinyayomah/hngx-frontend-stage3-lensture'>
                                <HStack fontSize={{ base: '16px', lg: '24px' }}>
                                    <FontAwesomeIcon color="#BEBEBE" icon={faCodeBranch} />
                                    <Text color='#BEBEBE'>Code</Text>
                                </HStack>
                            </Link>
                        </HStack>
                    </VStack>

                    <VStack spacing='20px' bg={bgPrimary} padding='30px 30px' borderRadius='10px' width='100%'>
                        <Box width='100%'>
                            <Text color='white' width='100%' fontWeight='600' fontSize={{ base: '24px', lg: '30px' }}>Game Hub</Text>
                            <Text color='#BEBEBE' width='100%' fontSize={{ base: '11px', lg: '16px' }}>REACTJS + TYPESCRIPT + CHAKRA-UI</Text>
                        </Box>

                        <Text width='100%' fontSize={{ base: '11px', lg: '16px' }}>A video game discovery platform for game lovers.</Text>

                        <HStack width='100%' spacing='20px'>
                            <Link to='https://dksgamehub.vercel.app/'>
                                <HStack fontSize={{ base: '16px', lg: '24px' }}>
                                    <FontAwesomeIcon color="#BEBEBE" icon={faEye} />
                                    <Text color='#BEBEBE'>Live</Text>
                                </HStack>
                            </Link>

                            <Link to="https://github.com/destinyayomah/dksgamehub">
                                <HStack fontSize={{ base: '16px', lg: '24px' }}>
                                    <FontAwesomeIcon color="#BEBEBE" icon={faCodeBranch} />
                                    <Text color='#BEBEBE'>Code</Text>
                                </HStack>
                            </Link>
                        </HStack>
                    </VStack>
                </VStack>

                <Text fontWeight='700' marginTop='50px' fontSize={{ base: '12px', md: '16px' }}>OTHERS</Text>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing='10px'>
                    <VStack spacing='20px' bg={bgPrimary} padding='30px 30px' borderRadius='10px' width='100%'>
                        <Box width='100%'>
                            <Text color='white' width='100%' fontWeight='600' fontSize={{ base: '24px', lg: '30px' }}>Movie Box</Text>
                            <Text color='#BEBEBE' width='100%' fontSize={{ base: '11px', lg: '16px' }}>REACTJS + TYPESCRIPT + CHAKRA-UI</Text>
                        </Box>

                        <Text width='100%' fontSize={{ base: '11px', lg: '16px' }}>A movie discovery platform</Text>

                        <HStack width='100%' spacing='20px'>
                            <Link to='https://hng-frontend-stage2-lict.vercel.app/'>
                                <HStack fontSize={{ base: '16px', lg: '24px' }}>
                                    <FontAwesomeIcon color="#BEBEBE" icon={faEye} />
                                    <Text color='#BEBEBE'>Live</Text>
                                </HStack>
                            </Link>

                            <Link to='https://github.com/destinyayomah/hng-frontend-stage2'>
                                <HStack fontSize={{ base: '16px', lg: '24px' }}>
                                    <FontAwesomeIcon color="#BEBEBE" icon={faCodeBranch} />
                                    <Text color='#BEBEBE'>Code</Text>
                                </HStack>
                            </Link>
                        </HStack>
                    </VStack>
                </SimpleGrid>
            </VStack>
        </Box>
    </>
}

export default Work