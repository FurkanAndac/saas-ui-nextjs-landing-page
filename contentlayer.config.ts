import { defineDocumentType, makeSource } from 'contentlayer/source-files';

// Example of defining a document type
const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
}));

// Source configuration for contentlayer
export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
});
