export enum Status {
  Backlog = 'backlog',
  Processing = 'processing',
  Done = 'done',
  Basket = 'basket',
}

export const StatusLabel: Readonly<{ [key in Status]: string }> = {
  [Status.Backlog]: 'Бэклог',
  [Status.Processing]: 'В процессе',
  [Status.Done]: 'Готово',
  [Status.Basket]: 'Корзина',
};
