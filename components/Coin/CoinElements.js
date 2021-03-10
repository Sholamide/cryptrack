import styled from "styled-components";

export const CoinContainer = styled.div`
  background: #fff;
  display: flex;
`;

export const CoinWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1100px;
  align-items: center;
  border: none;
  padding: 1em 2em;
  border-bottom: 0.005em solid #f3f3f3;
`;

export const CoinContent = styled.div`
  justify-content: center;
  align-items: center;
  padding: 1em 0.5em;
  margin: 0.2em;
`;

export const CoinImg = styled.img`
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
`;

export const CoinSymbol = styled.h1`
  text-transform: uppercase;
  font-size: 18px;
  justify-content: center;
  align-items: center;
  color: #000;
`;

export const CoinName = styled.h1`
  font-size: 18px;
  justify-content: center;
  align-items: center;
  color: #000;
  padding-left: 25px;
`;

export const CoinPrice = styled.h1`
  font-size: 18px;
  justify-content: center;
  align-items: center;
  color: #000;
  padding-left: 25px;
`;
export const CoinVolume = styled.h1`
  font-size: 18px;
  justify-content: center;
  align-items: center;
  color: #000;
  padding-left: 25px;
`;

export const High = styled.h1`
  font-size: 18px;
  justify-content: center;
  align-items: center;
  color: #000;
  padding-left: 25px;
`;

export const Low = styled.h1`
  font-size: 18px;
  justify-content: center;
  align-items: center;
  color: #000;
  padding-left: 25px;
`;

export const TotalSupply = styled.h1`
  font-size: 18px;
  justify-content: center;
  align-items: center;
  color: #000;
  padding-left: 25px;
`;

export const MaxSupply = styled.h1`
  font-size: 18px;
  justify-content: center;
  align-items: center;
  color: #000;
  padding-left: 25px;
`;

export const PriceChange = styled.h1`
  font-size: 18px;
  justify-content: center;
  align-items: center;
  color: #000;
  padding-left: 25px;
`;

export const PriceChangePercent = styled.h1`
  font-size: 18px;
  padding-left: 25px;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.negative ? "red" : "green")};
`;

export const MarketCap = styled.h1`
  font-size: 18px;
  justify-content: center;
  align-items: center;
  color: #000;
  padding-left: 25px;
`;

export const MarketCapChange = styled.h1`
  font-size: 18px;
  justify-content: center;
  align-items: center;
  color: #000;
  padding-left: 25px;
`;

export const MarketCapChangePercentage = styled.h1`
  font-size: 18px;
  justify-content: center;
  align-items: center;
  color: #000;
  padding-left: 25px;
`;

export const CirculatingSupply = styled.h1`
  font-size: 18px;
  justify-content: center;
  align-items: center;
  color: #000;
  padding-left: 25px;
`;
