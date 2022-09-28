import { Box, Center, Divider, Flex, Heading, Image, Text, useBreakpointValue } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Slide } from "../components/Slide";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Box>
      <Header />
      
      <Box
        bgImage='url("/images/background.png")'
        bgPosition='center'
        bgRepeat='no-repeat'
        bgSize='cover'
        height={isWideVersion ? '335' : '163'}
      >
        <Flex
          maxW='1240'
          h='100%'
          mx='auto'
          px={['4', '10']}
          direction='column' 
          align='flex-start' 
          justify='center'
          pos='relative'
        >
          <Heading 
            as='h1'
            fontWeight='500'
            fontSize={['xl', '4xl']}
            color='gray.50'
            mb={['2', '5']}
          >
            6 Continentes, <Divider as='br' /> infinitas possibilidades.
          </Heading>
          <Text
            maxW='524'
            fontSize={['sm', 'xl']}
            color='gray.100'
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
          </Text>
          
          {isWideVersion && (
            <Image 
              pos='absolute'
              right='0'
              bottom='-35'
              src='/images/airplane.svg' 
              alt='Avião' 
            />
          )}
        </Flex>
      </Box>
    
      <Box
        maxW='1240'
        mx='auto'
        mt={['9', '24']}
        mb={['6', '10']}
      >
        <Flex 
          px={['12', '10']} 
          mb={['9', '20']} 
          justify='space-between' 
          wrap={isWideVersion ? 'nowrap' : 'wrap'}
        >
          <TravelTypes title='vida noturna'>
            <Image src='/images/icons/cocktail.svg' maxW='85' />
          </TravelTypes>

          <TravelTypes title='praia'>
            <Image src='/images/icons/surf.svg' maxW='85' />
          </TravelTypes>

          <TravelTypes title='moderno'>
            <Image src='/images/icons/building.svg' maxW='85' />
          </TravelTypes>

          <TravelTypes title='clássico'>
            <Image src='/images/icons/museum.svg' maxW='85' />
          </TravelTypes>

          <TravelTypes title='e mais...' isLastChild={true}>
            <Image src='/images/icons/earth.svg' maxW='85' />
          </TravelTypes>
        </Flex>
          
        <Center w='90px' mx='auto' borderTopWidth='2px' borderColor='gray.600'></Center>

        <Box>
          <Heading 
            py={['6', '14']}
            fontWeight='normal'
            fontSize={['xl', '4xl']}
            textAlign='center'
            lineHeight={['30px', '3.375rem']}
          >
            Vamos nessa? <Divider as='br' /> Então escolha seu continente
          </Heading>

          <Box
            w='100%'
            h={['250', '450']}
          >
            <Slide />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
