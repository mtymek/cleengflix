import { Config } from "@cleeng/mediastore-sdk";
import getCustomerOffers from '@cleeng/mediastore-sdk/dist/api/Customer/getCustomerOffers';

const Cleeng = {
    offerId: Config.offerId,

    isEntitled: function() {
        getCustomerOffers().then((res) => {
            console.log(res);
        });
    }
};

export default Cleeng;