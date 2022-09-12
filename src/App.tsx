import { Box, Center, Container, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, VStack } from "@chakra-ui/react";
import { DarkMode } from "./components/DarkMode";
import GapForm from "./components/forms/GapForm";
import MultipleChoiceForm from "./components/forms/MultipleChoiceForm";
import TrueOrFalseForm from "./components/forms/TrueOrFalseForm";

export default function App() {
  return (
    <>
      <DarkMode />

      <Container maxW='container.md'>
        <Box p={5} w='100%'>


          <Heading mb='5' w='100%'>
            Gerador de exercícios - Ada
          </Heading>
          <Tabs w='100%' colorScheme="green">
            <TabList>
              <Tab>Multipla escolha</Tab>
              <Tab>Verdadeiro ou falso</Tab>
              <Tab>Lacuna</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <MultipleChoiceForm />
              </TabPanel>
              <TabPanel>
                <TrueOrFalseForm />
              </TabPanel>
              <TabPanel>
                <Heading>Work in progress...</Heading>
                {/* <GapForm /> */}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </>
  );
}
