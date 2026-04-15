import { authenticated } from '@/shared/access/authenticated'
import { CollectionGroups } from '@/shared/CollectionGroups'
import { CollectionConfig } from 'payload'

const Staff: CollectionConfig = {
  slug: 'staff',
  labels: {
    singular: 'Staff Member',
    plural: 'Staff Members',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'updatedAt'],
    group: CollectionGroups.ContentCollections,
  },
  versions: {
    drafts: true,
  },
  access: {
    read: authenticated,
    update: authenticated,
    delete: authenticated,
    create: authenticated,
  },
  defaultPopulate: {
    name: true,
    summary: true,
    image: true,
    imageUrl: true,
    ctaLabel: true,
    ctaLink: true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'summary',
      type: 'textarea',
      required: true,
      localized: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Optional CMS image. If empty, external image URL can be used.',
      },
    },
    {
      name: 'imageUrl',
      type: 'text',
      admin: {
        description: 'Optional external image URL fallback.',
      },
    },
    {
      name: 'ctaLabel',
      type: 'text',
      required: true,
      localized: true,
      defaultValue: 'View Profile',
    },
    {
      name: 'ctaLink',
      type: 'text',
      required: true,
      localized: true,
    },
  ],
}

export default Staff
