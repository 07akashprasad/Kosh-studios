export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: "Residential" | "Interior Design" | "Commercial" | "Hospitality";
  location: string;
  year: string;
  area: string;
  duration: string;
  coverImage: string;
  galleryImages: string[];
  beforeImage?: string;
  afterImage?: string;
  overview: string;
  challenge: string;
  solution: string;
  drawings: {
    title: string;
    description: string;
    imageUrl: string;
  }[];
  materials: {
    name: string;
    category: string;
    textureUrl: string;
  }[];
  features: string[];
  testimonial?: {
    quote: string;
    client: string;
    role: string;
  };
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "the-monolith-residence",
    title: "The Monolith Residence",
    tagline: "A brutalist-inspired sanctuary framed by courtyards and raw stone",
    category: "Residential",
    location: "Alibaug, Maharashtra",
    year: "2024",
    area: "8,500 sq.ft",
    duration: "18 Months",
    coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop",
    ],
    beforeImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?q=80&w=1200&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    overview:
      "Perched on a gentle slope surrounded by native teak trees, The Monolith Residence was conceived as an earth-anchored sanctuary. Kosh Studios blended board-formed concrete, hand-chiseled Dhrangadhra stone, and expansive floor-to-ceiling glass to dissolve boundaries between internal living pavilions and verdant landscape.",
    challenge:
      "The site featured heavy seasonal monsoons and an uneven 4-meter topographical drop. The client required a low-energy dwelling that stayed cool during tropical summers while protecting panoramic valley views.",
    solution:
      "We engineered a bi-level terraced layout with cantilevered overhangs acting as passive thermal shields. Rainwater harvesting channels were integrated directly into the concrete facade, leading to a central biophilic reflection pool that lowers the ambient micro-climate temperature by 4°C naturally.",
    drawings: [
      {
        title: "Master Ground Floor Plan & Circulation",
        description: "Zoning separating private bedroom suites from open central social pavilion and water court.",
        imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Longitudinal Sun & Wind Section",
        description: "Demonstrating stack ventilation drawing breezes across the sunken courtyard through upper louvers.",
        imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1200&auto=format&fit=crop",
      }
    ],
    materials: [
      {
        name: "Hand-chiseled Dhrangadhra Sandstone",
        category: "Masonry & Cladding",
        textureUrl: "https://images.unsplash.com/photo-1598880940371-c756e015fea1?q=80&w=600&auto=format&fit=crop",
      },
      {
        name: "Reclaimed Burmese Teak",
        category: "Carpentry & Joinery",
        textureUrl: "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?q=80&w=600&auto=format&fit=crop",
      },
      {
        name: "Board-Formed Architectural Concrete",
        category: "Structural Facade",
        textureUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop",
      },
      {
        name: "Aged Bronze Hardware",
        category: "Details & Accents",
        textureUrl: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=600&auto=format&fit=crop",
      }
    ],
    features: [
      "Passive Stack Ventilation & Solar Thermal Optimization",
      "Integrated 50,000L Rainwater Harvesting Cistern",
      "Custom Cast-in-Place Concrete Island & Vanities",
      "Triple-Glazed Acoustically Isolated Pocket Doors"
    ],
    testimonial: {
      quote:
        "Kosh Studios understood not just how we live, but how we wanted to feel. Walking through the stone portal into the courtyard after a hectic week in the city brings an immediate sense of peace.",
      client: "Vikram & Ananya Singhania",
      role: "Homeowners"
    }
  },
  {
    id: "2",
    slug: "the-terracotta-penthouse",
    title: "The Terracotta Penthouse",
    tagline: "Warm minimalism with bespoke joinery and sculpted plaster curves",
    category: "Interior Design",
    location: "Worli, Mumbai",
    year: "2024",
    area: "4,200 sq.ft",
    duration: "9 Months",
    coverImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1600&auto=format&fit=crop",
    ],
    beforeImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
    overview:
      "A bare-shell 48th-floor penthouse transformed into a quiet, warm-toned aerie high above Mumbai's coastline. Rejecting cold glossy luxury, Kosh Studios crafted a rich tactile atmosphere utilizing hand-applied lime wash, custom terracotta fluting, and continuous travertine flooring.",
    challenge:
      "The developer's original layout featured rigid compartmentalized rooms, low structural beams, and awkward structural columns that obstructed natural sea views.",
    solution:
      "We stripped all non-structural partitions, enveloping remaining structural columns in gently radiused Venetian plaster curves. A central fluted timber pavilion houses service spaces while allowing light to wash across the entire length of the home.",
    drawings: [
      {
        title: "Space Planning & Open Spatial Flow",
        description: "Reconfiguration from 5 compartmentalized bedrooms to 3 expansive suites with an open salon.",
        imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
      }
    ],
    materials: [
      {
        name: "Honed Navona Travertine",
        category: "Flooring",
        textureUrl: "https://images.unsplash.com/photo-1598880940371-c756e015fea1?q=80&w=600&auto=format&fit=crop",
      },
      {
        name: "Smoked European White Oak",
        category: "Cabinetry & Doors",
        textureUrl: "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?q=80&w=600&auto=format&fit=crop",
      },
      {
        name: "Natural Lime Wash & Micro-cement",
        category: "Wall Finishes",
        textureUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop",
      }
    ],
    features: [
      "Custom Curved Micro-cement Fireplace & Floating Credenza",
      "Motorized Architectural Linen Drapery with Lutron Automation",
      "Hidden Pivot Doors Flush with Plaster Walls",
      "Curated Art Collection Lighting with 98+ CRI Museum Optics"
    ],
    testimonial: {
      quote:
        "Every single millimeter in this penthouse feels intentional. Friends who visit are stunned by how calm and grounding it feels despite being in the center of Mumbai.",
      client: "Radhika K.",
      role: "Creative Director & Resident"
    }
  },
  {
    id: "3",
    slug: "atelier-kavya-commercial",
    title: "Atelier Kavya Creative Studio",
    tagline: "Adaptive reuse of an industrial warehouse into an inspiring design atelier",
    category: "Commercial",
    location: "Indiranagar, Bangalore",
    year: "2023",
    area: "6,200 sq.ft",
    duration: "10 Months",
    coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop",
    ],
    beforeImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    overview:
      "A decommissioned mid-century printing press warehouse reimagined as a multi-disciplinary design studio, material library, and coffee bar. Kosh Studios celebrated raw steel trusses and skylights while inserting floating glass conference pods.",
    challenge:
      "The client required flexible spaces that could transition effortlessly between focused quiet workstations, collaborative client pin-up sessions, and evening launch events.",
    solution:
      "We introduced modular pivoting acoustic screens crafted from recycled PET felt and perforated brass. A central mezzanine suspended from existing steel trusses created intimate brainstorming alcoves without touching historic masonry walls.",
    drawings: [
      {
        title: "Mezzanine & Multi-use Flow Diagram",
        description: "Dynamic zoning showing acoustic buffer zones between public cafe and private client boardrooms.",
        imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
      }
    ],
    materials: [
      {
        name: "Exposed Industrial Steel Trusses",
        category: "Structure",
        textureUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop",
      },
      {
        name: "Raw Birch Plywood Joinery",
        category: "Furniture & Workstations",
        textureUrl: "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?q=80&w=600&auto=format&fit=crop",
      },
      {
        name: "Polished Concrete Screed",
        category: "Flooring",
        textureUrl: "https://images.unsplash.com/photo-1598880940371-c756e015fea1?q=80&w=600&auto=format&fit=crop",
      }
    ],
    features: [
      "Restored 1960s Sawtooth Skylights Providing Diffused North Light",
      "Acoustically Rated Double Glazed Suspended Meeting Pods",
      "Full Tactile Material & Sample Library Wall",
      "Integrated Specialty Brew Bar and Event Amphitheatre"
    ],
    testimonial: {
      quote:
        "The energy in our studio transformed completely. Our clients love holding strategy workshops here, and our design team has never been more productive.",
      client: "Siddharth Menon",
      role: "Managing Partner, Atelier Kavya"
    }
  },
  {
    id: "4",
    slug: "villa-sol-courtyard-house",
    title: "Villa Sol Courtyard Estate",
    tagline: "Tropical modernist coastal villa centered around water and shaded verandas",
    category: "Residential",
    location: "Assagao, Goa",
    year: "2023",
    area: "7,100 sq.ft",
    duration: "16 Months",
    coverImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
    ],
    beforeImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?q=80&w=1200&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    overview:
      "Drawing inspiration from traditional Portuguese-Goan manors and contemporary tropical modernism, Villa Sol is organized around a private landscaped courtyard and lap pool. Deep overhanging tiled roofs, exposed laterite masonry, and louvered shutters create a climate-responsive sanctuary.",
    challenge:
      "Balancing total seclusion from surrounding village roads while maintaining open breezy indoor-outdoor living spaces suited for coastal humidity.",
    solution:
      "We designed an introverted architectural plan where external facades feature thick, insulated laterite walls with selective geometric punctures, opening completely on the interior side into continuous deep verandas facing lush gardens.",
    drawings: [
      {
        title: "Courtyard Site Plan & Cross Section",
        description: "Orientation maximizing prevailing coastal breeze and seasonal sun angles.",
        imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
      }
    ],
    materials: [
      {
        name: "Locally Quarried Coastal Laterite",
        category: "Exterior Walls",
        textureUrl: "https://images.unsplash.com/photo-1598880940371-c756e015fea1?q=80&w=600&auto=format&fit=crop",
      },
      {
        name: "Handmade Terracotta Roofing Tiles",
        category: "Roofing",
        textureUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop",
      },
      {
        name: "Hand-poured Terrazzo",
        category: "Flooring",
        textureUrl: "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?q=80&w=600&auto=format&fit=crop",
      }
    ],
    features: [
      "Natural Saltwater Lap Pool with Basalt Coping",
      "Traditional Deep Verandas (Balcão) for All-Weather Living",
      "Solar Water Heating and On-Site Organic Waste Composting",
      "Locally Crafted Solid Rosewood Furniture Pieces"
    ],
    testimonial: {
      quote:
        "The house breathes. Even in peak May heat, the cross breeze and courtyard water keep the home wonderfully cool. Kosh Studios created our dream retreat.",
      client: "Dr. Cyrus & Shireen Mistry",
      role: "Homeowners"
    }
  },
  {
    id: "5",
    slug: "nocturne-culinary-lounge",
    title: "Nocturne Dining & Bar",
    tagline: "Dramatic atmospheric dining celebrating moody textures and bespoke lighting",
    category: "Hospitality",
    location: "Koregaon Park, Pune",
    year: "2024",
    area: "3,800 sq.ft",
    duration: "7 Months",
    coverImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=1600&auto=format&fit=crop",
    ],
    beforeImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    overview:
      "A progressive Asian culinary venue designed to feel like an intimate subterranean speakeasy. Kosh Studios crafted custom brass fluting, dark charcoal ribbed concrete, emerald velvet upholstery, and low-level focused accent illumination.",
    challenge:
      "Transforming a cavernous basement with low ceilings and complex exposed ductwork into a sensory, intimate destination restaurant.",
    solution:
      "We concealed acoustic baffles behind a dramatic undulating parametric timber ceiling. A monolithic 12-meter backlit onyx cocktail bar serves as the glowing sculptural anchor of the room.",
    drawings: [
      {
        title: "Acoustic Modeling & Lighting Schematics",
        description: "Detailed Lux level layout and speaker positioning avoiding acoustic reverberation.",
        imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1200&auto=format&fit=crop",
      }
    ],
    materials: [
      {
        name: "Backlit Honey Onyx",
        category: "Bar Counter",
        textureUrl: "https://images.unsplash.com/photo-1598880940371-c756e015fea1?q=80&w=600&auto=format&fit=crop",
      },
      {
        name: "Burnished Antiqued Brass",
        category: "Screens & Shelving",
        textureUrl: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=600&auto=format&fit=crop",
      },
      {
        name: "Charcoal Fluted Plaster",
        category: "Feature Walls",
        textureUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop",
      }
    ],
    features: [
      "Custom 12-Meter Backlit Honey Onyx Bar",
      "Parametric Acoustic Timber Slat Ceiling",
      "Discrete VIP Tasting Room Behind Hidden Mirrored Door",
      "Zoned Dimming System Syncing with Sunset Cycles"
    ],
    testimonial: {
      quote:
        "The ambiance Kosh Studios created is responsible for 80% of our viral social buzz. Diners don't just come for the food; they come for the mood.",
      client: "Arjun Nambiar",
      role: "Restaurateur & Founder"
    }
  },
  {
    id: "6",
    slug: "the-slate-cube-residence",
    title: "The Slate Cube House",
    tagline: "Geometric cantilevered forms meeting lush tropical courtyards",
    category: "Residential",
    location: "Jubilee Hills, Hyderabad",
    year: "2024",
    area: "9,800 sq.ft",
    duration: "20 Months",
    coverImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1600&auto=format&fit=crop",
    ],
    beforeImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?q=80&w=1200&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    overview:
      "A striking composition of interlocking geometric volumes clad in charcoal slate tiles and warm cedar timber. Designed for a multi-generational family, the home features distinct private wings unified by a dramatic triple-height glass atrium.",
    challenge:
      "Achieving privacy on an urban corner plot while accommodating a 6-car basement gallery and vast entertainment spaces.",
    solution:
      "We engineered dramatic 6-meter post-tensioned concrete cantilevers that shade floor-to-ceiling glass pavilions beneath, creating seamless continuity with the infinity pool and manicured lawn.",
    drawings: [
      {
        title: "Structural Cantilever & Axonometric Analysis",
        description: "Post-tensioned beam layout allowing 6-meter column-free living room openings.",
        imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
      }
    ],
    materials: [
      {
        name: "Honed Indian Black Slate",
        category: "Exterior Cladding",
        textureUrl: "https://images.unsplash.com/photo-1598880940371-c756e015fea1?q=80&w=600&auto=format&fit=crop",
      },
      {
        name: "Western Red Cedar",
        category: "Soffits & Louvers",
        textureUrl: "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?q=80&w=600&auto=format&fit=crop",
      },
      {
        name: "Statuario Venato Marble",
        category: "Interior Flooring",
        textureUrl: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=600&auto=format&fit=crop",
      }
    ],
    features: [
      "Triple-Height Glazed Atrium with Ficus Trees",
      "Basement Collector Car Gallery with Glass Viewing Ceiling",
      "Solar Pergola Powering 70% of Daytime Energy Consumption",
      "Custom Cantilevered Floating Travertine Staircase"
    ],
    testimonial: {
      quote:
        "Kosh Studios delivered architecture that feels like sculpture. The way daylight animates the stone walls throughout the morning is pure magic.",
      client: "Rajesh & Priya Reddy",
      role: "Homeowners"
    }
  }
];

export const studioStats = [
  { label: "Completed Projects", value: "48+" },
  { label: "Square Feet Designed", value: "350,000+" },
  { label: "Design Awards & Honors", value: "14" },
  { label: "Years of Studio Practice", value: "9" },
];

export const teamMembers = [
  {
    name: "Ar. Aarav Kosh",
    role: "Founding Principal & Lead Architect",
    credentials: "B.Arch (SPA), M.Arch (AA London), IIA, COA",
    bio: "With over 14 years shaping contemporary Indian architecture, Aarav specializes in climate-responsive residential structures and tectonic craftsmanship.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Mira Sen Kosh",
    role: "Partner & Director of Interior Architecture",
    credentials: "B.Des (NID), Master of Interior Design (Pratt NYC)",
    bio: "Mira leads the studio's material research and interior spatial narratives, curating bespoke furniture, lighting, and tactile natural surfaces.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Kabir Malhotra",
    role: "Associate Director — Turnkey & Site Execution",
    credentials: "B.Tech Civil (IIT), PMP Certified",
    bio: "Oversees engineering integrity, statutory approvals, contractor coordination, and meticulous on-site quality control across all active sites.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  },
];
