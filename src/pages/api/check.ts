// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { decryptData } from '@/utils/decryption';
import { checkIfDiplomeExists, web3 } from '@/utils/web3';

import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    msg: string,
    data?: string  //temporariement
}

interface Request extends NextApiRequest {
    body: {
        encrypted_data: string;
        isHash: boolean;
    };
}


export default async function handler (
    req: Request,
    res: NextApiResponse<Data>
) {
    if (req.method === 'POST') {
        // Process a POST request
        const { encrypted_data, isHash } = req.body

        if (!encrypted_data) {
            return res.status(400).send({ msg: 'encrypted_data is required' })
        }


        try {
            console.log(encrypted_data)
            const decryptedData = decryptData(encrypted_data)

            let dataToCompare;

            if (isHash) {
                dataToCompare = decryptedData
            } else {
                dataToCompare = web3.utils.keccak256(decryptedData);
            }
            console.log("HASSHH : ", dataToCompare)

            const dataFromBlockchain = await checkIfDiplomeExists(dataToCompare);

            if (!dataFromBlockchain || !dataFromBlockchain.length) {
                return res.status(400).send({ msg: "Diplome n'existe pas dans la blockchain" })
            }

            return res.status(200).send({ msg: dataFromBlockchain })
        } catch (e) {
            console.log(e)
            return res.status(400).send({ msg: "Data Malformée" })
        }

    } else {
        return res.status(405).send({ msg: 'Only POST requests allowed' })
    }
}
