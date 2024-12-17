import ChartClient from './chart-client';

interface ChartProps {
  symbol: string;
}
export default function Chart({ symbol }: ChartProps) {
  return (
    <section
      className="overflow-hidden"
      style={{
        gridArea: 'chart',
      }}
    >
      <div className="flex items-center h-[42px] px-4 border-b border-b-divider font-medium text-sm">
        <ul className="flex gap-6 text-secondary [&>li]:cursor-pointer">
          <li className="hover:text-primary-text text-primary-text">Chart</li>
          <li className="hover:text-primary-text">Info</li>
          <li className="hover:text-primary-text">Trading Data</li>
          <li className="hover:text-primary-text">Trading Analysis</li>
          <li className="hover:text-primary-text">Square</li>
        </ul>
      </div>

      {/* TradingView 차트 영역 */}
      <ChartClient symbol={symbol} />
    </section>
  );
}
