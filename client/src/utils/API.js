import axios from "axios";
export default {
    getBreweries: function(name, state, city, type) {
      return axios.get("https://api.openbrewerydb.org/breweries?by_name="+name+"&by_state="+state+"&by_city="+city+"&by_type=" + type);
    },
    saveSearch: function(searchData, id) {
          return axios.put("/api/searches/"+id, searchData);
        },

  };