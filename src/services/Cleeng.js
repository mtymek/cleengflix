import { Config } from "@cleeng/mediastore-sdk";
import getCustomerSubscriptions from '@cleeng/mediastore-sdk/dist/api/Customer/getCustomerSubscriptions';

const Cleeng = {
    offerId: Config.offerId,

    isEntitled: async function() {
        return await getCustomerSubscriptions().then((res) => {
            // return
        });
    }
};

export default Cleeng;