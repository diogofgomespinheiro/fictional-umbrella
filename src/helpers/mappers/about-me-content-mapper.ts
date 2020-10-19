/* eslint-disable @typescript-eslint/no-explicit-any */

interface ISocialMediaLinks {
  platform: string;
  link: string;
}

export interface IAboutMeContent {
  title: string;
  subTitle: string;
  description: string;
  resumeLink: string;
  email: string;
  socialMedia: ISocialMediaLinks[];
}

export class AboutMeContentMapper {
  static map = (data: Record<string, any>): IAboutMeContent => {
    const socialMedia = data.social_media.map(item => {
      return {
        platform: `${item.platform}`,
        link: `${item.link.url}`
      };
    });

    return {
      title: `${data.title[0].text}`,
      subTitle: `${data.secondary_title[0].text}`,
      description: `${data.description[0].text}`,
      resumeLink: `${data.resume.url}`,
      email: `${data.email}`,
      socialMedia
    };
  };
}
