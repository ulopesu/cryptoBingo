export const cryptoBingoAddress = '0x779fAA38064732e468891e02723cFaB22e2a9f3c';
export const cryptoBingoABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
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
		"name": "comprarCartela",
		"outputs": [],
		"stateMutability": "payable",
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
