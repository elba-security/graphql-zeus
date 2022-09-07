import { plusDescription } from '@/TreeToTS/templates/shared/description';
import { ParserField } from 'graphql-js-tree';
import { toTypeNameFromEnum } from '../shared/enums';

export const resolveEnum = (i: ParserField): string => {
  if (!i.args) {
    throw new Error('Empty enum error');
  }
  const typeName = toTypeNameFromEnum(i.name);
  const stringLiterals = i.args.map((f) => `'${f.name}'`).join(' | ');
  return `${plusDescription(i.description)}export type ${typeName} = ${stringLiterals}\n`;
};
