import { useState } from "react";
import CoinList from "../components/CoinList";
import SearchBar from "../components/SearchBar";
import Layout from "../components/layout";

export default function Home({ allCoins }) {
  const [search, setSearch] = useState("");

  const coinslist = allCoins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    e.preventDefault();

    setSearch(e.target.value.toLowerCase());
  };

  return (
    <Layout>
      <SearchBar searchListener={handleChange} />
      <CoinList allCoins={coinslist} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`
  );
  const allCoins = await res.json();
  if (!allCoins) {
    return {};
  }
  return {
    props: {
      allCoins,
    },
  };
}
