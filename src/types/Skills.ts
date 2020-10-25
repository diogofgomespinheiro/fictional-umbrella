import { IImage } from './Image';

export interface IItem {
  text: string;
}

export interface ISkillsContent {
  icon: IImage;
  title: string;
  items: IItem[];
}
