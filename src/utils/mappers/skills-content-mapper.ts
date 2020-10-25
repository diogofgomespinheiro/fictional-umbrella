/* eslint-disable @typescript-eslint/no-explicit-any */
import { Document } from 'prismic-javascript/types/documents';
import { RichText } from 'prismic-reactjs';
import { getFormattedImage } from '../../types';
import { ISkillsContent } from '../../types/Skills';

export class SkillsContentMapper {
  static map = (results: Array<Document>): ISkillsContent[] => {
    const mappedData = results.map(result => {
      const title = RichText.asText(result.data.title);
      const items = result?.data?.items;
      const icon = getFormattedImage(result.data.icon);

      return {
        icon,
        title,
        items
      };
    });

    return mappedData;
  };
}
