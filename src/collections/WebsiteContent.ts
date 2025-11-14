import type { CollectionConfig } from 'payload'

export const WebsiteContent: CollectionConfig = {
  slug: 'website-content',
  admin: {
    useAsTitle: 'page',
    defaultColumns: ['page', 'title', 'updatedAt'],
  },
  labels: {
    singular: 'BranchX Website',
    plural: 'BranchX Website',
  },
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
      name: 'title',
      type: 'text',
      required: false,
      label: 'Title',
      admin: {
        description: 'Main content for the page',
      },
    },
    {
      name: 'pageSubtitle',
      type: 'text',
      required: false,
      label: 'Page Subtitle',
      admin: {
        description: 'A brief description or subtitle for the page',
      },
    },
    {
      name: 'pageContent',
      type: 'text',
      required: false,
      label: 'Content',
      admin: {
        description: 'Main content for the page',
      },
    },
    {
      name: 'pageSubContent',
      type: 'text',
      required: false,
      label: 'Sub Content',
      admin: {
        description: 'Sub content for the page',
      },
    },
    {
      name: 'content',
      type: 'blocks',
      required: true,
      label: 'Sections',
      blocks: [
        {
          slug: 'imageGallery',
          labels: {
            singular: 'Image Gallery',
            plural: 'Image Galleries'
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Gallery Title',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Description',
              required: false,
            },
            {
              name: 'images',
              type: 'array',
              label: 'Images',
              minRows: 1,
              maxRows: 20,
              labels: {
                singular: 'Image',
                plural: 'Images',
              },
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                  label: 'Image',
                },
                {
                  name: 'caption',
                  type: 'text',
                  label: 'Caption',
                  required: false,
                },
                {
                  name: 'altText',
                  type: 'text',
                  label: 'Alt Text',
                  required: false,
                  admin: {
                    description: 'A description of the image for accessibility',
                  },
                },
              ],
            },
          ],
        },
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
              name: 'subtitle',
              type: 'text',
              required: false,
              label: 'Subtitle',
              admin: {
                description: 'A brief description or subtitle for the section',
              },
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
            {
              name: 'date',
              type: 'date',
              required: false,
              label: 'Date',
              admin: {
                description: 'Optional date for this section',
                date: {
                  pickerAppearance: 'dayAndTime',
                },
              },
            },
            {
              name: 'link',
              type: 'group',
              label: 'Link',
              fields: [
                {
                  name: 'url',
                  type: 'text',
                  label: 'URL',
                  required: false,
                },
                {
                  name: 'text',
                  type: 'text',
                  label: 'Link Text',
                  required: false,
                },
              ],
            },
            {
              name: 'subsections',
              type: 'array',
              label: 'Subsections',
              labels: {
                singular: 'Subsection',
                plural: 'Subsections',
              },
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'Subsection Title',
                  required: true,
                },
                {
                  name: 'content',
                  type: 'textarea',
                  label: 'Content',
                  required: true,
                },
                {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: false,
              label: 'Image',
            },
                {
                  name: 'link',
                  type: 'group',
                  label: 'Link',
                  fields: [
                    {
                      name: 'url',
                      type: 'text',
                      label: 'URL',
                      required: false,
                    },
                    {
                      name: 'text',
                      type: 'text',
                      label: 'Link Text',
                      required: false,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

export default WebsiteContent