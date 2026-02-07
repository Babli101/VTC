export const CONTAINER_DESICCANTS_DATA = [
  { slug: 'ds', name: 'DS' },
  { slug: 'dp', name: 'DP' },
  { slug: 'sq-tp-dp', name: 'SQ/TP/DP' },
];

export const CONTAINER_DATA = [
  {
    slug: 'ds',
    name: 'DS',
    images: ['/banner1.png', '/banner2.png', '/banner3.png'],

    description1:
      'VTC desiccants are manufactured using high-purity calcium chloride combined with a specially developed natural organic gelling agent. Calcium chloride is a highly hygroscopic material capable of attracting and binding large amounts of moisture.',

    description2:
      'As moisture is absorbed, the calcium chloride reacts with the organic gelling agent and converts the absorbed moisture into a stable, leak-free gel, eliminating the risk of leakage.',

    features: [
      'High moisture absorption capacity',
      'Prevents container rain and condensation',
      'Leak-proof gel formation',
      'Durable outer packaging',
      'Easy installation'
    ],

    applications: [
      'Export cargo containers',
      'Electronics',
      'Machinery',
      'Textiles',
      'Metal components'
    ],

    products: [
      {
        slug: 'ds-250g',
        name: 'DS 250G',
        gram: 'DS 250G',
        images: ['/banner1.png', '/banner2.png', '/banner3.png']
      },
      {
        slug: 'ds-250g-sticker',
        name: 'DS 250G Sticker',
        gram: 'DS 250G Sticker',
        images: ['/banner1.png', '/banner2.png', '/banner3.png']
      },
      {
        slug: 'ds-500g',
        name: 'DS 500G',
        gram: 'DS 500G',
        images: ['/banner1.png', '/banner2.png', '/banner3.png']
      }
    ]
  },

  {
    slug: 'dp',
    name: 'DP',
    images: ['/banner1.png', '/banner2.png', '/banner3.png'],

    description1:
      'DP Series container desiccants are heavy-duty moisture control solutions designed for extreme humidity and long sea routes.',

    description2:
      'They convert absorbed moisture into a stable gel, ensuring zero leakage during transit.',

    features: [
      'Ultra-high moisture absorption',
      'Heavy-duty leak-proof design',
      'Ideal for long sea shipments'
    ],

    applications: [
      'Ocean freight containers',
      'Steel coils',
      'Heavy machinery'
    ],

    products: [
      {
        slug: 'dp-1000g',
        name: 'DP 1000G',
        gram: 'DP 1000G',
        images: ['/banner1.png', '/banner2.png', '/banner3.png']
      }
    ]
  },

  {
    slug: 'sq-tp-dp',
    name: 'SQ / TP / DP',
    images: ['/banner1.png', '/banner2.png', '/banner3.png'],

    description1:
      'SQ / TP / DB Series are space-optimized container desiccants designed for flexible placement.',

    description2:
      'They are ideal for narrow gaps, overhead roofs, and flat cargo surfaces.',

    features: [
      'Slim and flexible designs',
      'High moisture absorption',
      'Ideal for limited-space containers'
    ],

    applications: [
      'Garments',
      'Furniture',
      'Palletized cargo'
    ],

    products: [
      {
        slug: 'db-1000g',
        name: 'DB 1000G',
        gram: 'DB 1000G',
        images: ['/banner1.png', '/banner2.png', '/banner3.png']
      },
      {
        slug: 'sq-1000g',
        name: 'SQ 1000G',
        gram: 'SQ 1000G',
        images: ['/banner1.png', '/banner2.png', '/banner3.png']
      },
      {
        slug: 'tp-1000g',
        name: 'TP 1000G',
        gram: 'TP 1000G',
        images: ['/banner1.png', '/banner2.png', '/banner3.png']
      }
    ]
  }
];
