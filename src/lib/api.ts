import Prismic from 'prismic-javascript';

import {
  IAboutMeContent,
  AboutMeContentMapper
} from '../helpers/mappers/about-me-content-mapper';
import {
  ISkillsContent,
  SkillsContentMapper
} from '../helpers/mappers/skills-content-mapper';

const REPOSITORY = process.env.PRISMIC_REPOSITORY_NAME;

export const API_ENDPOINT = `https://${REPOSITORY}.cdn.prismic.io/api/v2`;
export const API_TOKEN = process.env.PRISMIC_API_TOKEN;

export const PrismicClient = Prismic.client(API_ENDPOINT, {
  accessToken: API_TOKEN
});

export const fetchAboutMeContent = async (): Promise<
  IAboutMeContent | Record<string, unknown>
> => {
  try {
    const response = await PrismicClient.query(
      Prismic.Predicates.at('document.type', 'about')
    );

    const prismicData = response?.results[0].data;

    if (prismicData) {
      const mappedData = AboutMeContentMapper.map(prismicData);
      return mappedData;
    }

    return {};
  } catch (err) {
    console.error(err);
    return {};
  }
};

export const fetchSkillsContent = async (): Promise<ISkillsContent[] | []> => {
  try {
    const response = await PrismicClient.query(
      Prismic.Predicates.at('document.type', 'skills'),
      { orderings: '[document.first_publication_date]' }
    );

    const prismicData = response?.results;

    if (prismicData) {
      const mappedData = SkillsContentMapper.map(prismicData);
      return mappedData;
    }

    return [];
  } catch (err) {
    console.error(err);
    return [];
  }
};
