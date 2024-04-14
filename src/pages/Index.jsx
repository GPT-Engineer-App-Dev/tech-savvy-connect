import { Box, Button, Container, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { FaCode, FaSearch, FaHandshake } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="gray.50">
      {/* Hero */}
      <Box bg="purple.600" color="white" py={24}>
        <Container maxW="container.lg">
          <Heading as="h1" size="3xl" mb={4}>
            Find World-Class Developer Talent
          </Heading>
          <Text fontSize="xl" mb={8}>
            Particles connects companies with an elite network of vetted web developers and software engineers. Hire with confidence.
          </Text>
          <Button size="lg" colorScheme="orange">
            View Developer Listings
          </Button>
        </Container>
      </Box>

      {/* Features */}
      <Container maxW="container.lg" py={28}>
        <Heading textAlign="center" size="xl" mb={16}>
          How Particles Works
        </Heading>
        <Flex gap={12}>
          <Stack align="center" textAlign="center">
            <FaSearch size={48} color="#805AD5" />
            <Heading size="lg">Search</Heading>
            <Text>Easily search our curated network of top developers by skills, experience, location and more.</Text>
          </Stack>
          <Stack align="center" textAlign="center">
            <FaCode size={48} color="#805AD5" />
            <Heading size="lg">Evaluate</Heading>
            <Text>Review detailed developer profiles, work samples, and client ratings to find the perfect match.</Text>
          </Stack>
          <Stack align="center" textAlign="center">
            <FaHandshake size={48} color="#805AD5" />
            <Heading size="lg">Hire</Heading>
            <Text>Interview candidates and hire them directly through the Particles platform. No recruitment fees.</Text>
          </Stack>
        </Flex>
      </Container>

      {/* CTA */}
      <Box bg="purple.600" py={20}>
        <Container maxW="container.lg" textAlign="center">
          <Heading size="xl" color="white" mb={6}>
            Start Hiring World-Class Developers
          </Heading>
          <Button size="lg" colorScheme="orange">
            View Developer Listings
          </Button>
        </Container>
      </Box>

      {/* Footer */}
      <Box bg="gray.800" py={12} color="white">
        <Container maxW="container.lg" textAlign="center">
          <Image src="https://images.unsplash.com/photo-1662313677631-aae267d56223?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwYXJ0aWNsZXMlMjBsb2dvfGVufDB8fHx8MTcxMzA2MDU5Mnww&ixlib=rb-4.0.3&q=80&w=1080" h={8} mx="auto" mb={4} />
          <Text>&copy; 2023 Particles. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
