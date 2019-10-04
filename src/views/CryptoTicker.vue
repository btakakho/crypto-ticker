<template>
  <div class="crypto-ticker">
    <Preloader v-if="loading" />
    <table class="crypto-table" v-else>
      <thead>
        <tr>
          <th class="crypto-table__col-name">#</th>
          <th class="crypto-table__col-name">Cryptocurrency</th>
          <th class="crypto-table__col-name">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="crypto-table__row"
          v-for="(coin, index) in sortedCoins"
          :key="index"
        >
          <td class="crypto-table__cell crypto-table__position">
            {{ index + 1 }}
          </td>
          <td class="crypto-table__cell">
            <div class="crypto-table__coin">
              <div class="crypto-table__thumbnail">
                <img
                  width="32"
                  height="32"
                  :src="`//cryptocompare.com/${coin.imageUrl}`"
                  alt=""
                />
              </div>

              <div class="crypto-table__name">
                <div class="crypto-table__full-name">{{ coin.fullName }}</div>
                <div class="crypto-table__short-name">{{ coin.shortName }}</div>
              </div>
            </div>
          </td>
          <td
            class="crypto-table__cell crypto-table__price"
            :class="{ up: coin.isUp, down: coin.isDown }"
          >
            $ {{ coin.price }}
          </td>
        </tr>
      </tbody>
    </table>
    <InfiniteLoading @infinite="infiniteHandler" v-if="!loading">
      <div slot="spinner"><Preloader /></div>
    </InfiniteLoading>
  </div>
</template>

<script>
import axios from "axios";
import io from "socket.io-client";
import InfiniteLoading from "vue-infinite-loading";
import Preloader from "@/components/Preloader.vue";

export default {
  components: {
    Preloader,
    InfiniteLoading
  },

  data() {
    return {
      api: {
        crypto: "https://min-api.cryptocompare.com",
        cryptoStream: "https://streamer.cryptocompare.com/"
      },
      coins: {},
      limit: 100,
      loading: true,
      page: 0,
      sortedCoins: []
    };
  },

  async created() {
    try {
      this.subscribeStream();
      await this.setCryptoCurrencyData();
    } catch (err) {
      console.error(err);
    }
  },

  methods: {
    async setCryptoCurrencyData() {
      const coins = await this.fetchCryptoData();
      this.loading = false;
      this.setCoins(coins);
      this.setSortedCoins(coins);
      this.addSubs(coins);
    },

    subscribeStream() {
      this.cryptoio = io.connect(this.api.cryptoStream);

      this.cryptoio.on("m", message => {
        this.handleMessage(message);
      });
    },

    async fetchCryptoData() {
      const response = await axios.get(
        `${this.api.crypto}/data/top/mktcapfull?limit=${this.limit}&tsym=USD&page=${this.page}`
      );

      return this.simplifyCoinsData(response.data.Data);
    },

    setCoins(coins) {
      if (!this.loading) {
        this.coins = Object.assign(this.coins, coins);
      } else {
        this.coins = coins;
      }
    },

    setSortedCoins(coins) {
      const sortedCoins = this.sortByPrice(coins);

      if (!this.loading) {
        this.sortedCoins = this.sortedCoins.concat(sortedCoins);
      } else {
        this.sortedCoins = sortedCoins;
      }
    },

    addSubs(coins) {
      const subs = [];
      const symbols = Object.keys(coins);

      symbols.forEach(symbol => {
        subs.push("5~CCCAGG~" + symbol + "~USD");
      });

      this.cryptoio.emit("SubAdd", { subs });
    },

    sortByPrice(arr) {
      return Object.keys(arr)
        .sort((a, b) => arr[b].price - arr[a].price)
        .map(key => arr[key]);
    },

    simplifyCoinsData(arr) {
      const result = {};

      arr.forEach(coin => {
        coin = {
          fullName: coin.CoinInfo.FullName,
          shortName: coin.RAW ? coin.RAW.USD.FROMSYMBOL : 0,
          price: coin.RAW ? coin.RAW.USD.PRICE : 0,
          imageUrl: coin.CoinInfo.ImageUrl
        };

        result[coin.shortName] = coin;
      });

      return result;
    },

    handleMessage(message) {
      message = message.split("~");

      if (message[4] === "1" || message[4] === "2") {
        const coin = {
          name: message[2],
          price: message[5]
        };

        if (message[4] === "1") {
          coin.isUp = true;
          coin.isDown = false;
        } else if (message[4] === "2") {
          coin.isUp = false;
          coin.isDown = true;
        }

        this.updateCoin(coin);
      }
    },

    updateCoin(coin) {
      this.coins[coin.name] = {
        ...this.coins[coin.name],
        ...coin
      };

      this.sortedCoins = this.sortByPrice(this.coins);

      setTimeout(() => {
        this.coins[coin.name].isUp = false;
        this.coins[coin.name].isDown = false;
      }, 500);
    },

    async infiniteHandler($state) {
      this.page += 1;

      try {
        await this.setCryptoCurrencyData();
        $state.loaded();
      } catch (err) {
        $state.complete();
        console.error(err);
      }
    }
  }
};
</script>

<style lang="scss">
.crypto-ticker {
  overflow-x: auto;
  overflow-y: hidden;
  padding: 0 2rem 5rem;
}

.crypto-table {
  border-spacing: 0 1.5rem;

  &__coin {
    display: flex;
    align-items: center;
  }

  &__col-name {
    text-align: left;
    color: #666;
    font-weight: 400;
    font-size: 16px;
    padding: 0 2rem;

    &:first-child {
      text-align: center;
    }

    &:last-child {
      padding-left: 1.1rem;
    }
  }

  &__short-name {
    font-size: 1.4rem;
    color: #585858;
  }

  &__thumbnail {
    padding: 0.5rem 1.5rem 0.5rem 0.5rem;
    display: flex;
  }

  &__cell {
    padding: 0.5rem 1rem;
  }

  &__row {
    background: #fff;
    border-radius: 3rem 0 0 3rem;
    box-shadow: 0.3rem 0.3rem 0.9rem 0 rgba(204, 204, 204, 0.53),
      0.3rem 0.3rem 0.9rem 0 rgba(204, 204, 204, 0.53);
  }

  &__position {
    border-radius: 3rem 0 0 3rem;
    background-color: #3eb8ff;
    color: #fff;
    text-align: center;
  }

  &__price {
    transition: background-color 100ms;
    white-space: nowrap;
  }

  &__price.up {
    background-color: #9dd3a8;
  }

  &__price.down {
    background-color: #f38181;
  }
}
</style>
