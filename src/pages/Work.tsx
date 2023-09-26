import { Box, HStack, Show, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import { bgPrimary, textPrimary } from "../App"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons/faCodeBranch"
import MobileMenu from "../components/MobileMenu"

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
        <Box padding='15px 5%'>
            <Show below="md">
                <HStack>
                    <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                </HStack>
            </Show>

            <VStack flex='1' marginTop='30px' color={textPrimary} alignItems='start' overflow='auto' css={hiddenScrollbar}>
                <Text fontWeight='700' fontSize={{base: '12px', md: '16px'}}>FEATURED</Text>

                <VStack marginTop='20px' gap='20px' width='100%'>
                    <VStack spacing='20px' bg={bgPrimary} padding='30px 30px' borderRadius='10px' width='100%'>
                        <Box width='100%'>
                            <Text color='white' width='100%' fontWeight='600' fontSize='30px'>Lensture</Text>
                            <Text color='#BEBEBE' width='100%'>REACTJS + TYPESCRIPT + CHAKRA-UI</Text>
                        </Box>
                        
                        <Text width='100%'>A dynamic photo library that allows authenticated users to perform sorting of the gallary.</Text>

                        <HStack width='100%'>
                            <FontAwesomeIcon color="#BEBEBE" icon={faEye} />
                            <Text color='#BEBEBE'>Live</Text>
                        </HStack>
                    </VStack>

                    <VStack spacing='20px' bg={bgPrimary} padding='30px 30px' borderRadius='10px' width='100%'>
                        <Box width='100%'>
                            <Text color='white' width='100%' fontWeight='600' fontSize='30px'>GAME HUB</Text>
                            <Text color='#BEBEBE' width='100%'>REACTJS + TYPESCRIPT + CHAKRA-UI</Text>
                        </Box>
                        <Text width='100%'>A video game discovery platform for game lovers.</Text>

                        <HStack width='100%'>
                            <HStack>
                                <FontAwesomeIcon color="#BEBEBE" icon={faEye} />
                                <Text color='#BEBEBE'>Live</Text>
                            </HStack>

                            <HStack>
                                <FontAwesomeIcon color="#BEBEBE" icon={faCodeBranch} />
                                <Text color='#BEBEBE'>Code</Text>
                            </HStack>
                        </HStack>
                    </VStack>
                </VStack>

                <Text fontWeight='700' marginTop='50px'>OTHERS</Text>

                <SimpleGrid columns={{ base: 2 }} spacing='10px'>
                    <VStack spacing='20px' bg={bgPrimary} padding='30px 30px' borderRadius='10px'>
                        <Box width='100%'>
                            <Text color='white' width='100%' fontWeight='600' fontSize='30px'>GAME HUB</Text>
                            <Text color='#BEBEBE' width='100%'>REACTJS + TYPESCRIPT + CHAKRA-UI</Text>
                        </Box>
                        <Text width='100%' margin='20px 0'>A video game discovery platform for game lovers.</Text>

                        <HStack width='100%' spacing='30px'>
                            <HStack>
                                <FontAwesomeIcon color="#BEBEBE" icon={faEye} />
                                <Text color='#BEBEBE'>Live</Text>
                            </HStack>

                            <HStack>
                                <FontAwesomeIcon color="#BEBEBE" icon={faCodeBranch} />
                                <Text color='#BEBEBE'>Code</Text>
                            </HStack>
                        </HStack>
                    </VStack>

                    <VStack spacing='20px' bg={bgPrimary} padding='30px 30px' borderRadius='10px'>
                        <Box width='100%'>
                            <Text color='white' width='100%' fontWeight='600' fontSize='30px'>GAME HUB</Text>
                            <Text color='#BEBEBE' width='100%'>REACTJS + TYPESCRIPT + CHAKRA-UI</Text>
                        </Box>
                        <Text width='100%' margin='20px 0'>A video game discovery platform for game lovers.</Text>

                        <HStack width='100%' spacing='30px'>
                            <HStack>
                                <FontAwesomeIcon color="#BEBEBE" icon={faEye} />
                                <Text color='#BEBEBE'>Live</Text>
                            </HStack>

                            <HStack>
                                <FontAwesomeIcon color="#BEBEBE" icon={faCodeBranch} />
                                <Text color='#BEBEBE'>Code</Text>
                            </HStack>
                        </HStack>
                    </VStack>

                    <VStack spacing='20px' bg={bgPrimary} padding='30px 30px' borderRadius='10px'>
                        <Box width='100%'>
                            <Text color='white' width='100%' fontWeight='600' fontSize='30px'>GAME HUB</Text>
                            <Text color='#BEBEBE' width='100%'>REACTJS + TYPESCRIPT + CHAKRA-UI</Text>
                        </Box>
                        <Text width='100%' margin='20px 0'>A video game discovery platform for game lovers.</Text>

                        <HStack width='100%' spacing='30px'>
                            <HStack>
                                <FontAwesomeIcon color="#BEBEBE" icon={faEye} />
                                <Text color='#BEBEBE'>Live</Text>
                            </HStack>

                            <HStack>
                                <FontAwesomeIcon color="#BEBEBE" icon={faCodeBranch} />
                                <Text color='#BEBEBE'>Code</Text>
                            </HStack>
                        </HStack>
                    </VStack>

                    <VStack spacing='20px' bg={bgPrimary} padding='30px 30px' borderRadius='10px'>
                        <Box width='100%'>
                            <Text color='white' width='100%' fontWeight='600' fontSize='30px'>GAME HUB</Text>
                            <Text color='#BEBEBE' width='100%'>REACTJS + TYPESCRIPT + CHAKRA-UI</Text>
                        </Box>
                        <Text width='100%' margin='20px 0'>A video game discovery platform for game lovers.</Text>

                        <HStack width='100%' spacing='30px'>
                            <HStack>
                                <FontAwesomeIcon color="#BEBEBE" icon={faEye} />
                                <Text color='#BEBEBE'>Live</Text>
                            </HStack>

                            <HStack>
                                <FontAwesomeIcon color="#BEBEBE" icon={faCodeBranch} />
                                <Text color='#BEBEBE'>Code</Text>
                            </HStack>
                        </HStack>
                    </VStack>

                    <VStack spacing='20px' bg={bgPrimary} padding='30px 30px' borderRadius='10px'>
                        <Box width='100%'>
                            <Text color='white' width='100%' fontWeight='600' fontSize='30px'>GAME HUB</Text>
                            <Text color='#BEBEBE' width='100%'>REACTJS + TYPESCRIPT + CHAKRA-UI</Text>
                        </Box>
                        <Text width='100%' margin='20px 0'>A video game discovery platform for game lovers.</Text>

                        <HStack width='100%' spacing='30px'>
                            <HStack>
                                <FontAwesomeIcon color="#BEBEBE" icon={faEye} />
                                <Text color='#BEBEBE'>Live</Text>
                            </HStack>

                            <HStack>
                                <FontAwesomeIcon color="#BEBEBE" icon={faCodeBranch} />
                                <Text color='#BEBEBE'>Code</Text>
                            </HStack>
                        </HStack>
                    </VStack>

                    <VStack spacing='20px' bg={bgPrimary} padding='30px 30px' borderRadius='10px'>
                        <Box width='100%'>
                            <Text color='white' width='100%' fontWeight='600' fontSize='30px'>GAME HUB</Text>
                            <Text color='#BEBEBE' width='100%'>REACTJS + TYPESCRIPT + CHAKRA-UI</Text>
                        </Box>
                        <Text width='100%' margin='20px 0'>A video game discovery platform for game lovers.</Text>

                        <HStack width='100%' spacing='30px'>
                            <HStack>
                                <FontAwesomeIcon color="#BEBEBE" icon={faEye} />
                                <Text color='#BEBEBE'>Live</Text>
                            </HStack>

                            <HStack>
                                <FontAwesomeIcon color="#BEBEBE" icon={faCodeBranch} />
                                <Text color='#BEBEBE'>Code</Text>
                            </HStack>
                        </HStack>
                    </VStack>
                </SimpleGrid>
            </VStack>
        </Box>
    </>
}

export default Work