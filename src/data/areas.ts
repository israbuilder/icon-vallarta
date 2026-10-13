export interface Area {
  name: string;
  slug: string;
  seoTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  h1: string;
  intro: string[];
  localChallenges: string;
  zips: string[];
  topServices: string[];
}

export const areas: Area[] = [
  {
    name: "Zona Hotelera Norte",
    slug: "zona-hotelera-norte",
    seoTitle: "Renta de Condominios en Zona Hotelera Norte | Icon Vallarta",
    metaDescription: "Renta condominios de lujo en la Zona Hotelera Norte de Puerto Vallarta. Icon Vallarta a pie de playa con alberca infinity, club de playa y vistas al mar.",
    heroEyebrow: "Ubicación Privilegiada a Pie de Playa",
    h1: "Zona Hotelera Norte, Puerto Vallarta",
    intro: [
      "La Zona Hotelera Norte es el corredor residencial y turístico más cotizado de Puerto Vallarta. Situado directamente sobre la playa, Icon Vallarta destaca con sus tres imponentes torres de cristal diseñadas por Philippe Starck y Arquitectonica.",
      "Hospedarte aquí te coloca a solo 10 minutos del Aeropuerto Internacional (PVR), a pasos del centro comercial La Isla y a minutos de los mejores restaurantes gourmet de la ciudad, con la ventaja de estar en una playa amplia de arena suave.",
    ],
    localChallenges: "Muchos hoteles de la zona cobran tarifas elevadas con habitaciones pequeñas. Rentar un condominio en Icon Vallarta te ofrece departamentos completos de hasta 3 recámaras o penthouses con cocina integral, elevador privado y amenidades de resort.",
    zips: ["48333", "48315", "48310"],
    topServices: [
      "condominios-2-recamaras",
      "penthouses-de-lujo",
      "condominios-1-recamara",
      "servicios-concierge-vip",
    ],
  },
  {
    name: "Marina Vallarta",
    slug: "marina-vallarta",
    seoTitle: "Renta de Condominios cerca de Marina Vallarta | Icon Vallarta",
    metaDescription: "Hospédate a minutos de Marina Vallarta en condominios de lujo Icon Vallarta. Disfruta de yates, campos de golf de campeonato y el malecón de la marina.",
    heroEyebrow: "A 5 Minutos de Yates y Golf",
    h1: "Marina Vallarta & Campo de Golf",
    intro: [
      "Marina Vallarta es famosa por su prestigioso club de yates, su malecón peatonal repleto de restaurantes frente al agua y su campo de golf de 18 hoyos. Icon Vallarta se ubica a solo 5 minutos hacia el sur, ofreciendo la estancia frente a la playa que la marina no tiene.",
      "Es el punto de partida perfecto para quienes buscan zarpar en velero o catamarán por la bahía y regresar a descansar a un condominio de diseñador con vista al mar y servicio de playa.",
    ],
    localChallenges: "Los alojamientos dentro de la marina dan a los canales pero no tienen playa directa. Icon Vallarta brinda lo mejor de ambos mundos: salida directa a la playa y proximidad inmediata a la marina.",
    zips: ["48354", "48350"],
    topServices: [
      "servicios-concierge-vip",
      "condominios-2-recamaras",
      "penthouses-de-lujo",
      "villas-frente-al-mar",
    ],
  },
  {
    name: "Zona Romántica (Olas Altas)",
    slug: "zona-romantica",
    seoTitle: "Renta Vacacional cerca de la Zona Romántica | Icon Vallarta",
    metaDescription: "Disfruta de condominios de lujo frente al mar a pocos minutos de la Zona Romántica y Los Muertos en Puerto Vallarta con Icon Vallarta.",
    heroEyebrow: "Cultura, Arte y Vida Nocturna",
    h1: "Zona Romántica & Playa Los Muertos",
    intro: [
      "El corazón histórico y bohemio de Puerto Vallarta, la Zona Romántica cautiva con calles empedradas, galerías de arte, bares de moda y el muelle de Los Muertos. Sin embargo, su bullicio continuo puede resultar agotador para el descanso.",
      "Icon Vallarta te permite disfrutar de toda la gastronomía y vida nocturna del centro durante el día o la noche, regresando a un santuario privado de paz, con elevador directo y albercas climatizadas frente al océano.",
    ],
    localChallenges: "Los departamentos en el centro suelen ser ruidosos y carecer de áreas verdes o albercas grandes. En Icon Vallarta gozas de aislamiento acústico de primer nivel y amplias áreas de descanso frente a la playa.",
    zips: ["48380", "48399"],
    topServices: [
      "condominios-1-recamara",
      "condominios-2-recamaras",
      "penthouses-de-lujo",
      "servicios-concierge-vip",
    ],
  },
  {
    name: "Versalles & Fluvial Vallarta",
    slug: "fluvial-vallarta",
    seoTitle: "Condominios cerca del Distrito Gastronómico Versalles | Icon Vallarta",
    metaDescription: "Renta de condominios frente al mar a minutos de Versalles y Fluvial Vallarta, la capital gastronómica foodie de Puerto Vallarta.",
    heroEyebrow: "Distrito Culinario & Cafeterías",
    h1: "Versalles & Fluvial Vallarta",
    intro: [
      "Versalles se ha consolidado como el barrio gastronómico más vibrante de Puerto Vallarta, repleto de bistrós de autor, panaderías artesanales, marisquerías y cervecerías artesanales. Icon Vallarta está ubicado justo frente a esta codiciada zona.",
      "Podrás caminar o tomar un breve trayecto en coche para deleitarte con la mejor cocina local e internacional y regresar a tu condominio a ver el atardecer desde tu terraza.",
    ],
    localChallenges: "Versalles no cuenta con acceso a la playa. Al hospedarte en Icon Vallarta disfrutas de acceso directo a la playa dorada y tienes el distrito culinario de Versalles justo detrás.",
    zips: ["48310", "48315"],
    topServices: [
      "condominios-1-recamara",
      "condominios-2-recamaras",
      "condominios-3-recamaras",
      "servicios-concierge-vip",
    ],
  },
  {
    name: "Conchas Chinas & Amapas",
    slug: "conchas-chinas",
    seoTitle: "Condominios de Lujo cerca de Conchas Chinas | Icon Vallarta",
    metaDescription: "Renta condominios de lujo en Puerto Vallarta frente a la playa. Acceso fácil a las caletas escénicas de Conchas Chinas y la costa sur.",
    heroEyebrow: "Costa Escénica del Sur",
    h1: "Conchas Chinas & Costa Sur",
    intro: [
      "Conocida por sus caletas de agua esmeralda y residencias en los acantilados, la costa sur de Vallarta ofrece paisajes espectaculares hacia Los Arcos de Mismaloya y Boca de Tomatlán.",
      "Icon Vallarta te brinda el mismo nivel de exclusividad residencial, pero con playas amplias y planas, albercas a nivel del mar y sin las complicadas pendientes montañosas.",
    ],
    localChallenges: "Las villas en acantilados tienen accesos difíciles y escaleras empinadas. Icon Vallarta ofrece movilidad cómoda con elevadores directos y acceso a la playa sin barreras.",
    zips: ["48399"],
    topServices: [
      "penthouses-de-lujo",
      "villas-frente-al-mar",
      "condominios-3-recamaras",
      "servicios-concierge-vip",
    ],
  },
  {
    name: "Nuevo Nayarit & Riviera Nayarit",
    slug: "nuevo-vallarta",
    seoTitle: "Renta de Condominios cerca de Nuevo Nayarit | Icon Vallarta",
    metaDescription: "Conecta Puerto Vallarta y Riviera Nayarit desde Icon Vallarta. Renta de condominios frente al mar con servicio de concierge y club de playa.",
    heroEyebrow: "Puerta de Entrada a Riviera Nayarit",
    h1: "Nuevo Nayarit (Nuevo Vallarta)",
    intro: [
      "Al norte del río Ameca comienza la Riviera Nayarit, con kilómetros de playas abiertas, spas y clubes de golf. Desde Icon Vallarta llegas a Nuevo Nayarit en menos de 15 minutos.",
      "Es la ubicación estratégica ideal para quienes desean explorar tanto las playas y pueblos surf de Nayarit (Bucerías, Sayulita, Punta Mita) como la vibrante vida nocturna de Puerto Vallarta.",
    ],
    localChallenges: "Hospedarse en Nayarit aleja a los viajeros del centro histórico de Vallarta. Icon Vallarta ofrece el punto medio ideal para disfrutar ambos estados en un solo viaje.",
    zips: ["63735", "63732"],
    topServices: [
      "condominios-2-recamaras",
      "condominios-3-recamaras",
      "penthouses-de-lujo",
      "villas-frente-al-mar",
    ],
  },
];
