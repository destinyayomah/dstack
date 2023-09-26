import { Hide, Show } from "@chakra-ui/react"
import { MobileHome } from "../components/MobileHome"
import DesktopHome from "../components/DesktopHome"

interface Props {
    isMenuOpen: boolean,
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Home = ({ isMenuOpen, setIsMenuOpen }: Props) => {
    return <>
        <Hide above="md">
            <MobileHome isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </Hide>

        <Show above="md">
            <DesktopHome isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </Show>
    </>
}

export default Home