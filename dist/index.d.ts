import type { CustomNetwork, Platform, WalletInit } from '@web3-onboard/common';
declare function keystone({ customNetwork, filter, containerElement, consecutiveEmptyAccountThreshold }?: {
    customNetwork?: CustomNetwork;
    filter?: Platform[];
    containerElement?: string;
    /**
     * A number that defines the amount of consecutive empty addresses displayed
     * within the Account Select modal. Default is 5
     */
    consecutiveEmptyAccountThreshold?: number;
}): WalletInit;
export default keystone;
