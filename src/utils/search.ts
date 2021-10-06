import { ProductItem } from "../state/search/constants";

export const normaliseBarcode = (text: string) => text.replace(/\s/g, "");

export const isValidBarcode = (text: string) => !!text.match(/^\d+$/);

export const findItemInHistory = (
  historicalData: ProductItem[],
  barcode: string
) => historicalData.find((item) => item.code === barcode);
