import book1 from "@/assets/book-1.jpg";
import book2 from "@/assets/book-2.jpg";
import book3 from "@/assets/book-3.jpg";
import book4 from "@/assets/book-4.jpg";
import manuscript1 from "@/assets/manuscript-1.jpg";
import manuscript2 from "@/assets/manuscript-2.jpg";

export const DISCORD_URL = "https://discord.gg/YmHDz6u3";

export const categories = [
  { slug: "aqeedah", name: "Aqeedah", description: "Foundations of Islamic belief and creed." },
  { slug: "tafsir", name: "Tafsir", description: "Exegesis and commentary of the Qur'an." },
  { slug: "hadith", name: "Hadith", description: "Prophetic traditions and their sciences." },
  { slug: "fiqh", name: "Fiqh", description: "Islamic jurisprudence across the schools." },
  { slug: "seerah", name: "Seerah", description: "The life of the Prophet ﷺ." },
  { slug: "history", name: "Islamic History", description: "Chronicles of the ummah." },
  { slug: "arabic", name: "Arabic Language", description: "Grammar, morphology and rhetoric." },
  { slug: "scholars", name: "Scholars", description: "Biographies of the learned." },
  { slug: "general", name: "General Islamic Studies", description: "Broader works of scholarship." },
];

export type Book = {
  id: string;
  title: string;
  arabic?: string;
  author: string;
  category: string;
  year: string;
  cover: string;
  description: string;
  featured?: boolean;
};

export const books: Book[] = [
  {
    id: "riyad-us-saliheen",
    title: "Riyāḍ al-Ṣāliḥīn",
    arabic: "رياض الصالحين",
    author: "Imām al-Nawawī",
    category: "hadith",
    year: "676 AH",
    cover: book1,
    description:
      "A luminous garden of prophetic traditions, curated by Imām al-Nawawī to nourish the soul and cultivate righteous character.",
    featured: true,
  },
  {
    id: "tafsir-ibn-kathir",
    title: "Tafsīr Ibn Kathīr",
    arabic: "تفسير ابن كثير",
    author: "Ibn Kathīr al-Dimashqī",
    category: "tafsir",
    year: "774 AH",
    cover: book2,
    description:
      "One of the most trusted classical commentaries of the Qur'an, weaving verses with hadith, sīrah, and the sayings of the salaf.",
    featured: true,
  },
  {
    id: "al-aqidah-al-wasitiyyah",
    title: "Al-ʿAqīdah al-Wāsiṭiyyah",
    arabic: "العقيدة الواسطية",
    author: "Ibn Taymiyyah",
    category: "aqeedah",
    year: "728 AH",
    cover: book3,
    description:
      "A concise and celebrated treatise setting out the creed of Ahl al-Sunnah wa'l-Jamāʿah.",
    featured: true,
  },
  {
    id: "sealed-nectar",
    title: "The Sealed Nectar",
    arabic: "الرحيق المختوم",
    author: "Ṣafiyy al-Raḥmān al-Mubārakpūrī",
    category: "seerah",
    year: "1979",
    cover: book4,
    description:
      "An award-winning biography of the Prophet ﷺ, tracing his blessed life with clarity and reverence.",
    featured: true,
  },
  {
    id: "bulugh-al-maram",
    title: "Bulūgh al-Marām",
    arabic: "بلوغ المرام",
    author: "Ibn Ḥajar al-ʿAsqalānī",
    category: "hadith",
    year: "852 AH",
    cover: book2,
    description: "A classical compilation of legal hadith drawn from the six canonical collections.",
  },
  {
    id: "minhaj-al-muslim",
    title: "Minhāj al-Muslim",
    arabic: "منهاج المسلم",
    author: "Abū Bakr al-Jazāʾirī",
    category: "general",
    year: "1964",
    cover: book1,
    description: "A comprehensive manual of belief, worship, and everyday Islamic conduct.",
  },
  {
    id: "al-ajurumiyyah",
    title: "Al-Ājurrūmiyyah",
    arabic: "الآجرومية",
    author: "Ibn Ājurrūm",
    category: "arabic",
    year: "723 AH",
    cover: book3,
    description: "A foundational text of Arabic grammar, memorized by students for centuries.",
  },
  {
    id: "fiqh-us-sunnah",
    title: "Fiqh us-Sunnah",
    arabic: "فقه السنة",
    author: "Sayyid Sābiq",
    category: "fiqh",
    year: "1946",
    cover: book4,
    description: "A modern classic presenting Islamic rulings alongside their evidences.",
  },
];

export type Archive = {
  id: string;
  title: string;
  author: string;
  date: string;
  image: string;
  description: string;
};

export const archives: Archive[] = [
  {
    id: "quran-manuscript-14th",
    title: "Illuminated Qur'an Folio",
    author: "Unknown Mamlūk scribe",
    date: "14th century",
    image: manuscript1,
    description:
      "A rare gilded folio in muḥaqqaq script, preserved in remarkable condition with delicate rosettes marking verse ends.",
  },
  {
    id: "andalusian-treatise",
    title: "Andalusian Treatise on Uṣūl",
    author: "Attributed to al-Shāṭibī",
    date: "8th century AH",
    image: manuscript2,
    description:
      "A hand-copied scroll on the foundations of jurisprudence, bearing several ijāzāt in the margins.",
  },
  {
    id: "ottoman-hadith-scan",
    title: "Ottoman Ḥadīth Codex",
    author: "Compiled in Bursa",
    date: "10th century AH",
    image: manuscript1,
    description:
      "A high-resolution digitisation of an Ottoman scholarly compilation with commentary in Arabic and Ottoman Turkish.",
  },
  {
    id: "maghribi-quran",
    title: "Maghribī Qur'an Fragment",
    author: "North African scriptorium",
    date: "6th century AH",
    image: manuscript2,
    description:
      "A fragment written in the distinctive Maghribī script on tinted parchment, restored through modern imaging.",
  },
];

export type Article = {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
};

export const articles: Article[] = [
  {
    id: "wisdom-of-nawawi",
    title: "The Enduring Wisdom of Imām al-Nawawī",
    excerpt:
      "How a young scholar from Damascus shaped centuries of Islamic learning through a life of restraint, scholarship and sincerity.",
    author: "Editorial Team",
    date: "Rabīʿ al-Awwal 1447",
    readTime: "8 min read",
    category: "Scholars",
  },
  {
    id: "gardens-in-quran",
    title: "The Language of Gardens in the Qur'an",
    excerpt:
      "From Jannat ʿAdn to the rivers beneath, we trace the recurring imagery of gardens and its spiritual resonance.",
    author: "Aisha Rahman",
    date: "Ṣafar 1447",
    readTime: "12 min read",
    category: "Tafsir",
  },
  {
    id: "history-of-baghdad",
    title: "Baghdad: The House of Wisdom Revisited",
    excerpt:
      "A tour through the golden age of Islamic learning, its manuscripts, its translators, and the legacy that reached Europe.",
    author: "Yusuf al-Baghdadi",
    date: "Muḥarram 1447",
    readTime: "15 min read",
    category: "History",
  },
  {
    id: "reflections-on-tawakkul",
    title: "Reflections on Tawakkul",
    excerpt:
      "A meditation on trusting Allah in a world of noise, drawing from the Qur'an, hadith and the writings of Ibn al-Qayyim.",
    author: "Hamza Siddiq",
    date: "Dhū al-Ḥijjah 1446",
    readTime: "6 min read",
    category: "Reflections",
  },
];

export const scholars = [
  {
    name: "Imām al-Nawawī",
    era: "631 – 676 AH",
    field: "Hadith & Fiqh",
    bio: "Ascetic scholar of Damascus whose works are read from Fes to Jakarta.",
  },
  {
    name: "Ibn Taymiyyah",
    era: "661 – 728 AH",
    field: "Aqeedah & Fiqh",
    bio: "A prolific reformer and jurist whose writings shaped Islamic thought for centuries.",
  },
  {
    name: "Ibn al-Qayyim",
    era: "691 – 751 AH",
    field: "Spirituality & Fiqh",
    bio: "Beloved for his tender writings on the heart and its rectification.",
  },
];

export const resources = [
  {
    title: "Recommended Reading Path",
    description: "A guided curriculum from foundational texts to advanced works.",
    kind: "Study Path",
  },
  {
    title: "Audio Lectures Archive",
    description: "Timeless lessons from trusted scholars, curated by topic.",
    kind: "Lectures",
  },
  {
    title: "Research Tools",
    description: "Reference libraries, hadith databases and Arabic dictionaries.",
    kind: "Tools",
  },
  {
    title: "Learning Arabic",
    description: "A collection of textbooks, apps and reciters for language study.",
    kind: "Language",
  },
];

export const quote = {
  text: "Seek knowledge from the cradle to the grave.",
  attribution: "Prophetic tradition",
};
