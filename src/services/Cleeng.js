import { Auth } from "@cleeng/mediastore-sdk";
import getCustomerSubscriptions from '@cleeng/mediastore-sdk/dist/api/Customer/getCustomerSubscriptions';

window.Auth = Auth;

const Cleeng = {
    offerId: import.meta.env.VITE_CLEENG_OFFER_ID,
    publisherId: import.meta.env.VITE_CLEENG_PUBLISHER_ID,

    isEntitled: async function() {
        if (!Auth.isLogged()) {
            return new Promise(() => false );
        }

        return await getCustomerSubscriptions().then((res) => {
            if (!Auth.isLogged()) {
                return false;
            }

            if (!res.responseData || !res.responseData.items) {
                return false;
            }

            const currentTime = Math.floor(Date.now() / 1000);

            // Simplest entitlement check: customer is entitled if they have
            // any non-terminated subscription
            return res.responseData.items.map((subscription) => subscription.expiresAt > currentTime)
                .includes(true);
        });
    }
};

export default Cleeng;