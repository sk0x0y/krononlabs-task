export default function BasicTable() {
  return (
    <section
      style={{
        gridArea: 'basictable',
      }}
    >
      <div className="flex items-center h-[42px] px-4 border-b border-b-divider font-medium text-sm">
        <ul className="flex gap-6 text-secondary [&>li]:cursor-pointer">
          <li className="hover:text-primary-text text-primary-text">
            Open Orders(0)
          </li>
          <li className="hover:text-primary-text">Order History</li>
          <li className="hover:text-primary-text">Trade History</li>
          <li className="hover:text-primary-text">Funds</li>
          <li className="hover:text-primary-text">Grid Orders</li>
        </ul>
      </div>

      <div className="flex justify-between px-4 py-2 text-xs text-secondary">
        <span className="grow">Date</span>
        <span className="grow">Type</span>
        <span className="grow">Side</span>
        <span className="grow">Pair</span>
        <span className="grow">Price</span>
        <span className="grow">Amount</span>
        <span className="grow">Filled</span>
        <span className="grow">Total</span>
        <span className="grow">TP/SL</span>
      </div>

      <div className="px-4 py-2 text-xs">History 영역</div>
    </section>
  );
}
