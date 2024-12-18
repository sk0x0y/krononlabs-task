// https://developers.binance.com/docs/binance-spot-api-docs/web-socket-streams#listing-subscriptions

export interface OrderBookSnapshot {
  lastUpdateId: number;
  bids: [string, string][];
  asks: [string, string][];
}
export interface OrderBookSocketMessage {
  e: string; // 이벤트 타입
  E: number; // 이벤트 시간
  s: string; // 심볼
  U: number; // 첫 업데이트 ID
  u: number; // 마지막 업데이트 ID
  b: [string, string][]; // 매수 - 가격, 수량
  a: [string, string][]; // 매도 - 가격, 수량
}
export interface OrderBookEntry {
  price: number;
  amount: number;
  total: number;
}
