// import ABI from "../../../smart-contract/build/contracts/DiplomaContract.json";

export const CONTRACT_ADDRESS = "0x2376733b5Faf11b8101CF55b00b0B9E534013120";

export const CONTRACT_OWNER = "0x4109C12d814CE5CaB03d44281F0cE0BAb0B09cBF";

export const ENCYPTION_SECRET_KEY = process.env.SECRET_KEY || "secretRandomShitThatNoOneKnows#1"

export const ENCYPTION_SECRET_IV_KEY = process.env.SECRET_IV_KEY || "secretRandomShitThatNoOneKnows#2"

export const ENCRYPTION_METHOD = process.env.ENCRYPTION_METHOD || "aes-256-cbc"

export const CONTRACT_ABI = JSON.parse(`[
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "diplomaHash",
          "type": "string"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "studentName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "birthDate",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "diplomaType",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "dateOfIssue",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "speciality",
              "type": "string"
            }
          ],
          "internalType": "struct DiplomaContract.Diploma",
          "name": "diplomaData",
          "type": "tuple"
        }
      ],
      "name": "createDiploma",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "diplomaHash",
          "type": "string"
        }
      ],
      "name": "getDiploma",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "studentName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "birthDate",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "diplomaType",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "dateOfIssue",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "speciality",
              "type": "string"
            }
          ],
          "internalType": "struct DiplomaContract.Diploma",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ]`);