import React, { useState } from "react";
import { Box, Container, Heading, Input, Stack, Grid, GridItem, Text, Image, Wrap, WrapItem, Checkbox } from "@chakra-ui/react";

const developers = [
  {
    id: 1,
    name: "John Doe",
    location: "New York, USA",
    technologies: ["JavaScript", "React", "Node.js"],
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
  },
  {
    id: 2,
    name: "Jane Smith",
    location: "London, UK",
    technologies: ["Python", "Django", "Machine Learning"],
    imageUrl: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
];

const Developers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);

  const filteredDevelopers = developers.filter((developer) => {
    const nameMatch = developer.name.toLowerCase().includes(searchTerm.toLowerCase());
    const technologyMatch = developer.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    const locationMatch = selectedLocation ? developer.location === selectedLocation : true;
    const technologyFilterMatch = selectedTechnologies.length > 0 ? selectedTechnologies.every((tech) => developer.technologies.includes(tech)) : true;

    return (nameMatch || technologyMatch) && locationMatch && technologyFilterMatch;
  });

  const locations = [...new Set(developers.map((developer) => developer.location))];
  const technologies = [...new Set(developers.flatMap((developer) => developer.technologies))];

  return (
    <Box>
      <Container maxW="container.lg" py={8}>
        <Heading as="h1" size="2xl" mb={8}>
          Available Developers
        </Heading>
        <Stack spacing={4} mb={8}>
          <Input placeholder="Search by name or technology" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <Wrap>
            <WrapItem>
              <Stack>
                <Text fontWeight="bold">Filter by Location:</Text>
                {locations.map((location) => (
                  <Checkbox key={location} isChecked={selectedLocation === location} onChange={() => setSelectedLocation(selectedLocation === location ? "" : location)}>
                    {location}
                  </Checkbox>
                ))}
              </Stack>
            </WrapItem>
            <WrapItem>
              <Stack>
                <Text fontWeight="bold">Filter by Technology:</Text>
                {technologies.map((technology) => (
                  <Checkbox
                    key={technology}
                    isChecked={selectedTechnologies.includes(technology)}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      setSelectedTechnologies((prevTechnologies) => (checked ? [...prevTechnologies, technology] : prevTechnologies.filter((tech) => tech !== technology)));
                    }}
                  >
                    {technology}
                  </Checkbox>
                ))}
              </Stack>
            </WrapItem>
          </Wrap>
        </Stack>
        <Grid templateColumns="repeat(3, 1fr)" gap={8}>
          {filteredDevelopers.map((developer) => (
            <GridItem key={developer.id}>
              <Box borderWidth={1} borderRadius="lg" p={4}>
                <Image src={developer.imageUrl} alt={developer.name} borderRadius="lg" mb={4} />
                <Heading as="h2" size="md" mb={2}>
                  <a href="#">{developer.name}</a>
                </Heading>
                <Text mb={1}>{developer.location}</Text>
                <Text color="gray.500">{developer.technologies.join(", ")}</Text>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Developers;
