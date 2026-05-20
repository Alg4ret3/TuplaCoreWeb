export interface EngineerSocial {
  platform: string;
  url: string;
}

export interface Engineer {
  name: string;
  email: string;
  avatar?: string;
  socials: EngineerSocial[];
}

export const engineers: Engineer[] = [
  {
    name: "Ing Sergio Muñoz",
    email: "sergio@tuplacore.com",
    avatar: "https://res.cloudinary.com/dqky6oqrd/image/upload/f_auto,q_auto/v1779309726/rndqlaeblacv3batdmus.png",
    socials: [
      { platform: "Linkedin", url: "https://linkedin.com/in/sergio-munoz" },
      { platform: "Github", url: "https://github.com/sergio-munoz" },
      { platform: "Telegram", url: "https://t.me/sergiomunoz" },
      { platform: "Portafolio", url: "https://tuplacore.com/sergio" },
      { platform: "COPNIA", url: "https://www.copnia.gov.co/servicios-al-ciudadano/consulta-de-matriculas-profesionales" }
    ]
  },
  {
    name: "Ing Maicol Coral",
    email: "maicol@tuplacore.com",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Maicol",
    socials: [
      { platform: "Linkedin", url: "https://linkedin.com/in/maicol-coral" },
      { platform: "Github", url: "https://github.com/maicol-coral" },
      { platform: "Telegram", url: "https://t.me/maicolcoral" },
      { platform: "Portafolio", url: "https://tuplacore.com/maicol" },
      { platform: "COPNIA", url: "https://www.copnia.gov.co/servicios-al-ciudadano/consulta-de-matriculas-profesionales" }
    ]
  }
];
