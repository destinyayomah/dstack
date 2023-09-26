import { Heading, Text, VStack } from '@chakra-ui/react'
import { bgSecondary } from '../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Blog = () => {
    return <>
        <VStack bg={bgSecondary} height='100vh' justifyContent='center'>
            <Heading color='white'>COMING SOON</Heading>
            <Link to='/'><Text color='white'><FontAwesomeIcon icon={faLongArrowAltLeft} /> Home</Text></Link>
        </VStack>
    </>
}

export default Blog