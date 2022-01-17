import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x79D6F14531374B221Ae725Bb73f26a6F515fe41d'
);

export default instance;