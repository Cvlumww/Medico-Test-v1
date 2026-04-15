import { Block } from 'payload'

export const StaffCarousel: Block = {
  slug: 'staff-carousel',
  interfaceName: 'StaffCarouselBlock',
  imageURL: 'https://calum.work/_next/image?url=%2Fcfw-logo-small.jpeg&w=128&q=75',
  imageAltText: 'Staff Carousel block preview',
  labels: {
    singular: 'Staff Carousel',
    plural: 'Staff Carousels',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      localized: true,
      defaultValue: 'Meet the Team',
      admin: {
        description: 'Main heading shown above the carousel.',
      },
    },
    {
      name: 'introText',
      type: 'textarea',
      localized: true,
      admin: {
        description: 'Optional short intro text for context.',
      },
    },
    {
      name: 'staffMembers',
      type: 'relationship',
      relationTo: 'staff',
      hasMany: true,
      required: true,
      virtual: true,
      validate: () => true,
      admin: {
        readOnly: true,
        description:
          'Automatically loads all published entries from the Staff collection. Manage members in the Staff collection.',
      },
      hooks: {
        afterRead: [
          async ({ req: { payload } }) => {
            const staff = await payload.find({
              collection: 'staff',
              limit: 0,
              pagination: false,
              where: {
                _status: {
                  equals: 'published',
                },
              },
              sort: 'createdAt',
            })

            return staff.docs.map((member) => member.id)
          },
        ],
      },
    },
  ],
}

export default StaffCarousel
