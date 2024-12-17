'use client';

import { useEffect, useRef, useState } from 'react';
import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets';

interface ChartClientProps {
  symbol: string;
}
export default function ChartClient({ symbol }: ChartClientProps) {
  const [mounted, setMounted] = useState(false);

  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && chartRef.current) {
      chartRef.current.remove();
      chartRef.current = null;
    }
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="w-full h-[calc(100%-42px)] border-0 shadow-none overflow-hidden">
      <AdvancedRealTimeChart
        symbol={`BINANCE:${symbol}`}
        theme="dark"
        autosize
        interval="D"
        timezone="Asia/Seoul"
        style="1"
        locale="en"
        toolbar_bg="#2B2B43"
        enable_publishing={false}
        hide_side_toolbar={false}
        allow_symbol_change={true}
        container_id="tradingview_chart"
      />
    </div>
  );
}
