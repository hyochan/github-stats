import {objectType} from 'nexus';

export const Image = objectType({
  name: 'Image',
  definition(t) {
    t.id('id');
    t.string('thumbUrl');
    t.string('thumbUrlHigh', {
      description: 'Thumbnail URL for high resolution',
    });
    t.string('imageUrl');
    t.date('createdAt');
  },
});
