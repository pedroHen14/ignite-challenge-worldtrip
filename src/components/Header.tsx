import { Center, Icon, Image, Link as ChakraLink, useBreakpointValue} from "@chakra-ui/react";
import Link from 'next/link'
import { FiChevronLeft } from "react-icons/fi";

interface HeaderProps {
  hasBackLink?: boolean;
}

export function Header({ hasBackLink = false }: HeaderProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Center 
      w='100%' 
      h={isWideVersion ? '100' : '50'} 
      maxW={1240} 
      mx='auto' 
      px={['4', '10']} 
      position='relative'
    >
      {hasBackLink && (
        <Link href='/'>
          <ChakraLink position='absolute' left={['16px', '40px']}>
            <Icon as={FiChevronLeft} fontSize={["1rem", "2rem"]}/>
          </ChakraLink>
        </Link>
      )}

      <Image 
        src='/images/logo.svg' 
        alt='World Trip'
        w={!isWideVersion && '81px'}
      />
    </Center>
  )
}