import type { CollectionConfig } from 'payload'

export const WebsiteContent: CollectionConfig = {
  slug: 'website-content',
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'page',
      type: 'text',
      required: true,
      unique: true,
      label: 'Page',
    },
    {
      name: 'content',
      type: 'blocks',
      required: true,
      label: 'Sections',
      blocks: [
        {
          slug: 'textSection',
          labels: { 
            singular: 'Text Section', 
            plural: 'Text Sections' 
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              label: 'Title',
            },
            {
              name: 'body',
              type: 'textarea',
              required: true,
              label: 'Content',
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: false,
              label: 'Image',
            },
          ],
        },
      ],
    },
  ],
}

export default WebsiteContent