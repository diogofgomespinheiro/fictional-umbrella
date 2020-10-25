import { IImage } from './Image';

export interface ITool {
  name: string;
  icon: IImage;
}

export interface ICardContent {
  title: string;
  thumbnail: IImage;
  description: string;
  tools: ITool[];
}

export interface IModalContent {
  title: string;
  description: string;
  subTitle: string;
  secondaryDescription: string;
  tools: ITool[];
}

export interface IProjectsContent {
  card: ICardContent;
  modal: IModalContent;
}
