// background
import percentBunner from "../assets/background/percentBunner.jpg";
import coffeeBunner from "../assets/background/coffeeBunner.jpg";
import error404 from "../assets/background/error404.png";
import friesSVG from "../assets/background/fries.svg";
import hotdog from "../assets/background/hotdog.jpg";
import tableBg from "../assets/background/tableBg.jpg";
import kidsBunner from "../assets/background/kidsBunner.jpg";
import seedsBg from "../assets/background/seedsBg.jpg";

// decorations
import beerMug from "../assets/decorations/beerMug.png";
import coffeeBeans from "../assets/decorations/coffeeBeans.jpg";
import hotDog from "../assets/decorations/hotDog.jpg";
import unitedCoffeeBurger from "../assets/decorations/unitedCoffeeBurger.png";
import saladLeaves from "../assets/decorations/saladLeaves.jpg";

// icons
import coffeeIcon from "../assets/icons/coffeeIcon.png";
import curcledLogo from "../assets/icons/curcledLogo.png";
import textLogo from "../assets/icons/textLogo.png";

// instagram
import coffeeInstagram from "../assets/instagram/coffeeInstagram.jpg";
import burgerInstagram from "../assets/instagram/burgerInstagram.jpg";
import drinkCoffeeInstagram from "../assets/instagram/drinkCoffeeInstagram.jpg";
import cocktailInstagram from "../assets/instagram/cocktailInstagram.jpg";

// lotties
import openClose from "../assets/lotties/openClose.json";
import cooking from "../assets/lotties/cooking.json";

// videos
import cafeFootage from "../assets/videos/cafeFootage.mp4";

// gifs
import coffeeGif from "../assets/gifs/coffeeGif.gif";

export default {
  percentBunner,
  coffeeBunner,
  error404,
  friesSVG,
  hotdog,
  tableBg,
  kidsBunner,
  seedsBg,
  coffeeGif,
  beerMug,
  coffeeBeans,
  hotDog,
  unitedCoffeeBurger,
  saladLeaves,
  coffeeIcon,
  curcledLogo,
  textLogo,
  coffeeInstagram,
  burgerInstagram,
  drinkCoffeeInstagram,
  cocktailInstagram,
  openClose,
  cooking,
  cafeFootage,
  coffeeGif,
};


export const adminData = { login: "admin", password: "admin123" };

export const superAdminData = { login: "superadmin", password: "superadmin123" };

export const newsData = [
  {
    id: 1,
    name: "Бонусні накопичення",
    image: percentBunner,
    article:
      "За кожним замовленням у нас, ви автоматично отримуєте 5% бонусних накопичень. Ці бонуси можна використовувати як реальні гроші для зниження вартості вашого наступного візиту до нашого кафе.",
  },
  {
    id: 2,
    name: "Сімейне кафе",
    image: kidsBunner,
    article:
      "Завітайте до нас з вашими малятами! Ми завжди щасливі вас прийняти, нагодувати смачними стравами та створити затишну атмосферу у будь-який час доби.",
  },
  {
    id: 3,
    name: "Наша кава",
    image: coffeeBunner,
    article:
      "Поширюються слухи, що у нас в місті найсмачніша кава. Завітай і переконайся, що ці чутки - не просто слова. Наші баристи завжди готові пригостити вас вишуканою кавою та створити неперевершений смаковий досвід.",
  },
];

export const instagramData = [
  {
    id: 1,
    link: "https://www.instagram.com/drink.food.zp/",
    image: coffeeInstagram,
  },
  {
    id: 2,
    link: "https://www.instagram.com/drink.food.zp/",
    image: burgerInstagram,
  },
  {
    id: 3,
    link: "https://www.instagram.com/drink.food.zp/",
    image: drinkCoffeeInstagram,
  },
  {
    id: 4,
    link: "https://www.instagram.com/drink.food.zp/",
    image: cocktailInstagram,
  },
];

export const menuData = [
  {
    id: 1,
    name: "Кава",
    image: "coffee-image.png",
    icon: "BiSolidCoffeeBean",
    products: [
      {
        id: 1,
        name: "Еспресо",
        price: 30,
        capacity: 110,
        units: "мл",
        categoryId: 1,
      },
      {
        id: 2,
        name: "Доппіо",
        price: 45,
        capacity: 180,
        units: "мл",
        categoryId: 1,
      },
      {
        id: 3,
        name: "Амерікано",
        price: 40,
        capacity: 180,
        units: "мл",
        categoryId: 1,
      },
      {
        id: 4,
        name: "Флет-Вайт",
        price: 57,
        capacity: 270,
        units: "мл",
        categoryId: 1,
      },
      {
        id: 5,
        name: "Лате",
        price: 55,
        capacity: 340,
        units: "мл",
        categoryId: 1,
      },
      {
        id: 6,
        name: "Капучино",
        price: 55,
        capacity: 340,
        units: "мл",
        categoryId: 1,
      },
      {
        id: 7,
        name: "Кава Раф",
        price: 68,
        capacity: 340,
        units: "мл",
        categoryId: 1,
      },
      {
        id: 8,
        name: "Какао",
        price: 60,
        capacity: 420,
        units: "мл",
        categoryId: 1,
      },
    ],
  },
  {
    id: 2,
    name: "Чай",
    image: "tea-image.png",
    icon: "PiCoffeeFill",
    products: [
      {
        id: 9,
        name: "Чай Малина",
        price: 55,
        capacity: 420,
        units: "мл",
        categoryId: 2,
      },
      {
        id: 10,
        name: "Чай Обліпиза",
        price: 55,
        capacity: 420,
        units: "мл",
        categoryId: 2,
      },
      {
        id: 11,
        name: "Чай Смородина",
        price: 55,
        capacity: 420,
        units: "мл",
        categoryId: 2,
      },
      {
        id: 12,
        name: "Чай Цитрусовий",
        price: 55,
        capacity: 420,
        units: "мл",
        categoryId: 2,
      },
      {
        id: 13,
        name: "Чай Марокканський",
        price: 55,
        capacity: 420,
        units: "мл",
        categoryId: 2,
      },
      {
        id: 14,
        name: "Bambl tea",
        price: 58,
        capacity: 420,
        units: "мл",
        categoryId: 2,
      },
    ],
  },
  {
    id: 3,
    name: "Охолоджені напої",
    image: "lemonade-image.png",
    icon: "FaCocktail",
    products: [
      {
        id: 15,
        name: "ICE Лате",
        price: 50,
        capacity: 60,
        units: "мл",
        categoryId: 3,
      },
      {
        id: 16,
        name: "ICE Bambl",
        price: 35,
        capacity: 60,
        units: "мл",
        categoryId: 3,
      },
      {
        id: 17,
        name: "ICE Какао",
        price: 35,
        capacity: 55,
        units: "мл",
        categoryId: 3,
      },
      {
        id: 18,
        name: "Еспресо тонік",
        price: 35,
        capacity: 65,
        units: "мл",
        categoryId: 3,
      },
      {
        id: 19,
        name: "Лимонад манго малина",
        price: 50,
        capacity: 68,
        units: "мл",
        categoryId: 3,
      },
      {
        id: 20,
        name: "Лимонад апельсин лимон",
        price: 50,
        capacity: 68,
        units: "мл",
        categoryId: 3,
      },
      {
        id: 21,
        name: "Лимонад малина лимон",
        price: 50,
        capacity: 68,
        units: "мл",
        categoryId: 3,
      },
      {
        id: 22,
        name: "Лимонад полуниця малина",
        price: 50,
        capacity: 68,
        units: "мл",
        categoryId: 3,
      },
      {
        id: 23,
        name: "Мілкшейк Classic",
        price: 50,
        capacity: 80,
        units: "мл",
        categoryId: 3,
      },
      {
        id: 24,
        name: "Мілкшейк Ягідний",
        price: 50,
        capacity: 80,
        units: "мл",
        categoryId: 3,
      },
      {
        id: 25,
        name: "Мілкшейк Карамель",
        price: 50,
        capacity: 80,
        units: "мл",
        categoryId: 3,
      },
      {
        id: 26,
        name: "Мілкшейк Орео-банан",
        price: 50,
        capacity: 95,
        units: "мл",
        categoryId: 3,
      },
      {
        id: 27,
        name: "Мілкшейк манго",
        price: 50,
        capacity: 80,
        units: "мл",
        categoryId: 3,
      },
    ],
  },
  {
    id: 4,
    name: "Бургери",
    image: "burger-image.png",
    icon: "PiHamburgerFill",
    products: [
      {
        id: 28,
        name: "Бургер Яловичина",
        price: 105,
        capacity: 295,
        units: "гр",
        categoryId: 4,
      },
      {
        id: 29,
        name: "Бургер Курка",
        price: 100,
        capacity: 280,
        units: "гр",
        categoryId: 4,
      },
      {
        id: 30,
        name: "Бургер Hungry Яловичина",
        price: 128,
        capacity: 360,
        units: "гр",
        categoryId: 4,
      },
      {
        id: 31,
        name: "Бургер Hungry Курка",
        price: 125,
        capacity: 345,
        units: "гр",
        categoryId: 4,
      },
      {
        id: 32,
        name: "Бургер Double Яловичина",
        price: 155,
        capacity: 395,
        units: "гр",
        categoryId: 4,
      },
      {
        id: 33,
        name: "Бургер Double Курка",
        price: 145,
        capacity: 370,
        units: "гр",
        categoryId: 4,
      },
      {
        id: 34,
        name: "Бургер Double MIX",
        price: 150,
        capacity: 380,
        units: "гр",
        categoryId: 4,
      },
      {
        id: 35,
        name: "Бургер Nuggets",
        price: 110,
        capacity: 300,
        units: "гр",
        categoryId: 4,
      },
    ],
  },
  {
    id: 5,
    name: "Млинці",
    image: "puncakes-image.png",
    icon: "TbBrandCakephp",
    products: [
      {
        id: 36,
        name: "Млинець Яловичина",
        price: 95,
        capacity: 340,
        units: "гм",
        categoryId: 5,
      },
      {
        id: 37,
        name: "Млинець Курка",
        price: 90,
        capacity: 340,
        units: "гм",
        categoryId: 5,
      },
      {
        id: 38,
        name: "Млинець MIX",
        price: 128,
        capacity: 355,
        units: "гм",
        categoryId: 5,
      },
      {
        id: 39,
        name: "Млинець банан шоколад",
        price: 75,
        capacity: 285,
        units: "гм",
        categoryId: 5,
      },
      {
        id: 40,
        name: "Млинець орео шоколад",
        price: 75,
        capacity: 275,
        units: "гм",
        categoryId: 5,
      },
      {
        id: 41,
        name: "Млинець малина",
        price: 60,
        capacity: 260,
        units: "гм",
        categoryId: 5,
      },
      {
        id: 42,
        name: "Млинець манго",
        price: 60,
        capacity: 260,
        units: "гм",
        categoryId: 5,
      },
    ],
  },
  {
    id: 6,
    name: "Сендвічі",
    image: "sandwich-image.png",
    icon: "LuSandwich",
    products: [
      {
        id: 43,
        name: "Сендвіч курка",
        price: 80,
        capacity: 230,
        units: "гм",
        categoryId: 6,
      },
      {
        id: 44,
        name: "Сендвіч шинка",
        price: 75,
        capacity: 210,
        units: "гм",
        categoryId: 6,
      },
    ],
  },
  {
    id: 7,
    name: "Хот-доги",
    image: "hotdog-image.png",
    icon: "LiaHotdogSolid",
    products: [
      {
        id: 45,
        name: "Хот-Дог Молочний",
        price: 55,
        capacity: 180,
        units: "гм",
        categoryId: 7,
      },
      {
        id: 46,
        name: "Хот-Дог молочна з сиром",
        price: 55,
        capacity: 190,
        units: "гм",
        categoryId: 7,
      },
      {
        id: 47,
        name: "Хот-Дог Баварський",
        price: 60,
        capacity: 190,
        units: "гм",
        categoryId: 7,
      },
    ],
  },
];
