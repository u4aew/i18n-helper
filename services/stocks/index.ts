import {
  getCandlesByTicker,
  getLastPriceByTicker,
  getStockByTicker,
  getStocks,
} from '@/actions/shares';
import { IPagination } from '@/typing';

class ServiceStocks {
  constructor() {}

  async getList({ start = 1, end = 24 }: IPagination) {
    try {
      const res = await getStocks({ start, end });
      return res;
    } catch (e) {
      this.handleError(e);
    }
  }

  async getByTicker(ticker: string) {
    try {
      return await getStockByTicker(ticker);
    } catch (e) {
      console.error(e);
    }
  }

  async getLastPriceByTicker(ticker: string) {
    try {
      return await getLastPriceByTicker(ticker);
    } catch (e) {
      this.handleError(e);
    }
  }

  async getCandlesByTicker(ticker: string) {
    try {
      return await getCandlesByTicker(ticker);
    } catch (e) {
      this.handleError(e);
    }
  }

  handleError(err: any) {
    console.error(err);
  }
}

export const serviceStocks = new ServiceStocks();
