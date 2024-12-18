'use client';

import { useCallback, useEffect, useState } from 'react';

import {
  createOrderBookSocket,
  type OrderBookEntry,
  type OrderBookSocketMessage,
  type OrderBookSnapshot,
  formatTotal,
} from '@features/order-book';

interface OrderBookClientProps {
  symbol: string;
  snapshot: OrderBookSnapshot;
}
export default function OrderBookClient({
  symbol,
  snapshot,
}: OrderBookClientProps) {
  const [bids, setBids] = useState<OrderBookEntry[]>([]);
  const [asks, setAsks] = useState<OrderBookEntry[]>([]);
  const [error, setError] = useState<string | null>(null);

  const processOrderBookUpdate = useCallback((data: OrderBookSocketMessage) => {
    setBids((prevBids) => updateOrderBook(prevBids, data.b, false));
    setAsks((prevAsks) => updateOrderBook(prevAsks, data.a, true));
  }, []);

  const updateOrderBook = (
    oldOrders: OrderBookEntry[],
    newOrders: string[][],
    isAsk: boolean,
  ) => {
    const updatedOrders = [...oldOrders];
    newOrders.forEach(([price, amount]) => {
      const index = updatedOrders.findIndex(
        (order) => order.price === parseFloat(price),
      );
      if (parseFloat(amount) === 0) {
        if (index !== -1) updatedOrders.splice(index, 1);
      } else {
        const newOrder = {
          price: parseFloat(price),
          amount: parseFloat(amount),
          total: parseFloat(price) * parseFloat(amount),
        };
        if (index !== -1) {
          updatedOrders[index] = newOrder;
        } else {
          updatedOrders.push(newOrder);
        }
      }
    });
    return updatedOrders
      .sort((a, b) => (isAsk ? a.price - b.price : b.price - a.price))
      .slice(0, 19);
  };

  useEffect(() => {
    let ws: WebSocket;

    const fetchOrderBookSnapshot = async () => {
      try {
        setBids(
          snapshot.bids.map(([price, amount]) => ({
            price: parseFloat(price),
            amount: parseFloat(amount),
            total: parseFloat(price) * parseFloat(amount),
          })),
        );
        setAsks(
          snapshot.asks.map(([price, amount]) => ({
            price: parseFloat(price),
            amount: parseFloat(amount),
            total: parseFloat(price) * parseFloat(amount),
          })),
        );

        ws = createOrderBookSocket(symbol, processOrderBookUpdate, (error) => {
          console.error('WebSocket error:', error);
          setError('Failed to connect to order book stream');
        });
      } catch (err) {
        console.error('Failed to fetch order book snapshot:', err);
        setError('Failed to load initial order book data');
      }
    };

    fetchOrderBookSnapshot();

    return () => {
      if (ws) ws.close();
    };
  }, [symbol, processOrderBookUpdate]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {/* 숏 포지션 */}
      <div className="py-1 text-xs">
        {asks
          .sort((a, b) => b.price - a.price)
          .map((ask, index) => (
            <div
              key={`${ask.price}-${index}`}
              className="flex justify-between py-0.5"
            >
              <span className="flex-1 text-negative">
                {Number(ask.price).toFixed(2)}
              </span>
              <span className="flex-1 text-right">
                {Number(ask.amount).toFixed(5)}
              </span>
              <span className="flex-1 text-right">
                {formatTotal(ask.price * ask.amount)}
              </span>
            </div>
          ))}
      </div>

      {/* 실시간 체결가 */}
      {/* TODO: 가격 등락 여부에 기반한 색상 변화 적용 */}
      <div className="flex items-center h-[36px]">
        <span className={`mr-[20px] text-xl`}>
          {asks[asks.length - 1]
            ? asks[asks.length - 1].price.toFixed(2)
            : '0.00'}
        </span>
        <span className="text-xs text-secondary">
          $
          {asks[asks.length - 1]
            ? asks[asks.length - 1].price.toFixed(2)
            : '0.00'}
        </span>
      </div>

      {/* 롱 포지션 */}
      <div className="py-1 text-xs">
        {bids.map((bid, index) => (
          <div
            key={`${bid.price}-${index}`}
            className="flex justify-between py-0.5"
          >
            <span className="flex-1 text-positive">{bid.price.toFixed(2)}</span>
            <span className="flex-1 text-right">{bid.amount.toFixed(5)}</span>
            <span className="flex-1 text-right">
              {formatTotal(bid.price * bid.amount)}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
