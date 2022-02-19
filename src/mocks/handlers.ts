import { rest } from 'msw';

const items = [
  { id: 1, name: 'りんご' },
  { id: 2, name: 'みかん' },
  { id: 3, name: 'バナナ' }
];

export const handlers = [
  // 一覧取得の例
  rest.get('https://mock.dev/items', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(items),
    );
  }),

  // 個別取得の例
  rest.get('https://mock.dev/item/:id', (req, res, ctx) => {
    const id = req.params.id as string;
    const findItem = items.find((e) => e.id === parseInt(id, 10));

    if (!findItem) return res(
      ctx.status(404),
      ctx.json({message: 'not found item.'})
    );

    return res(
      ctx.status(200),
      ctx.json({item: [
        { id: findItem.id, name: findItem.name},
      ]}),
    );
  }),
];

