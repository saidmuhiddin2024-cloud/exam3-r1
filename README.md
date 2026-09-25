# No Doors Technology — интернет-магазин (клон)

Лоиҳаи React бо React Router ва Tailwind CSS, ки тарҳи скриншотҳои
интернет-магазини аксессуарҳои телефонро такрор мекунад.

## Насб ва оғоз

```bash
npm install
npm run dev
```

Сайт дар http://localhost:5173 кушода мешавад.

## Сохти лоиҳа

```
src/
  components/   # Header, Footer, Layout, ProductCard, PerksRow
  context/      # ShopContext — сабад ва интихобшудаҳо (localStorage)
  data/         # маълумоти мисолӣ (бренд, модел, категория, маҳсулот)
  pages/        # ҳар саҳифа як файли алоҳида
  App.jsx       # ҳамаи роутҳо (react-router-dom)
  main.jsx      # нуқтаи оғоз
```

## Саҳифаҳо

- `/` — саҳифаи асосӣ
- `/catalog/:brand` — интихоби модели телефон
- `/category/:categorySlug` — рӯйхати маҳсулот
- `/product/:id` — саҳифаи маҳсулот
- `/cart`, `/favorites`, `/checkout`
- `/promotions`, `/sale`
- `/about`, `/delivery`, `/warranty`, `/contacts`

Маълумот дар `src/data/data.js` мокӣ аст — барои сомонаи воқеӣ бояд
онро бо дархости API иваз кард.
