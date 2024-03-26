import AF1Lv08 from "../resources/images/af1_07_lv8.webp";
import JordanThunder from "../resources/images/air_jordan_4_thunder.webp";
import JordanLakers from "../resources/images/jordan_1_low_lakers.webp";
import LostFound from "../resources/images/jordan_lost_found.webp";
import LuckyGreen from "../resources/images/jordan_lucky_green.webp";
import JordanWhyNot from "../resources/images/jordan_why_not.webp";
import DualRun from "../resources/images/joyride_dual_run.webp";
import KyrieFlytrap from "../resources/images/kyrie_flytrap.webp";
import LebronAllStar from "../resources/images/lebron_xx_all_star.webp";
import LukaAI from "../resources/images/luka_luk_ai.webp";
import LvNikeAf1 from "../resources/images/lv_nike_af1.webp";
import PumaCharm from "../resources/images/puma_charmander.webp";
import RivalFly from "../resources/images/rival_fly_3.webp";
import TatumPinkLemon from "../resources/images/tatum_pink_lemon.webp";
import YeezyOnyx from "../resources/images/yeezy_350.webp";
import JordanZion from "../resources/images/zion_2.webp";
import KobeGrinch from "../resources/images/kobe_grinch.webp";
import VoomeroDorn from "../resources/images/voomero_dornbeck.webp";
import Jordan4Sb from "../resources/images/jordan_4_sb_pine.webp";
import PumaGear5 from "../resources/images/puma_gear_5.webp";
import KobeReverseGrinch from "../resources/images/kobe_reverse_grinch.webp";
import JordanYearOfDragon from "../resources/images/jordan_year_of_dragon.webp";

const sneakerConfig = [
  {
    URL: "https://www.goat.com/en-gb/sneakers/jordan-why-not-zer0-5-childhood-dc3637-500",
    purchaseLocation: "Nike, Mumbai, March 2022",
    sneakerName: "Jordan Why Not Zer0.5 'Childhood'",
    styleNumber: "DC3637-500",
    dollarPrice: 150,
    purchaseOrder: 1,
    brand: "Jordan",
    image: JordanWhyNot,
    status: "OWNED",
    color: "White",
    releaseDate: "01 MARCH 2022",
    detailHex: '#000000',
    iconHex: '#FFFFFF'
  },
  {
    URL: "https://www.goat.com/en-gb/sneakers/air-zoom-rival-fly-3-fast-pack-ct2405-700",
    purchaseLocation: "Nike, Mumbai, March 2022",
    sneakerName: "Air Zoom Rival Fly 3 Fast Pack",
    styleNumber: "CT2405-700",
    dollarPrice: 80,
    purchaseOrder: 2,
    brand: "Nike",
    image: RivalFly,
    status: "OWNED",
    color: "Green",
    releaseDate: "10 SEPTEMBER 2021",
    detailHex: '#D2E1AA',
    iconHex: '#D2E1AA'
  },
  {
    URL: "https://www.goat.com/en-gb/sneakers/joyride-dual-run-track-red-cd4365-600",
    purchaseLocation: "Sneaker District, Abu Dhabi, August 2022",
    sneakerName: "Nike Joyride Dual Run Track Red",
    styleNumber: "CD4365-600",
    dollarPrice: 130,
    purchaseOrder: 3,
    brand: "Nike",
    image: DualRun,
    status: "OWNED",
    color: "Red",
    releaseDate: "14 JANUARY 2022",
    detailHex: '#9F0D2E',
    iconHex: '#9F0D2E'
  },
  {
    URL: "https://www.goat.com/en-gb/sneakers/jordan-zion-2-dynamic-turquoise-do9161-107",
    purchaseLocation: "Nike, Mumbai, August 2022",
    sneakerName: "Jordan Zion 2 'Dynamic Turquoise'",
    styleNumber: "DO9161-107",
    dollarPrice: 120,
    purchaseOrder: 4,
    brand: "Jordan",
    image: JordanZion,
    status: "OWNED",
    color: "White",
    releaseDate: "29 JUNE 2022",
    detailHex: '#000000',
    iconHex: '#FFFFFF'
  },
  {
    URL: "https://www.goat.com/en-gb/sneakers/yeezy-boost-350-v2-onyx-hq4540",
    purchaseLocation: "Sneaker District, Abu Dhabi, November 2022",
    sneakerName: "Yeezy Boost 350 V2 'Onyx'",
    styleNumber: "HQ4540",
    dollarPrice: 230,
    purchaseOrder: 5,
    brand: "Adidas",
    image: YeezyOnyx,
    status: "OWNED",
    color: "Black",
    releaseDate: "05 MARCH 2022",
    detailHex: '#000000',
    iconHex: '#FFFFFF'
  },
  {
    URL: "https://www.goat.com/sneakers/kyrie-flytrap-4-ep-crimson-pulse-ct1973-800",
    purchaseLocation: "Sneaker District, Abu Dhabi, November 2022",
    sneakerName: "Kyrie Flytrap 4 'Crimson Pulse'",
    styleNumber: "CT1973-800",
    dollarPrice: 90,
    purchaseOrder: 6,
    brand: "Nike",
    image: KyrieFlytrap,
    status: "OWNED",
    color: "Orange",
    releaseDate: "08 FEBRUARY 2021",
    detailHex: '#FD9C7D',
    iconHex: '#FD9C7D'
  },
  {
    URL: "https://www.goat.com/en-gb/sneakers/air-jordan-1-low-dark-concord-553558-075",
    purchaseLocation: "Superkicks, Bangalore, December 2022",
    sneakerName: "Air Jordan 1 Low 'Lakers'",
    styleNumber: "553558-075",
    dollarPrice: 100,
    purchaseOrder: 7,
    brand: "Jordan",
    image: JordanLakers,
    status: "OWNED",
    color: "Black",
    releaseDate: "06 DECEMBER 2022",
    detailHex: '#F0C242',
    iconHex: '#F0C242'
  },
  {
    URL: "https://www.goat.com/en-gb/sneakers/air-force-1-07-lv8-moving-company-black-dv0794-001",
    purchaseLocation: "Nike, Mumbai, March 2023",
    sneakerName: "Air Force 1 '07 LV8",
    styleNumber: "DV0794-001",
    dollarPrice: 130,
    purchaseOrder: 8,
    brand: "Nike",
    image: AF1Lv08,
    status: "OWNED",
    color: "Black",
    releaseDate: "09 FEBRUARY 2023",
    detailHex: '#000000',
    iconHex: '#FFFFFF'
  },
  {
    URL: "https://www.goat.com/en-gb/sneakers/air-jordan-4-retro-thunder-2023-dh6927-017",
    purchaseLocation: "Superkicks, Bangalore, May 2023",
    sneakerName: "Air Jordan 4 'Thunder'",
    styleNumber: "DH6927-017",
    dollarPrice: 210,
    purchaseOrder: 9,
    brand: "Jordan",
    image: JordanThunder,
    status: "OWNED",
    color: "Black",
    releaseDate: "13 MAY 2023",
    detailHex: '#E7C502',
    iconHex: '#E7C502'
  },
  {
    URL: "https://www.goat.com/en-gb/sneakers/louis-vuitton-x-air-force-1-low-team-royal-friends-family-ms1211-royal",
    purchaseLocation: "Gift, Bangalore, May 2023",
    sneakerName: "Louis Vuitton x Air Force 1 Low 'Team Royal'",
    styleNumber: "MS1211-ROYAL",
    dollarPrice: 0,
    purchaseOrder: 10,
    brand: "Nike",
    image: LvNikeAf1,
    status: "OWNED",
    color: "Blue",
    releaseDate: "JULY 19 2021",
    detailHex: '#3D5DB2',
    iconHex: '#3D5DB2'
  },
  {
    URL: "https://www.goat.com/sneakers/lebron-20-all-star-dv1191-400",
    purchaseLocation: "VegNonVeg, Bangalore, May 2023",
    sneakerName: "Lebron XX 'All Star'",
    styleNumber: "DV1191-400",
    dollarPrice: 200,
    purchaseOrder: 11,
    brand: "Nike",
    image: LebronAllStar,
    status: "OWNED",
    color: "Blue",
    releaseDate: "16 FEBRUARY 2023",
    detailHex: '#5DAFCC',
    iconHex: '#5DAFCC'
  },
  {
    URL: "https://www.goat.com/en-gb/sneakers/jordan-tatum-1-pink-lemonade-dv6208-600",
    purchaseLocation: "Nike, Bangalore, June 2023",
    sneakerName: "Tatum 1 'Pink Lemonade'",
    styleNumber: "DV6208-600",
    dollarPrice: 120,
    purchaseOrder: 12,
    brand: "Jordan",
    image: TatumPinkLemon,
    status: "OWNED",
    color: "Pink",
    releaseDate: "20 JUNE 2023",
    detailHex: '#FFC8BD',
    iconHex: '#FFC8BD'
  },
  {
    URL: "https://www.goat.com/en-gb/sneakers/pokemon-x-slipstream-lo-charmander-387686-01",
    purchaseLocation: "Puma, Bangalore, July 2023",
    sneakerName: "Pokémon x Slipstream Lo 'Charmander'",
    styleNumber: "387686-01",
    dollarPrice: 100,
    purchaseOrder: 13,
    brand: "Puma",
    image: PumaCharm,
    status: "OWNED",
    color: "Orange",
    releaseDate: "12 NOVEMBER 2022",
    detailHex: '#EB940D',
    iconHex: '#EB940D'
  },
  {
    URL: "https://www.goat.com/en-gb/sneakers/air-jordan-1-retro-high-og-lucky-green-dz5485-031",
    purchaseLocation: "Gift, Bangalore, July 2023",
    sneakerName: "Air Jordan 1 Retro High OG 'Lucky Green'",
    styleNumber: "DZ5485-031",
    dollarPrice: 180,
    purchaseOrder: 14,
    brand: "Jordan",
    image: LuckyGreen,
    status: "OWNED",
    color: "Green",
    releaseDate: "15 APRIL 2023",
    detailHex: '#01A066',
    iconHex: '#01A066'
  },
  {
    URL: "https://www.goat.com/en-gb/sneakers/air-jordan-1-retro-high-og-dz5485-612",
    purchaseLocation: "Gift, Bangalore, July 2023",
    sneakerName: "Air Jordan 1 Retro High OG 'Chicago Lost & Found'",
    styleNumber: "DZ5485-612",
    dollarPrice: 180,
    purchaseOrder: 15,
    brand: "Jordan",
    image: LostFound,
    status: "OWNED",
    color: "Red",
    releaseDate: "19 NOVEMBER 2022",
    detailHex: '#AC2C30',
    iconHex: '#AC2C30'
  },
  {
    URL: "https://www.goat.com/en-gb/sneakers/jordan-luka-2-space-hunter-dx8733-001",
    purchaseLocation: "Nike, Mumbai, August 2023",
    sneakerName: "Jordan Luka 2 'Luk.AI'",
    styleNumber: "DX8733-001",
    dollarPrice: 130,
    purchaseOrder: 16,
    brand: "Jordan",
    image: LukaAI,
    status: "OWNED",
    color: "Black",
    releaseDate: "11 JULY 2023",
    detailHex: '#7EBAC1',
    iconHex: '#7EBAC1'
  },
  {
    URL: "https://www.goat.com/en-gb/sneakers/zoom-kobe-6-protro-grinch-cw2190-300",
    purchaseLocation: "Gift, Bangalore, August 2023",
    sneakerName: "Zoom Kobe 6 Protro 'Grinch'",
    styleNumber: "CW2190-300",
    dollarPrice: 190,
    purchaseOrder: 17,
    brand: "Nike",
    image: KobeGrinch,
    status: "OWNED",
    color: "Green",
    releaseDate: "24 DECEMBER 2020",
    detailHex: '#C9E15E',
    iconHex: '#C9E15E'
  },
    {
    URL: "https://www.goat.com/en-gb/sneakers/nike-sb-x-air-jordan-4-retro-pine-green-dr5415-103",
    purchaseLocation: "Gift, Bangalore, November 2023",
    sneakerName: "Nike SB x Air Jordan 4 Retro SP 'Pine Green'",
    styleNumber: "DR5415-103",
    dollarPrice: 225,
    purchaseOrder: 18,
    brand: "Jordan",
    image: Jordan4Sb,
    status: "OWNED",
    color: "White",
    releaseDate: "21 MARCH 2023",
    detailHex: '#027D54',
    iconHex: '#027D54'
  },
  {
    URL: "https://www.goat.com/sneakers/air-jordan-1-low-og-chinese-new-year-year-of-the-dragon-fn3727-100",
    purchaseLocation: "Street Junkies, Bangalore, January 2024",
    sneakerName: "Air Jordan 1 Retro Low OG 'Year of the Dragon' (2024)",
    styleNumber: "FN3727-100",
    dollarPrice: 160,
    purchaseOrder: 19,
    brand: "Jordan",
    image: JordanYearOfDragon,
    status: "OWNED",
    color: "Green",
    releaseDate: "24 JANUARY 2024",
    detailHex: '#C2AB73',
    iconHex: '#C2AB73'
  },
  {
    URL: "https://www.goat.com/sneakers/zoom-kobe-6-protro-reverse-grinch-fv4921-600",
    purchaseLocation: "Street Junkies, Bangalore, March 2024",
    sneakerName: "Zoom Kobe 6 Protro 'Reverse Grinch'",
    styleNumber: "FV4921-600",
    dollarPrice: 190,
    purchaseOrder: 20,
    brand: "Nike",
    image: KobeReverseGrinch,
    status: "OWNED",
    color: "Red",
    releaseDate: "15 DECEMBER 2023",
    detailHex: '#C32828',
    iconHex: '#C32828'
  },
  {
    URL: "https://www.goat.com/sneakers/one-piece-x-suede-whitebeard-396524-01",
    purchaseLocation: "StockX, March 2024",
    sneakerName: "One Piece x Suede 'Straw Hat Luffy'",
    styleNumber: "396524-01",
    dollarPrice: 85,
    purchaseOrder: 21,
    brand: "Puma",
    image: PumaGear5,
    status: "OWNED",
    color: "White",
    releaseDate: "23 MARCH 2024",
    detailHex: '#9B92F2',
    iconHex: '#9B92F2'
  },
  {
    URL: "https://www.goat.com/en-gb/sneakers/air-zoom-vomero-5-doernbecher-2023-fd9711-602",
    purchaseLocation: "N/A",
    sneakerName: "Air Zoom Vomero 5 'Doernbecher 2023'",
    styleNumber: "FD9711-602",
    dollarPrice: 180,
    purchaseOrder: 2,
    brand: "Nike",
    image: VoomeroDorn,
    status: "WISH LIST",
    color: "Orange",
    releaseDate: "25 FEBRUARY 2023",
    detailHex: '#FDB867',
    iconHex: '#FDB867'
  }
];

export { sneakerConfig };
