export interface IBrand {
  bg: string;
  color: string;
}

export interface IFinancialInstrument {
  ticker: string;
  name: string;
  country: string;
  brand: IBrand;
}

export interface ILink {
  name: string;
  url: string;
}

export interface IColumn {
  title: string;
  links: ILink[];
}

export interface ICompany {
  name: string;
  copyright: string;
}

export interface IFooterData {
  company: ICompany;
  columns: IColumn[];
}

export interface IApiResponseFooter {
  data: IFooterData;
}

export interface IPagination {
  start: number;
  end: number;
}

export interface INominal {
  currency: string;
  units: string;
  nano: number;
}

export interface IMinPriceIncrement {
  units: string;
  nano: number;
}

export interface IInstBrand {
  logoName: string;
  logoBaseColor: string;
  textColor: string;
}

export interface IInstrument {
  figi: string;
  ticker: string;
  classCode: string;
  isin: string;
  lot: number;
  currency: string;
  shortEnabledFlag: boolean;
  name: string;
  exchange: string;
  issueSize: string;
  countryOfRisk: string;
  countryOfRiskName: string;
  sector: string;
  issueSizePlan: string;
  nominal: INominal;
  tradingStatus: string;
  otcFlag: boolean;
  buyAvailableFlag: boolean;
  sellAvailableFlag: boolean;
  divYieldFlag: boolean;
  shareType: string;
  minPriceIncrement: IMinPriceIncrement;
  apiTradeAvailableFlag: boolean;
  uid: string;
  realExchange: string;
  positionUid: string;
  assetUid: string;
  instrumentExchange: string;
  forIisFlag: boolean;
  forQualInvestorFlag: boolean;
  weekendFlag: boolean;
  blockedTcaFlag: boolean;
  liquidityFlag: boolean;
  first1minCandleDate: string;
  first1dayCandleDate: string;
  brand: IBrand;
}

export interface IApiResponseStocks {
  data: IFinancialInstrument[];
  total: number;
  start: number;
  end: number;
}

export interface IApiResponseStockItem {
  data: IInstrument;
}

export interface IPrice {
  units: string;
  nano: number;
}

export interface IPriceInfo {
  figi: string;
  price: IPrice;
  time: string;
  instrumentUid: string;
  lastPriceType: string;
}

export interface IApiResponsePriceInfo {
  data: IPriceInfo;
}

export interface ICandle {
  open: IPrice;
  high: IPrice;
  low: IPrice;
  close: IPrice;
  volume: string;
  time: string;
  isComplete: boolean;
  candleSource: string;
}

export interface IApiResponseCandle {
  data: ICandle[];
}
