import { Flex, Icon, Text, useBreakpointValue } from "@chakra-ui/react";
import { FaCircle } from 'react-icons/fa'
import { ReactNode } from "react";

interface TravelTypesProps {
  children: ReactNode;
  title: string;
  isLastChild?: boolean;
}

export function TravelTypes({ title, children, isLastChild = false }: TravelTypesProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  if(!isWideVersion) {
    return (
      <Text 
        fontSize='lg'
        fontWeight='500'
        mb={isLastChild ? '0' : '27px'}
      > 
        <Icon as={FaCircle} fontSize='0.5rem' color='yellow.500' mr={2} />
        {title}
      </Text>
    )
  }

  return (
    <Flex direction='column' align='center'>
      {children}
      <Text 
        mt={6}
        fontSize='2xl'
        fontWeight='600'
      >
        {title}
      </Text>
    </Flex>
  )
}