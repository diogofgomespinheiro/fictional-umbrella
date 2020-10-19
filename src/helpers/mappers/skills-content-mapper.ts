/* eslint-disable @typescript-eslint/no-explicit-any */
import { Document } from 'prismic-javascript/types/documents';

interface IIcon {
  alt: string;
  url: string;
  dimensions: { width: number; height: number };
}

interface IItem {
  text: string;
}

export interface ISkillsContent {
  icon: IIcon;
  title: string;
  items: IItem[];
}

export class SkillsContentMapper {
  static map = (results: Array<Document>): ISkillsContent[] => {
    const mappedData = results.map(result => {
      const title = result?.data?.title?.[0]?.text;
      const items = result?.data?.items;
      const icon = {
        ...result?.data?.icon
      };
      delete icon.copyright;

      return {
        icon,
        title,
        items
      };
    });

    return mappedData;
  };
}
