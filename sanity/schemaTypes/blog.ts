export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'title',
        },
      },
      {
        name: 'mainImage',
        type: 'image',
        title: 'Main image',
      },
      {
        name: 'publishedAt',
        type: 'datetime',
        title: 'Published at',
      },
      {
        name: 'smallDescription',
        type: 'text',
        title: 'Small description',
         
      },
      {
        name: 'content',
        type: 'array',
        title: 'Content',
        of: [
            {
            type: 'block',
            }
        ],
      }
    ],
}