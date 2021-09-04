import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import ContactMe from "../components/ContactMe/Contactme";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Technologies />
      <Timeline />
      <ContactMe/>
    </Layout>
  );
};

export default Home;
