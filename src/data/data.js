// Мокданные для магазина. Дар лоиҳаи воқеӣ ин маълумот аз API меомад.
// Суратҳо аз src/assets ворид (import) мешаванд — Vite онҳоро ҳангоми
// билд ба файли алоҳида табдил медиҳад ва роҳи дурустро мегардонад.

import iphone11ProMax from "../assets/iphones/iphone-11-pro-max.png";
import iphone11Pro from "../assets/iphones/iphone-11-pro.png";
import iphone11 from "../assets/iphones/iphone-11.png";
import iphoneXsMax from "../assets/iphones/iphone-xs-max.png";
import iphoneXs from "../assets/iphones/iphone-xs.png";
import iphoneX from "../assets/iphones/iphone-x.png";
import iphone8Plus from "../assets/iphones/iphone-8-plus.png";
import iphone8 from "../assets/iphones/iphone-8.png";
import iphone7Plus from "../assets/iphones/iphone-7-plus.png";
import iphone7 from "../assets/iphones/iphone-7.png";
import iphone6sPlus from "../assets/iphones/iphone-6s-plus.png";
import iphone6s from "../assets/iphones/iphone-6s.png";
import iphoneSe from "../assets/iphones/iphone-se.png";
import iphone5s from "../assets/iphones/iphone-5s.png";
import iphone5c from "../assets/iphones/iphone-5c.png";
import iphone5 from "../assets/iphones/iphone-5.png";
import iphone4s from "../assets/iphones/iphone-4s.png";

import display from "../assets/parts/display.png";
import battery from "../assets/parts/battery.png";
import flexCable from "../assets/parts/flex-cable.png";
import cameraModule from "../assets/parts/camera-module.png";
import speaker from "../assets/parts/speaker.png";
import caseTeal from "../assets/parts/case-teal.png";
import casesMulti from "../assets/parts/cases-multi.png";
import screenProtector from "../assets/parts/screen-protector.png";

import appleDevices from "../assets/brands/apple-devices.png";
import huaweiPhones from "../assets/brands/huawei-phones.png";
import xiaomiPhones from "../assets/brands/xiaomi-phones.png";
import xiaomiPowerbank from "../assets/brands/xiaomi-powerbank.png";

import bannerScreenProtector from "../assets/banners/screen-protector-11pro.png";

export const brands = [
  { slug: "apple", name: "Apple", image: appleDevices },
  { slug: "huawei", name: "Huawei", image: huaweiPhones },
  { slug: "xiaomi", name: "Xiaomi", image: xiaomiPhones },
  // Барои Samsung дар папкаи суратҳо акс ёфт нашуд, бинобар ин ҷои холӣ мондем.
  { slug: "samsung", name: "Samsung", image: null },
];

// Ҳар модели iPhone бо сурати воқеии худ (баъзе моделҳои наздик ба ҳам,
// монанди 6 ва 6 Plus, як суратро тақсим мекунанд — дар папкаи "imgs"
// сурати алоҳида барои ҳар яки онҳо набуд).
export const iphoneModels = [
  { name: "iPhone 11 Pro Max", image: iphone11ProMax },
  { name: "iPhone 11 Pro", image: iphone11Pro },
  { name: "iPhone 11", image: iphone11 },
  { name: "iPhone Xs Max", image: iphoneXsMax },
  { name: "iPhone Xs", image: iphoneXs },
  { name: "iPhone Xr", image: iphoneX },
  { name: "iPhone X", image: iphoneX },
  { name: "iPhone 8 plus", image: iphone8Plus },
  { name: "iPhone 8", image: iphone8 },
  { name: "iPhone 7 plus", image: iphone7Plus },
  { name: "iPhone 7", image: iphone7 },
  { name: "iPhone 6S Plus", image: iphone6sPlus },
  { name: "iPhone 6S", image: iphone6s },
  { name: "iPhone 6 Plus", image: iphone6sPlus },
  { name: "iPhone 6", image: iphone6s },
  { name: "iPhone SE", image: iphoneSe },
  { name: "iPhone 5s", image: iphone5s },
  { name: "iPhone 5c", image: iphone5c },
  { name: "iPhone 5", image: iphone5 },
  { name: "iPhone 4s", image: iphone4s },
  { name: "iPhone 4", image: iphone4s },
];

export const categories = [
  { slug: "displei", name: "Дисплеи", image: display },
  { slug: "akkumulyatory", name: "Аккумуляторы", image: battery },
  { slug: "shleify", name: "Шлейфы", image: flexCable },
  { slug: "kamera", name: "Камера", image: cameraModule },
  { slug: "dinamiki", name: "Динамики", image: speaker },
  { slug: "chehly", name: "Чехлы", image: casesMulti },
  { slug: "zashitnye-stekla", name: "Защитные стекла", image: screenProtector },
  // Барои "Розетки" (зарядкаҳо) дар папкаи суратҳо акси мувофиқ набуд,
  // бинобар ин акси powerbank-и Xiaomi ҳамчун ҷойгузини наздиктарин гузошта шуд.
  { slug: "rozetki", name: "Розетки", image: xiaomiPowerbank },
];

// Суратҳое, ки барои маҳсулоти "Шлейф" гардишӣ истифода мешаванд.
const productPhotos = [flexCable, cameraModule, speaker, display];

export const products = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: "iPhone 7 Plus Шлейф кнопки включения + Шлейф громкости Оригинал",
  category: "shleify",
  model: "iPhone Xs Max",
  price: 950,
  oldPrice: 960,
  discountPrice: 750,
  inStock: 900 - i * 10,
  sold: i % 3,
  image: productPhotos[i % productPhotos.length],
  badges: i % 4 === 0 ? ["hit"] : i % 3 === 0 ? ["sale"] : [],
}));

export const promotions = [
  { id: 1, title: "С 1 по 8 марта скидка на все чехлы до 30%", text: "и вторая строчка для заголовка", image: casesMulti },
  { id: 2, title: "Защитное стекло на iPhone 11 Pro по лучшей цене", text: "и вторая строчка для заголовка", image: bannerScreenProtector },
  { id: 3, title: "Silicone Case для iPhone Xr", text: "и вторая строчка для заголовка", image: caseTeal },
];

export const perks = [
  { title: "Доставные оптовые цены" },
  { title: "Даём гарантию от 1 года" },
  { title: "Работаем напрямую с производителем" },
  { title: "Контроль качества продукции" },
  { title: "Простой товар может стать в минуту" },
];

export const homeBanners = {
  screenProtector: bannerScreenProtector,
  case: caseTeal,
};
