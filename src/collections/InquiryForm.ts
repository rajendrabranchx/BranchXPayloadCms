import type { CollectionConfig } from 'payload'

export const InquiryForm: CollectionConfig = {
  slug: 'inquiry-forms',
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'project',
      type: 'text',
      required: true,
      label: 'Project',
    },
    {
      name: 'firstName',
      type: 'text',
      required: true,
      label: 'First Name',
    },
    {
      name: 'lastName',
      type: 'text',
      required: true,
      label: 'Last Name',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'Email',
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
      label: 'Phone',
    },
    {
      name: 'subject',
      type: 'text',
      required: true,
      label: 'Subject',
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
      label: 'Message',
    },
  ],
  timestamps: true, // This will add createdAt and updatedAt fields automatically
}