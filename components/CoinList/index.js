import React from "react";
import Coin from "../Coin";
import { CoinListContainer, CoinListWrapper } from "./CoinListElements";

const CoinList = ({ allCoins }) => {
  return (
    <CoinListContainer>
      <CoinListWrapper>
        {allCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              id={coin.id}
              name={coin.name}
              price={coin.current_price}
              image={coin.image}
              symbol={coin.symbol}
              dilutedValuation={coin.fully_diluted_valuation}
              volume={coin.total_volume}
              high={coin.high_24h}
              low={coin.low_24h}
              totalSupply={coin.total_supply}
              maxSupply={coin.max_supply}
              ath={coin.ath_change_percentage}
              marketCap={coin.market_cap}
              marketCapChange={coin.market_cap_change_24h}
              marketCapChangePercentage={coin.market_cap_change_percentage_24h}
              marketCapRank={coin.market_cap_rank}
              priceChange={coin.price_change_24h}
              priceChangePercent={coin.price_change_percentage_24h}
              circulatingSupply={coin.circulating_supply}
            />
          );
        })}
      </CoinListWrapper>
    </CoinListContainer>
  );
};

export default CoinList;
