/* eslint-disable @typescript-eslint/no-explicit-any */
import { Document } from 'prismic-javascript/types/documents';
import { RichText } from 'prismic-reactjs';

import {
  ICardContent,
  IModalContent,
  IProjectsContent,
  ITool,
  getFormattedImage
} from '../../types';

export class ProjectsContentMapper {
  static map = (results: Array<Document>): IProjectsContent[] => {
    const mappedData = results.map(result => {
      const card = ProjectsContentMapper.getCardItems(result.data);
      const modal = ProjectsContentMapper.getModalItems(result.data);

      return { card, modal };
    });

    return mappedData;
  };

  static getCardItems(data: Record<string, any>): ICardContent {
    const title = RichText.asText(data.title);
    const thumbnail = getFormattedImage(data.thumbnail);
    const description = RichText.asText(data.description);
    const tools = ProjectsContentMapper.getMappedTools(data.tools);

    return {
      title,
      thumbnail,
      description,
      tools
    };
  }

  static getModalItems(data: Record<string, any>): IModalContent {
    const title = RichText.asText(data.modal_title);
    const description = RichText.asText(data.modal_description);
    const subTitle = RichText.asText(data.modal_sub_title);
    const secondaryDescription = RichText.asText(data.modal_second_description);
    const tools = ProjectsContentMapper.getMappedTools(
      data.modal_tools,
      'modal_tool_'
    );

    return {
      title,
      description,
      subTitle,
      secondaryDescription,
      tools
    };
  }

  static getMappedTools(tools: Array<any>, itemPrefix = ''): ITool[] {
    const mappedTools = tools.map(tool => {
      const icon = getFormattedImage(tool?.[`${itemPrefix}icon`]);
      const name = RichText.asText(tool?.[`${itemPrefix}name`]);

      return { icon, name };
    });

    return mappedTools;
  }
}
