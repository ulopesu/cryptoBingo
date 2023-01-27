export const cryptoBingoAddress = '0x57A6304F15d9dC856993Ad84E9eCc1f553883d7D';
export const cryptoBingoABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "message",
				"type": "string"
			}
		],
		"name": "CompraCartelaLog",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "comprarCartela",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "message",
				"type": "string"
			}
		],
		"name": "GanhadorLog",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "pagarDevPai",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "resortearNums",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "cartelasBingo",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "sorteioID",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "jogador",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "premiada",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCartelasJogador",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "sorteioID",
						"type": "uint256"
					},
					{
						"internalType": "uint256[3]",
						"name": "numeros",
						"type": "uint256[3]"
					},
					{
						"internalType": "address",
						"name": "jogador",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "premiada",
						"type": "bool"
					}
				],
				"internalType": "struct Cartela[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getSorteioAtualEXT",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "sorteioAddr",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "sorteioID",
						"type": "uint256"
					},
					{
						"internalType": "uint256[3]",
						"name": "numSorteados",
						"type": "uint256[3]"
					},
					{
						"internalType": "bool",
						"name": "emJogo",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "totalCartelas",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "balance",
						"type": "uint256"
					}
				],
				"internalType": "struct SorteioInfo",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "sorteios",
		"outputs": [
			{
				"internalType": "contract Sorteio",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "totalCartelasJog",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
