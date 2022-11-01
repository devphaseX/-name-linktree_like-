enum Order {
  Greater = 1,
  Less = -1,
  Equal = 0,
}

function sortBy<Item>(
  randomlyPackedList: Array<Item>,
  method: (previous: Item, next: Item) => Order
) {
  const toBeSortedList = [...randomlyPackedList];
  toBeSortedList.sort(method);
  return toBeSortedList;
}

function randomNaiveId() {
  return Math.random().toString(32).slice(2);
}

function mapObjectToId<T extends Record<PropertyKey, any>>(
  toBe: T,
  mut?: boolean
): T & { id: string } {
  const objWithId = { id: randomNaiveId() };
  return mut ? Object.assign(toBe, objWithId) : { ...toBe, ...objWithId };
}

export { sortBy, randomNaiveId, mapObjectToId };
export type { Order };
