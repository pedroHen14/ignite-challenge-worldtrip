import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"
import ReactCountryFlag from 'react-country-flag'

interface CardProps {
  name: string;
  countryName: string;
  image: string;
  countryCode: string;
}

export function Card({ name, countryName, image, countryCode }: CardProps) {
  return (
    <Box w='256px' mx={['auto', '0']}>
      <Image borderTopRadius='4' src={image} alt='Londres' w='100%' h='173' objectFit='cover'/>
      <Flex 
        justify='space-between' 
        align='center' 
        p={6} 
        border='1px' 
        borderColor='yellow.100'
        borderTop='0'
        borderBottomRadius='4'
      >
        <Flex direction='column'>
          <Heading as='h3' fontSize='xl' fontWeight='600' mb={3}>{name}</Heading>
          <Text color='gray.500' fontSize='md' fontWeight='500'>{countryName}</Text>
        </Flex>

        <ReactCountryFlag
          style={{
            fontSize: '2em',
            lineHeight: '2em',
            borderRadius: '50%',
            objectFit: 'cover'
          }}
          aria-label={countryName}
          countryCode={countryCode}
          svg 
        />
      </Flex>
    </Box>
  )
}