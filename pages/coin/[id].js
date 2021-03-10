import React from "react";
import {
  ContextContainer,
  ContextImage,
  ContextName,
  ContextPrice,
  ContextDescription,
  ContextWrapper,
  LastUpdated,
} from "../../components/coin/contextElement";
import Footer from "../../components/Footer";
import Layout from "../../components/layout";

const Coin = ({ coin }) => {
  return (
    <Layout>
      <ContextContainer>
        <ContextWrapper>
          <ContextImage src={coin.image.large} />
          <ContextName>{coin.name}</ContextName>
          <ContextPrice>${coin.market_data.current_price.usd}</ContextPrice>
          <ContextPrice>{coin.symbol}</ContextPrice>
          <ContextDescription>{coin.description.en}</ContextDescription>
          <LastUpdated>{coin.last_updated}</LastUpdated>{" "}
        </ContextWrapper>
      </ContextContainer>
      <Footer />
    </Layout>
  );
};

export default Coin;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);

  const data = await res.json();

  return {
    props: {
      coin: data,
    },
  };
}
