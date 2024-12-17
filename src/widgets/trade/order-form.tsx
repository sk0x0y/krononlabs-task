import { Button, Input } from '@shared/ui';

export default function OrderForm() {
  return (
    <section className="" style={{ gridArea: 'orderform' }}>
      <div className="flex items-center h-[42px] px-4 border-b border-b-divider font-medium text-sm">
        <ul className="flex gap-6 text-secondary [&>li]:cursor-pointer">
          <li className="hover:text-primary-text text-primary-text">Spot</li>
          <li className="hover:text-primary-text">Cross</li>
          <li className="hover:text-primary-text">Isolated</li>
          <li className="hover:text-primary-text">Grid</li>
        </ul>
      </div>

      <div className="flex items-center h-[42px] px-4">
        <ul className="flex gap-6 font-medium text-secondary [&>li]:cursor-pointer">
          <li className="hover:text-primary-text text-primary-text">Limit</li>
          <li className="hover:text-primary-text">Market</li>
          <li className="hover:text-primary-text">Stop Limit</li>
        </ul>
      </div>

      <div className="flex gap-4 px-4">
        <div className="flex-1 flex flex-col gap-y-2">
          <Input label="Price" defaultValue="107456.62" unit="USDT" />

          <Input label="Amount" defaultValue="" unit="BTC" />

          <Input label="Total" defaultValue="" unit="USDT" />

          <Button label="Buy BTC" className="bg-positive" />
        </div>

        <div className="flex-1 flex flex-col gap-y-2">
          <Input label="Price" defaultValue="107456.62" unit="USDT" />

          <Input label="Amount" defaultValue="" unit="BTC" />

          <Input label="Total" defaultValue="" unit="USDT" />

          <Button label="Sell BTC" className="bg-negative" />
        </div>
      </div>
    </section>
  );
}
