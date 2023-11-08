import { Config, Auth } from "@cleeng/mediastore-sdk";
import getCustomerSubscriptions from '@cleeng/mediastore-sdk/dist/api/Customer/getCustomerSubscriptions';

window.Auth = Auth;

const Cleeng = {
    offerId: Config.offerId,

    isEntitled: async function() {
        if (!Auth.isLogged()) {
            return new Promise(() => false );
        }

        return await getCustomerSubscriptions().then((res) => {
            if (!Auth.isLogged()) {
                return false;
            }
            const entitlements = res.responseData.items;
            return entitlements.length > 0;
        });
    }
};

export default Cleeng;