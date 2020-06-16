import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      rates: [],
      euroAmount: 0,
      selectedCurrency: null,
      convertedAmount: null,
      otherAmount: 0,
      selectedCurrencyTwo: null,
      convertedAmountTwo: null
    },

    mounted(){
      this.getRates()
    },

    methods: {
      getRates: function() {
        fetch("https://api.exchangeratesapi.io/latest")
        .then(result => result.json())
        .then(rates => this.rates = rates.rates)
      },
      convertFromEuros: function() {
        const result = (this.euroAmount * this.selectedCurrency).toFixed(2);
        this.convertedAmount = result;
      },
      convertToEuros: function() {
        const result = (this.otherAmount / this.selectedCurrencyTwo).toFixed(2);
        this.convertedAmountTwo = result
      }

    }

  })

})
