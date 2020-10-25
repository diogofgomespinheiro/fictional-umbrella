// Library imports
import React from 'react';
import { GetStaticProps } from 'next';

// Component imports
import Layout from '../components/layout';
import AboutSection from '../components/home/about-section';

import {
  fetchAboutMeContent,
  fetchProjectsContent,
  fetchSkillsContent
} from '../lib/api';
import { IAboutMeContent, IProjectsContent, ISkillsContent } from '../types';

type HomeProps = {
  aboutMeContent: IAboutMeContent;
  skillsContent: ISkillsContent;
  projectsContent: IProjectsContent;
  preview: boolean;
};

const Home: React.FC<HomeProps> = ({
  aboutMeContent,
  skillsContent,
  projectsContent
}) => {
  return (
    <Layout>
      <AboutSection content={aboutMeContent} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const aboutMeContent = await fetchAboutMeContent();
  const skillsContent = await fetchSkillsContent();
  const projectsContent = await fetchProjectsContent();

  return {
    props: {
      preview,
      aboutMeContent,
      skillsContent,
      projectsContent
    }
  };
};

export default Home;
