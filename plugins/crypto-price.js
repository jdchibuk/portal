const fetch = require("node-fetch-retry");

/** @type {import('@docusaurus/types').PluginModule} */
const icpPricePlugin = async function (context, options) {
  return {
    name: "crypto-price",
    async loadContent() {
      const tickers = await Promise.all([
        fetch("https://api.coinbase.com/v2/prices/ICP-USD/buy", {
          retry: 10,
          pause: 500,
        }).then((res) => res.json()),
        fetch("https://api.coinbase.com/v2/prices/BTC-USD/buy", {
          retry: 10,
          pause: 500,
        }).then((res) => res.json()),
      ]);
      return { icp: +tickers[0].data.amount, btc: +tickers[1].data.amount };
    },
    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions;
      setGlobalData(content);
    },
  };
};

module.exports = icpPricePlugin;
