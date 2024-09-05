import { StackProps, VStack } from '@chakra-ui/react';

export const Page: React.FC<StackProps> = ({ children, ...props }) => (
  <VStack w="100%" py={12} spacing={8} align="stretch" {...props}>
    {children}
  </VStack>
);
