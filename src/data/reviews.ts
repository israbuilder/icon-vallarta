export interface Review {
  name: string;
  location: string;
  date: string;
  rating: number;
  body: string;
}

export const reviews: Review[] = [
  {
    name: "Genevieve L.",
    location: "Los Angeles, CA",
    date: "2026-05-18",
    rating: 5,
    body: "Staying at Icon Vallarta was pure magic. The private elevator opens right into your condo with floor-to-ceiling panoramic views of Banderas Bay. The infinity pool and beach club bar are five-star resort caliber.",
  },
  {
    name: "Marcus V.",
    location: "Vancouver, BC",
    date: "2026-06-02",
    rating: 5,
    body: "The architecture by Philippe Starck is breathtaking. Every detail in Tower 2 felt bespoke and ultra-luxe. The 24/7 concierge took care of our private chef dinner and catamaran charters seamlessly.",
  },
  {
    name: "Carolina S.",
    location: "Guadalajara, JAL",
    date: "2026-06-29",
    rating: 5,
    body: "As an owner at Icon Vallarta, their on-site management team is unmatched. Turnkey maintenance, impeccably manicured oceanfront gardens, and consistent rental returns year after year.",
  },
  {
    name: "David & Sarah T.",
    location: "Austin, TX",
    date: "2026-07-14",
    rating: 5,
    body: "Unrivaled oceanfront location in Puerto Vallarta. Walking directly onto the warm sand from the beach pool, sunset cocktails on our wrap-around terrace, and peaceful quiet despite being minutes from Marina Vallarta.",
  },
];
