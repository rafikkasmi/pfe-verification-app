import Web3 from 'web3'
import { AbiItem } from 'web3-utils'
import { CONTRACT_ABI, CONTRACT_ADDRESS, CONTRACT_OWNER } from './constants';


export const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'))




const contract = new web3.eth.Contract(CONTRACT_ABI as AbiItem[], CONTRACT_ADDRESS);


export const checkIfDiplomeExists = async (diplomaHash: string) => {

    try {
        const result = await contract.methods.getDiploma(diplomaHash).call({ from: CONTRACT_OWNER })
        console.log(result)
        return result
    } catch (e) {
        return false
    }
}
