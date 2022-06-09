import axios from 'axios';

const apiKey = 'dyL9Zxp8pZ8CA1U9QuPRoNchXXurU2F4biMtLP5Ki6ToDOerbWCpfMMUNvglVUU5vWNOG1_d1HpTV3eD7ysp_3hALzSCkTf7lpX-LxpbAbSpa4PKR2uKbCuIrK2hYnYx';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});
