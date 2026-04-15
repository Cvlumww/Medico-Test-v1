import type { Payload } from 'payload'

type StaffSeed = {
  name: string
  summary: {
    de: string
    en: string
  }
  imageUrl: string
  ctaLabel: {
    de: string
    en: string
  }
  ctaLink: {
    de: string
    en: string
  }
}

const staffSeedData: StaffSeed[] = [
  {
    name: 'Monkey D. Luffy',
    summary: {
      de: 'Der mutige Kapitan, der seine Crew mit Entschlossenheit und Optimismus anfuhrt.',
      en: 'The fearless captain who inspires the crew with bold leadership and relentless optimism.',
    },
    imageUrl: 'https://i.redd.it/w2xgfjroo9e51.png',
    ctaLabel: {
      de: 'Profil ansehen',
      en: 'View Staff Profile',
    },
    ctaLink: {
      de: '/team/luffy',
      en: '/team/luffy',
    },
  },
  {
    name: 'Roronoa Zoro',
    summary: {
      de: 'Der disziplinierte Schwertkampfer mit Ausdauer und kompromissloser Zielstrebigkeit.',
      en: 'A disciplined fighter known for precision, endurance, and unwavering commitment to the mission.',
    },
    imageUrl:
      'https://images.steamusercontent.com/ugc/1764818283971610119/DC931A7A55209DA74C757F603A98A6F0FA5801F5/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
    ctaLabel: {
      de: 'Profil ansehen',
      en: 'View Staff Profile',
    },
    ctaLink: {
      de: '/team/zoro',
      en: '/team/zoro',
    },
  },
  {
    name: 'Nami',
    summary: {
      de: 'Die Navigatorin, die Strategie mit Wetterwissen und klarer Planung verbindet.',
      en: 'The crew navigator who blends strategic thinking with deep expertise in weather and planning.',
    },
    imageUrl: 'https://i.pinimg.com/736x/b7/7f/6a/b77f6a217475481a21738aaa124cb3d4.jpg',
    ctaLabel: {
      de: 'Profil ansehen',
      en: 'View Staff Profile',
    },
    ctaLink: {
      de: '/team/nami',
      en: '/team/nami',
    },
  },
  {
    name: 'Usopp',
    summary: {
      de: 'Der Scharfschutze der Crew mit Kreativitat, Mut und einer Vorliebe fur ubertriebene Geschichten.',
      en: 'The crew sniper who is known for his sharpshooting skills and his love for untruths.',
    },
    imageUrl:
      'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/05/Collage-Maker-30-May-2022-0200-PM.jpg?q=50&fit=crop&w=825&dpr=1.5',
    ctaLabel: {
      de: 'Profil ansehen',
      en: 'View Staff Profile',
    },
    ctaLink: {
      de: '/team/usopp',
      en: '/team/usopp',
    },
  },
  {
    name: 'Sanji',
    summary: {
      de: 'Der Koch der Crew mit Stil, Leidenschaft und einem feurigen Kampfgeist.',
      en: 'The crew cook who is known for his fiery temper and his love for food.',
    },
    imageUrl: 'https://i.pinimg.com/736x/a1/74/0b/a1740b5526052d37c2d5378466a60f19.jpg',
    ctaLabel: {
      de: 'Profil ansehen',
      en: 'View Staff Profile',
    },
    ctaLink: {
      de: '/team/sanji',
      en: '/team/sanji',
    },
  },
  {
    name: 'Tony Tony Chopper',
    summary: {
      de: 'Der Arzt der Crew, klein in der Statur aber gross in Herz und medizinischem Talent.',
      en: 'The crew doctor who is known for his love for food and his love for animals.',
    },
    imageUrl:
      'https://static0.cbrimages.com/wordpress/wp-content/uploads/2020/12/One-Piece-Chopper-wano-header.jpg',
    ctaLabel: {
      de: 'Profil ansehen',
      en: 'View Staff Profile',
    },
    ctaLink: {
      de: '/team/chopper',
      en: '/team/chopper',
    },
  },
  {
    name: 'Nico Robin',
    summary: {
      de: 'Die Archaologin der Crew mit tiefem Wissen und ruhiger Entschlossenheit.',
      en: 'The crew archaeologist who is known for her love for history and her love for books.',
    },
    imageUrl:
      'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/05/Nico-Robin-Laughing-In-Wano.jpg',
    ctaLabel: {
      de: 'Profil ansehen',
      en: 'View Staff Profile',
    },
    ctaLink: {
      de: '/team/robin',
      en: '/team/robin',
    },
  },
  {
    name: 'Franky',
    summary: {
      de: 'Der Schiffszimmermann der Crew, bekannt fur seine Technik und sein Selbstvertrauen.',
      en: 'The crew mechanic who is known for his love for metal.',
    },
    imageUrl:
      'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/10/franky-displays-his-carpenter-skills-in-wano.jpg?q=49&fit=crop&w=825&dpr=2',
    ctaLabel: {
      de: 'Profil ansehen',
      en: 'View Staff Profile',
    },
    ctaLink: {
      de: '/team/franky',
      en: '/team/franky',
    },
  },
  {
    name: 'Brook',
    summary: {
      de: 'Der Musiker der Crew mit unverwechselbarem Stil und trockenem Humor.',
      en: 'The crew musician who is known for his love for music and his love for whales.',
    },
    imageUrl: 'https://i.sstatic.net/ouNRB.jpg',
    ctaLabel: {
      de: 'Profil ansehen',
      en: 'View Staff Profile',
    },
    ctaLink: {
      de: '/team/brook',
      en: '/team/brook',
    },
  },
  {
    name: 'Jinbe',
    summary: {
      de: 'Der Steuermann der Crew mit Ruhe, Erfahrung und grosser Loyalitat.',
      en: 'The crew helmsman who is known for his love for fishmen and his love for under water karate.',
    },
    imageUrl: 'https://ichef.bbci.co.uk/images/ic/640x360/p0kcv0g0.jpg',
    ctaLabel: {
      de: 'Profil ansehen',
      en: 'View Staff Profile',
    },
    ctaLink: {
      de: '/team/jinbe',
      en: '/team/jinbe',
    },
  },
]

/** Seeds baseline staff members once so new setups have usable carousel content. */
export async function seedStaffMembers(payload: Payload): Promise<void> {
  for (const member of staffSeedData) {
    const existing = await payload.find({
      collection: 'staff',
      limit: 1,
      depth: 0,
      where: {
        name: {
          equals: member.name,
        },
      },
    })

    if (existing.totalDocs > 0) {
      continue
    }

    await payload.create({
      collection: 'staff',
      data: {
        ...member,
        _status: 'published',
      },
    })
  }
}
