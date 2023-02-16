import PropTypes from "prop-types";
import React, { Component } from "react";
import Newscom from "./Newscom";

export class New extends Component {
  static propTypes = {};
  articles = [
    {
      source: { id: "wired", name: "Wired" },
      author: "Boone Ashworth",
      title: "OnePlus Pad Android Tablet: Details, Specs, Release Date",
      description:
        "Plus: Netflix expands its efforts to end password sharing, Apple’s “buy now, pay later” entry creeps closer, and we scrutinize your Bitcoin spending.",
      url: "https://www.wired.com/story/oneplus-pad-android-tablet/",
      urlToImage:
        "https://media.wired.com/photos/63e69faddcab861f7a47469f/191:100/w_1280,c_limit/OnePlus-Pad-Gear-Roundup-Featured-Gear.jpg",
      publishedAt: "2023-02-11T14:00:00Z",
      content:
        "Theres no shortage of tablets in the world, from the ever-dominant iPad to an assortment of Android options and Fire tabs to the niche weirdos like the E-ink and stylus Kindle Scribe. Now, OnePlus, a… [+4068 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title: "Bitcoin rises 5.5% to $19897 - Reuters",
      description:
        "Bitcoin rose 5.54% to $19,897 at 22:13 GMT on Friday, adding $1,044 to its previous close.",
      url: "https://www.reuters.com/technology/bitcoin-rises-55-19897-2023-01-13/",
      urlToImage:
        "https://www.reuters.com/resizer/x2f-ufmS3E4Gt5u8Lu24vQUPfDA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/U57W2HJZGRPTHE2MEDPR5RDSHQ.jpg",
      publishedAt: "2023-01-13T22:24:00Z",
      content:
        "Jan 13 (Reuters) - Bitcoin rose 5.54% to $19,897 at 22:13 GMT on Friday, adding $1,044 to its previous close.\r\nBitcoin, the world's biggest and best-known cryptocurrency, is up 20.6% from the year's … [+277 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title: "Cryptoverse: Big investors edge back to bitcoin - Reuters",
      description:
        "Big investors are dipping their toes into crypto waters again after a bumper month for bitcoin.",
      url: "https://www.reuters.com/technology/cryptoverse-big-investors-edge-back-bitcoin-2023-01-31/",
      urlToImage:
        "https://www.reuters.com/resizer/wVEBWtf3RmkXKgyvKm8NmhJ80-U=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FE2DLHQ4UBOOPNWFOIS34JBLP4.jpg",
      publishedAt: "2023-01-31T06:01:08Z",
      content:
        "Jan 31 (Reuters) - Big investors are dipping their toes into crypto waters again after a bumper month for bitcoin.\r\nDigital asset investment products, often favored by institutional investors, saw in… [+4079 chars]",
    },
    {
      source: { id: null, name: "Benzinga" },
      author: "Mehab Qureshi",
      title:
        "Bitcoin Surges Above $21K, Ethereum, Dogecoin Rally Intact — Analyst Says This 'Could Awaken Some Dormant Long-Term Bulls' - Benzinga",
      description:
        "<ol><li>Bitcoin Surges Above $21K, Ethereum, Dogecoin Rally Intact — Analyst Says This 'Could Awaken Some Dormant Long-Term Bulls'  Benzinga\r\n</li><li>Bitcoin roars past $20K in surprise surge. Can the rally last?  Fortune\r\n</li><li>Bitcoin rises 5.6% to $210…",
      url: "https://www.benzinga.com/markets/cryptocurrency/23/01/30424910/bitcoin-surges-above-21k-ethereum-dogecoin-rally-intact-analyst-says-this-could-awaken-som",
      urlToImage:
        "https://cdn.benzinga.com/files/images/story/2023/01/15/kanchanara-4kjjezdyo3m-unsplash.jpg?width=1200&height=800&fit=crop",
      publishedAt: "2023-01-16T02:50:45Z",
      content:
        "Major coins traded green on Sunday buoyed by renewed investor confidence that the Federal Reserve is managing inflation successfully without pushing the economy into recession. \r\n<table><tr><th>Crypt… [+2581 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title: "Cryptoverse: Bitcoin is back with a bonk - Reuters",
      description:
        "Bitcoin is on the charge in 2023, dragging the crypto market off the floor and electrifying bonk, a new meme coin.",
      url: "https://www.reuters.com/technology/cryptoverse-bitcoin-is-back-with-bonk-2023-01-17/",
      urlToImage:
        "https://www.reuters.com/resizer/jPD5gWOp4iaNFHGJCoc9M20WksQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/MLQZOZNWTZLSRJTK4RZJLSI364.jpg",
      publishedAt: "2023-01-17T06:16:00Z",
      content:
        "Jan 17 (Reuters) - Bitcoin is on the charge in 2023, dragging the crypto market off the floor and electrifying bonk, a new meme coin.\r\nThe No.1 cryptocurrency has clocked a 26% gain in January, leapi… [+4367 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Davos 2023: Scaramucci's SkyBridge bets on $35k bitcoin, targets ... - Reuters.com",
      description:
        'SkyBridge Capital is betting on a sustained turnaround in cryptocurrency markets in 2023, the firm\'s founder Anthony Scaramucci said, while admitting this view was "overly bullish".',
      url: "https://www.reuters.com/technology/davos-2023-scaramuccis-skybridge-bets-35k-bitcoin-targets-credit-2023-01-16/",
      urlToImage:
        "https://www.reuters.com/resizer/CCuc2gyUk1R0tcS6_ctDWrNDpjI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/JC2DND4M55PR3POEE5DKTOPINM.jpg",
      publishedAt: "2023-01-16T17:56:00Z",
      content:
        "DAVOS, Switzerland, Jan 16 (Reuters) - SkyBridge Capital is betting on a sustained turnaround in cryptocurrency markets in 2023, the firm's founder Anthony Scaramucci said, while admitting this view … [+1366 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "mchittum@insider.com (Morgan Chittum)",
      title:
        "Silvergate and other crypto-linked stocks climb as bitcoin notches its highest price in 5 months",
      description:
        "Silvergate stock surged more than 12% on Monday after bitcoin hit $23,000 over the weekend.",
      url: "https://markets.businessinsider.com/news/stocks/silvergate-stock-price-si-coinbase-coin-crypto-bitcoin-notches-highs-2023-1",
      urlToImage:
        "https://i.insider.com/63cea934b9a04b0019eda8ef?width=1200&format=jpeg",
      publishedAt: "2023-01-23T17:20:50Z",
      content:
        "Silvergate and other crypto-linked stocks are climbing after bitcoin notched a five-month high over the weekend.\r\nThe crypto-focused bank is up over 12% at $15.45 on Monday, after diving earlier this… [+2724 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "prosen@insider.com (Phil Rosen)",
      title:
        "Is bitcoin being manipulated? A professor who proved it in 2017 sees more red flags, report says.",
      description:
        '"In a period of highly negative sentiment, we\'ve seen suspiciously solid floors under bitcoin," finance professor John Griffin told Fortune.',
      url: "https://markets.businessinsider.com/news/currencies/bitcoin-price-manipulation-token-crypto-markets-ether-btc-ftx-griffin-2023-2",
      urlToImage:
        "https://i.insider.com/63dbc4cb0a08ae0018a6767b?width=1200&format=jpeg",
      publishedAt: "2023-02-02T15:25:38Z",
      content:
        "After a dismal outing last year, bitcoin has skyrocketed more than 40% to start the new year. But John Griffin, a finance professor at the University of Texas McCombs School of Business, thinks there… [+2506 chars]",
    },
    {
      source: { id: "business-insider", name: "Business Insider" },
      author: "mchittum@insider.com (Morgan Chittum)",
      title:
        "Cathie Wood's Ark Invest says bitcoin could hit $1.5 million by 2030, doubling down on its bullishness for the world's largest cryptocurrency",
      description:
        "Ark Invest's bull case for bitcoin is $1.48 million, while its base case is $682,800 by 2030.",
      url: "https://markets.businessinsider.com/news/currencies/cathie-wood-bitcoin-price-ark-invest-crypto-market-outlook-2030-2023-2",
      urlToImage:
        "https://i.insider.com/61dede7a1025b20018bb4cfd?width=1200&format=jpeg",
      publishedAt: "2023-02-01T16:39:45Z",
      content:
        "Cathie Wood's Ark Investment Management said bitcoin could hit $1.48 million by 2030, a 6,326% increase from its current price.\r\nThat's under its bull-case scenario, while its base case sees bitcoin … [+2018 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/everything?q=apple&from=2023-02-14&to=2023-02-14&sortBy=popularity&apiKey=8d0659547584403eb24fb666ef45be89";
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(data);
    this.setState({
      articles: parseddata.articles,
    });
  }

  render() {
    return (
      <div className="my-4">
        
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        <div className="container text-center my-4">
          <div className="row align-items-start ">
            {this.state.articles.map((element) => {
              return (
                <div className="col my-3 " key={element.url}>
                  <Newscom
                    title={element.title.slice(0, 10) + "..."}
                    description={element.description.slice(0, 55) + "..."}
                    imgurl={element.urlToImage}
                    newsurl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default New;
