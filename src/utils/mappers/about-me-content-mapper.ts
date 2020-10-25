/* eslint-disable @typescript-eslint/no-explicit-any */

import { RichText } from 'prismic-reactjs';
import { IAboutMeContent } from '../../types/AboutMe';

export class AboutMeContentMapper {
  static map = (data: Record<string, any>): IAboutMeContent => {
    const socialMedia = data.social_media.map(item => {
      return {
        platform: item.platform,
        link: item.link.url
      };
    });

    return {
      title: RichText.asText(data.title),
      subTitle: RichText.asText(data.secondary_title),
      description: RichText.asText(data.description),
      resumeLink: data.resume.url,
      email: data.email,
      socialMedia
    };
  };
}
