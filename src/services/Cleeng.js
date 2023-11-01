import { Config } from "@cleeng/mediastore-sdk";
import getCustomerSubscriptions from '@cleeng/mediastore-sdk/dist/api/Customer/getCustomerSubscriptions';

const Cleeng = {
    offerId: Config.offerId,

    isEntitled: async function() {
        return await getCustomerSubscriptions().then((res) => {
            const entitlements = res.responseData.items;
            return entitlements.length > 0;
        });
    }
};

export default Cleeng;