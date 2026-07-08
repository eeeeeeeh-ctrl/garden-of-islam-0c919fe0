export type Subtopic = {
  slug: string;
  title: string;
  arabic?: string;
  summary: string;
};

export type Section = {
  slug: string;
  name: string;
  arabic: string;
  tagline: string;
  intro: string;
  subtopics: Subtopic[];
};

export const sections: Section[] = [
  {
    slug: "fiqh",
    name: "Fiqh",
    arabic: "الفِقْه",
    tagline: "Jurisprudence of the ummah",
    intro:
      "A structured library of jurisprudential works, treatises, and scans across the recognised schools of Sunni fiqh.",
    subtopics: [
      { slug: "purification", title: "Purification and Prayer", arabic: "الطَّهَارَة وَالصَّلَاة", summary: "Foundational chapters on ṭahārah, wuḍūʾ, ghusl, and the pillars of ṣalāh." },
      { slug: "fasting-zakat", title: "Fasting and Zakāh", arabic: "الصِّيَام وَالزَّكَاة", summary: "Rulings, calculations, and classical treatises on the acts of worship of Ramaḍān and wealth." },
      { slug: "transactions", title: "Muʿāmalāt", arabic: "الْمُعَامَلَات", summary: "Commerce, contracts, ribā, and contemporary financial questions." },
      { slug: "family", title: "Family and Marriage", arabic: "الْأَحْوَال الشَّخْصِيَّة", summary: "Nikāḥ, ṭalāq, inheritance, and family jurisprudence." },
      { slug: "comparative", title: "Comparative Fiqh", arabic: "الْفِقْه الْمُقَارَن", summary: "Cross-madhhab comparison of core juristic questions with primary sources." },
    ],
  },
  {
    slug: "sunni-archive",
    name: "Sunni Archive",
    arabic: "الْأَرْشِيف السُّنِّي",
    tagline: "A preserved record of Ahl al-Sunnah",
    intro:
      "Curated scans, treatises, and primary-source excerpts from the tradition of Ahl al-Sunnah wa al-Jamāʿah.",
    subtopics: [
      { slug: "creed-foundations", title: "Foundations of Creed", arabic: "أُصُول الْعَقِيدَة", summary: "Classical creedal statements from the salaf and early imāms." },
      { slug: "hadith-corpus", title: "Hadith Corpus", arabic: "دَوَاوِين السُّنَّة", summary: "The six canonical collections and the secondary corpora." },
      { slug: "biographies", title: "Rijāl and Tarājim", arabic: "الرِّجَال وَالتَّرَاجِم", summary: "Biographical dictionaries and evaluations of narrators." },
      { slug: "historic-fatawa", title: "Historic Fatāwā", arabic: "الْفَتَاوَى الْقَدِيمَة", summary: "Selected fatwā compilations from major muftīs across the centuries." },
    ],
  },
  {
    slug: "ashariyyah-madhahib",
    name: "Ashʿariyyah and the Madhāhib",
    arabic: "الْأَشْعَرِيَّة وَالْمَذَاهِب",
    tagline: "Theological and juristic schools",
    intro:
      "Primary works of the Ashʿarī school of theology and reference materials from the four Sunni madhāhib.",
    subtopics: [
      { slug: "ashari-kalam", title: "Ashʿarī Kalām", arabic: "عِلْم الْكَلَام الْأَشْعَرِي", summary: "Foundational treatises from al-Ashʿarī, al-Bāqillānī, al-Juwaynī, al-Ghazālī, and al-Rāzī." },
      { slug: "hanafi", title: "The Ḥanafī School", arabic: "الْمَذْهَب الْحَنَفِي", summary: "Core matn works and their principal commentaries." },
      { slug: "maliki", title: "The Mālikī School", arabic: "الْمَذْهَب الْمَالِكِي", summary: "The Muwaṭṭaʾ tradition and the great texts of Qayrawān and Fes." },
      { slug: "shafii", title: "The Shāfiʿī School", arabic: "الْمَذْهَب الشَّافِعِي", summary: "From al-Umm to the works of al-Nawawī and Ibn Ḥajar." },
      { slug: "hanbali", title: "The Ḥanbalī School", arabic: "الْمَذْهَب الْحَنْبَلِي", summary: "The Musnad, Mukhtaṣar al-Khiraqī, and the Ḥanbalī encyclopaedic tradition." },
    ],
  },
  {
    slug: "aql",
    name: "ʿAql",
    arabic: "الْعَقْل",
    tagline: "Reason within the tradition",
    intro:
      "The place of intellect in Islamic thought: uṣūl, logic, philosophy, and the epistemology of the classical schools.",
    subtopics: [
      { slug: "usul-fiqh", title: "Uṣūl al-Fiqh", arabic: "أُصُول الْفِقْه", summary: "Legal theory and the sources of jurisprudence." },
      { slug: "logic-mantiq", title: "Logic (Manṭiq)", arabic: "الْمَنْطِق", summary: "Ᾱjurrūmiyyah, al-Sullam, and the Islamic tradition of logic." },
      { slug: "philosophy-falsafa", title: "Falsafa and its Response", arabic: "الْفَلْسَفَة وَنَقْدُهَا", summary: "The philosophical tradition and its classical Sunni engagement." },
      { slug: "epistemology", title: "Epistemology", arabic: "نَظَرِيَّة الْمَعْرِفَة", summary: "How the classical scholars understood knowledge, certainty, and evidence." },
    ],
  },
  {
    slug: "arbaah-aimmah",
    name: "Al-Arbaʿah al-Aʾimmah",
    arabic: "الْأَرْبَعَة الْأَئِمَّة",
    tagline: "The four great imāms",
    intro:
      "Dedicated resources on the founders of the four Sunni schools: Abū Ḥanīfah, Mālik, al-Shāfiʿī, and Aḥmad.",
    subtopics: [
      { slug: "abu-hanifah", title: "Imām Abū Ḥanīfah", arabic: "الْإِمَام أَبُو حَنِيفَة", summary: "Life, students, and juristic method of the imām of Kufa." },
      { slug: "malik", title: "Imām Mālik ibn Anas", arabic: "الْإِمَام مَالِك بْن أَنَس", summary: "The imām of Madīnah and the school of the ahl al-ʿamal." },
      { slug: "shafii", title: "Imām al-Shāfiʿī", arabic: "الْإِمَام الشَّافِعِي", summary: "Founder of uṣūl al-fiqh as a formal discipline." },
      { slug: "ahmad", title: "Imām Aḥmad ibn Ḥanbal", arabic: "الْإِمَام أَحْمَد بْن حَنْبَل", summary: "The imām of ahl al-ḥadīth and his enduring Musnad." },
    ],
  },
  {
    slug: "scholars",
    name: "Important Scholars",
    arabic: "أَعْلَام الْعُلَمَاء",
    tagline: "Lives that shaped the tradition",
    intro:
      "Biographical entries and selected writings of scholars whose works form the backbone of the Islamic sciences.",
    subtopics: [
      { slug: "early-generations", title: "The Early Generations", arabic: "السَّلَف", summary: "The Companions, Tābiʿūn, and their immediate successors." },
      { slug: "hadith-masters", title: "Masters of Hadith", arabic: "أَئِمَّة الْحَدِيث", summary: "Al-Bukhārī, Muslim, al-Tirmidhī, al-Nasāʾī, and the great muḥaddithūn." },
      { slug: "theologians", title: "Theologians and Uṣūliyyūn", arabic: "الْمُتَكَلِّمُون وَالْأُصُولِيُّون", summary: "Al-Ashʿarī, al-Ghazālī, al-Rāzī, and the later verifiers." },
      { slug: "spiritual", title: "Scholars of the Heart", arabic: "أَهْل السُّلُوك", summary: "Ibn al-Qayyim, al-Muḥāsibī, al-Qushayrī, and the tradition of tazkiyah." },
    ],
  },
  {
    slug: "refutations",
    name: "Refutations",
    arabic: "الرُّدُود",
    tagline: "Clarity in defence of the tradition",
    intro:
      "Classical and contemporary refutations, arranged with primary sources and scholarly attribution.",
    subtopics: [
      { slug: "deviant-sects", title: "Historical Sects", arabic: "الْفِرَق", summary: "Documented positions and responses across the centuries." },
      { slug: "modern-currents", title: "Modern Currents", arabic: "الْمَذَاهِب الْمُعَاصِرَة", summary: "Careful, source-based engagement with contemporary ideas." },
      { slug: "orientalism", title: "Orientalist Claims", arabic: "الِاسْتِشْرَاق", summary: "A survey of claims made against the tradition and how they have been answered." },
    ],
  },
];

export function getSection(slug: string) {
  return sections.find((s) => s.slug === slug);
}
