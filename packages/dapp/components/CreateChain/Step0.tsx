import { Flex, Grid, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Step0: React.FC = () => (
  <VStack w="full" align="stretch" spacing={8}>
    <Flex w="full" justifyContent="left">
      <Text fontFamily="heading" color="main" fontSize={36} textAlign="left">
        Create and design your own course <br /> with our course creator tool.
      </Text>
    </Flex>
    <Grid
      w="full"
      templateColumns={{
        base: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
        xl: 'repeat(4, 1fr)',
      }}
      gap={10}
    >
      <Step
        image="/CreateChain/details.png"
        title="1. Enter details"
        description="Every quest chain needs to have a name and description. You can also add a background image for your new quest chain here."
      />
      <Step
        image="/CreateChain/nft.png"
        title="2. Define NFT"
        description="Create a custom 2D or 3D NFT or upload your own image. Players who complete the quest chain will become eligible to mint it!"
      />
      <Step
        image="/CreateChain/members.png"
        title="3. Assign members"
        description="Set up the role structure of the quest chain."
      />
      <Step
        image="/CreateChain/quest.png"
        title="4. Create quests"
        description="After setting up the quest chain it's time to add some quests to it."
      />
    </Grid>
  </VStack>
);

const Step = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <Flex flexDir="column" alignItems="center" p={6}>
      <Image src={image} alt={title} mb={6} w="80%" maxW="10rem" />
      <Text fontWeight="bold" fontFamily="heading" mt={3} fontSize="lg" mb={2}>
        {title}
      </Text>
      <Text
        marginBottom="auto"
        fontFamily="body"
        fontSize="sm"
        lineHeight={7}
        textAlign="center"
      >
        {description}
      </Text>
    </Flex>
  );
};

export default Step0;
