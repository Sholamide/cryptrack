import React from "react";
import Link from "next/link";

import {
  CoinContainer,
  CoinImg,
  CoinPrice,
  CoinName,
  CoinWrapper,
  CoinSymbol,
  MarketCap,
  PriceChangePercent,
  CoinVolume,
  CoinContent,
} from "./CoinElements";

const Coin = ({
  name,
  image,
  price,
  symbol,
  id,
  volume,
  priceChangePercent,
  high,
  low,
  totalSupply,
  maxSupply,
  marketCap,
  marketCapChange,
}) => {
  return (
    <Link href="/coin/[id]" as={`/coin/${id}`}>
      <a>
        <CoinContainer>
          <CoinWrapper>
            <CoinImg src={image} />
            {/* <CoinSymbol>{symbol}</CoinSymbol> */}
            <CoinName>{name}</CoinName>
            <CoinPrice>${price}</CoinPrice>
            <CoinVolume>{volume.toLocaleString()}</CoinVolume>
            {priceChangePercent < 0 ? (
              <PriceChangePercent negative>
                {priceChangePercent.toFixed(2)}%
              </PriceChangePercent>
            ) : (
              <PriceChangePercent>
                {priceChangePercent.toFixed(2)}
              </PriceChangePercent>
            )}
            <MarketCap>Market Cap: ${marketCap.toLocaleString()}</MarketCap>
          </CoinWrapper>
        </CoinContainer>
      </a>
    </Link>
  );
};

export default Coin;
