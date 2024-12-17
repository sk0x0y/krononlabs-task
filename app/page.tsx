import {
  SubHeader,
  OrderBook,
  BasicTable,
  OrderForm,
  Trades,
} from '@widgets/trade';

export default function Home() {
  return (
    <main
      className="grid
    grid-cols-[1fr_minmax(253px,_320px)_minmax(510px,_880px)_minmax(253px,_320px)_1fr]
    grid-rows-[56px_360px_160px_minmax(169px,_1fr)_minmax(146px,_auto)_560px_24px]
    gap-1
    border-t-4 border-t-base-bg
    [&>section:not([style*='grid-area:left']):not([style*='grid-area:right'])]:bg-primary-bg
    [&>section]:rounded-lg"
      style={{
        gridTemplateAreas: `
      "left subHeader subHeader market right"
      "left orderbook chart market right"
      "left orderbook chart trades right"
      "left orderbook orderform trades right"
      "left orderbook orderform marketActivity right"
      "left basictable basictable basictable right"
      "footer footer footer footer footer"
    `,
      }}
    >
      <section
        className=""
        style={{
          gridArea: 'left',
        }}
      />

      <SubHeader />

      <section className="" style={{ gridArea: 'right' }} />

      <OrderBook />

      <section
        className=""
        style={{
          gridArea: 'chart',
        }}
      >
        chart
      </section>

      <section className="" style={{ gridArea: 'market' }}>
        market
      </section>

      <Trades />

      <OrderForm />

      <section className="" style={{ gridArea: 'marketActivity' }}>
        marketActivity
      </section>

      <BasicTable />

      <section className="" style={{ gridArea: 'footer' }}>
        footer
      </section>
    </main>
  );
}
