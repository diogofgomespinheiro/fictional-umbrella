import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';

import { fetchAboutMeContent, fetchSkillsContent } from '../lib/api';
import { IAboutMeContent } from '../helpers/mappers/about-me-content-mapper';
import { ISkillsContent } from '../helpers/mappers/skills-content-mapper';

type HomeProps = {
  aboutMeContent: IAboutMeContent;
  skillsContent: ISkillsContent;
  preview: boolean;
};

const Home: React.FC<HomeProps> = ({ aboutMeContent }) => {
  return (
    <div>
      <Head>
        <title>Rita Queiros</title>
      </Head>

      <main></main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const aboutMeContent = await fetchAboutMeContent();
  const skillsContent = await fetchSkillsContent();

  return {
    props: {
      preview,
      aboutMeContent,
      skillsContent
    }
  };
};

export default Home;
