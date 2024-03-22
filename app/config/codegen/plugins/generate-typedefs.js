import {printSchemaWithDirectives} from '@graphql-tools/utils';
import {stripIgnoredCharacters} from 'graphql';

const load = (schema) => {
    const escapedSchema = schema
        .replace(/\\`/g, '\\\\`')
        .replace(/`/g, '\\`');
    return '\n' + 'export const typeDefs = "' + escapedSchema + '";'
};

export const plugin =  (schema) => {
    return load(stripIgnoredCharacters(printSchemaWithDirectives(schema)));
}