import Web3 from 'web3'
import { AbiItem } from 'web3-utils'
import { CONTRACT_ABI, CONTRACT_ADDRESS, CONTRACT_OWNER, WEB3_API } from './constants';


export const web3 = new Web3(new Web3.providers.HttpProvider(WEB3_API))




const contract = new web3.eth.Contract(CONTRACT_ABI as AbiItem[], CONTRACT_ADDRESS);




export const checkIfDiplomeExists = async (diplomaHash: string) => {

    let contractOwner = CONTRACT_OWNER;
    if (process.env.PRIVATE_KEY_OWNER) {
        const signer = web3.eth.accounts.privateKeyToAccount(
            process.env.PRIVATE_KEY_OWNER
        );
        web3.eth.accounts.wallet.add(signer);
        contractOwner = signer.address
    }

    try {
        const result = await contract.methods.getDiploma(diplomaHash).call({ from: contractOwner })
        console.log(result)
        return result
    } catch (e) {
        return false
    }
}
