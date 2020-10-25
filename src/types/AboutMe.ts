export interface ISocialMediaLinks {
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
