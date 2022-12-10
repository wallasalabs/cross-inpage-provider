"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6351],{96351:function(f,e,t){t.r(e),t.d(e,{default:function(){return p}});var n=t(86854),a=t(64687),s=t.n(a),r=t(67294),c=t(17293),l=(new(t(72401).Conflux)).Contract({abi:[{inputs:[{internalType:"string",name:"_name",type:"string"},{internalType:"uint8",name:"_decimals",type:"uint8"},{internalType:"string",name:"_symbol",type:"string"},{internalType:"uint256",name:"_totalSupply",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"_owner",type:"address"},{indexed:!0,internalType:"address",name:"_spender",type:"address"},{indexed:!1,internalType:"uint256",name:"_value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"_from",type:"address"},{indexed:!0,internalType:"address",name:"_to",type:"address"},{indexed:!1,internalType:"uint256",name:"_value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"_owner",type:"address"},{internalType:"address",name:"_spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"remaining",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"},{internalType:"address",name:"",type:"address"}],name:"allowed",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_spender",type:"address"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"success",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"balance",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"balances",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_to",type:"address"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"success",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_from",type:"address"},{internalType:"address",name:"_to",type:"address"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"success",type:"bool"}],stateMutability:"nonpayable",type:"function"}],bytecode:"0x60806040523480156200001157600080fd5b50604051620010ca380380620010ca833981810160405260808110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b838201915060208201858111156200006f57600080fd5b82518660018202830111640100000000821117156200008d57600080fd5b8083526020830192505050908051906020019080838360005b83811015620000c3578082015181840152602081019050620000a6565b50505050905090810190601f168015620000f15780820380516001836020036101000a031916815260200191505b5060405260200180519060200190929190805160405193929190846401000000008211156200011f57600080fd5b838201915060208201858111156200013657600080fd5b82518660018202830111640100000000821117156200015457600080fd5b8083526020830192505050908051906020019080838360005b838110156200018a5780820151818401526020810190506200016d565b50505050905090810190601f168015620001b85780820380516001836020036101000a031916815260200191505b50604052602001805190602001909291905050508360009080519060200190620001e49291906200026e565b5082600160006101000a81548160ff021916908360ff1602179055508160029080519060200190620002189291906200026e565b508060038190555080600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505050506200031d565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620002b157805160ff1916838001178555620002e2565b82800160010185558215620002e2579182015b82811115620002e1578251825591602001919060010190620002c4565b5b509050620002f19190620002f5565b5090565b6200031a91905b8082111562000316576000816000905550600101620002fc565b5090565b90565b610d9d806200032d6000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c8063313ce56711610071578063313ce567146102935780635c658165146102b757806370a082311461032f57806395d89b4114610387578063a9059cbb1461040a578063dd62ed3e14610470576100a9565b806306fdde03146100ae578063095ea7b31461013157806318160ddd1461019757806323b872dd146101b557806327e235e31461023b575b600080fd5b6100b66104e8565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100f65780820151818401526020810190506100db565b50505050905090810190601f1680156101235780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61017d6004803603604081101561014757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610586565b604051808215151515815260200191505060405180910390f35b61019f610678565b6040518082815260200191505060405180910390f35b610221600480360360608110156101cb57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061067e565b604051808215151515815260200191505060405180910390f35b61027d6004803603602081101561025157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109e9565b6040518082815260200191505060405180910390f35b61029b610a01565b604051808260ff1660ff16815260200191505060405180910390f35b610319600480360360408110156102cd57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a14565b6040518082815260200191505060405180910390f35b6103716004803603602081101561034557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a39565b6040518082815260200191505060405180910390f35b61038f610a82565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103cf5780820151818401526020810190506103b4565b50505050905090810190601f1680156103fc5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6104566004803603604081101561042057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b20565b604051808215151515815260200191505060405180910390f35b6104d26004803603604081101561048657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ce0565b6040518082815260200191505060405180910390f35b60008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561057e5780601f106105535761010080835404028352916020019161057e565b820191906000526020600020905b81548152906001019060200180831161056157829003601f168201915b505050505081565b600081600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60035481565b600080600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156107b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f62616c616e636573206e6f7420656e6f7567680000000000000000000000000081525060200191505060405180910390fd5b8281101561082b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f616c6c6f77616e6365206e6f7420656e6f75676800000000000000000000000081525060200191505060405180910390fd5b82600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555082600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8110156109785782600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055505b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040518082815260200191505060405180910390a360019150509392505050565b60046020528060005260406000206000915090505481565b600160009054906101000a900460ff1681565b6005602052816000526040600020602052806000526040600020600091509150505481565b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60028054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b185780601f10610aed57610100808354040283529160200191610b18565b820191906000526020600020905b815481529060010190602001808311610afb57829003601f168201915b505050505081565b600081600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610bd7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f62616c616e636573206e6f7420656e6f7567680000000000000000000000000081525060200191505060405180910390fd5b81600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490509291505056fea2646970667358221220ba3544f95832f9a6f264be220893ae1c951498e955e1908563105ee727d890c064736f6c634300060a0033"}),o={types:{CIP23Domain:[{name:"name",type:"string"},{name:"version",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],Person:[{name:"name",type:"string"},{name:"wallets",type:"address[]"}],Mail:[{name:"from",type:"Person"},{name:"to",type:"Person[]"},{name:"contents",type:"string"}],Group:[{name:"name",type:"string"},{name:"members",type:"Person[]"}]},domain:{name:"Ether Mail",version:"1",chainId:1,verifyingContract:"0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC"},primaryType:"Mail",message:{from:{name:"Cow",wallets:["0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826","0xDeaDbeefdEAdbeefdEadbEEFdeadbeEFdEaDbeeF"]},to:[{name:"Bob",wallets:["0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB","0xB0BdaBea57B0BDABeA57b0bdABEA57b0BDabEa57","0xB0B0b0b0b0b0B000000000000000000000000000"]}],contents:"Hello, Bob!"}},u=t(69135),i=[{name:"MoonSwap",url:"https://moonswap.fi/exchange/swap"},{name:"ShuttleFlow",url:"https://shuttleflow.io/shuttle"},{name:"CONFLUXSCAN",url:"https://confluxscan.io/"},{name:"Stampers",url:"https://stampers.app/"}],d="cfxtest:acepe88unk7fvs18436178up33hb4zkuf62a9dk1gv";var p=function(){var f=(0,r.useState)(!1),e=(0,n.Z)(f,2),t=e[0],a=e[1],p=(0,r.useState)(""),b=(0,n.Z)(p,2),m=b[0],y=b[1],h=(0,r.useState)(""),v=(0,n.Z)(h,2),x=v[0],C=v[1],g=(0,r.useState)([]),w=(0,n.Z)(g,2),E=w[0],k=w[1],_=(0,r.useRef)(),T=(0,r.useRef)(),B=(0,r.useRef)(),q=function(){var f=(0,r.useState)(),e=(0,n.Z)(f,2),t=e[0],a=e[1];return(0,r.useEffect)((function(){var f=window.conflux||new c.EH({});a(f)}),[]),t}(),S=(0,r.useCallback)((function(f){f.isConnected()&&(a(!0),Promise.all([f.request({method:"cfx_accounts"}),f.request({method:"cfx_chainId"})]).then((function(f){var e=(0,n.Z)(f,2),t=e[0],a=e[1];k(t),y(a),C(parseInt(a,16).toString(10))})).catch(console.error),f.request({method:"cfx_accounts"}).then((function(f){return k(f)})).catch(console.error))}),[]),D=(0,r.useCallback)((function(){var f;return s().async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().awrap(q.request({method:"cfx_requestAccounts"}));case 2:f=e.sent,k(f);case 4:case"end":return e.stop()}}),null,null,null,Promise)}),[q]),A=(0,r.useCallback)((function(){var f,e,t,a,r;return s().async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,s().awrap(q.request({method:"cfx_accounts"}));case 2:return f=c.sent,e=(0,n.Z)(f,1),t=e[0],a={from:t,value:"0xde0b6b3a7640000",to:t},c.prev=6,c.next=9,s().awrap(q.request({method:"cfx_sendTransaction",params:[a]}));case 9:r=c.sent,console.log("send native token success: "+r),c.next=16;break;case 13:c.prev=13,c.t0=c.catch(6),console.log(c.t0);case 16:case"end":return c.stop()}}),null,null,[[6,13]],Promise)}),[q]),M=(0,r.useCallback)((function(){var f,e,t,a,r;return s().async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,s().awrap(q.request({method:"cfx_accounts"}));case 2:return f=c.sent,e=(0,n.Z)(f,1),t=e[0],a={from:t,to:d,data:l.approve(_.current.value,1e20).data},c.prev=6,c.next=9,s().awrap(q.request({method:"cfx_sendTransaction",params:[a]}));case 9:r=c.sent,console.log("approve token success: "+r),c.next=16;break;case 13:c.prev=13,c.t0=c.catch(6),console.log(c.t0);case 16:case"end":return c.stop()}}),null,null,[[6,13]],Promise)}),[q,_]),P=(0,r.useCallback)((function(){var f,e,t,a,r;return s().async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,s().awrap(q.request({method:"cfx_accounts"}));case 2:return f=c.sent,e=(0,n.Z)(f,1),t=e[0],a={from:t,to:d,data:l.transferFrom(T.current.value,B.current.value,1e19).data},c.prev=6,c.next=9,s().awrap(q.request({method:"cfx_sendTransaction",params:[a]}));case 9:r=c.sent,console.log("transfer from success: "+r),c.next=16;break;case 13:c.prev=13,c.t0=c.catch(6),console.log(c.t0);case 16:case"end":return c.stop()}}),null,null,[[6,13]],Promise)}),[q,B,T]),I=(0,r.useCallback)((function(){var f,e,t,a;return s().async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s().awrap(q.request({method:"cfx_accounts"}));case 2:return f=r.sent,e=(0,n.Z)(f,1),t=e[0],r.prev=5,r.next=8,s().awrap(q.request({method:"personal_sign",params:["personal sign message example",t]}));case 8:a=r.sent,console.log("personal sign success: "+a),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(5),console.log(r.t0);case 15:case"end":return r.stop()}}),null,null,[[5,12]],Promise)}),[q]),N=(0,r.useCallback)((function(){var f,e,t,a;return s().async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s().awrap(q.request({method:"cfx_accounts"}));case 2:return f=r.sent,e=(0,n.Z)(f,1),t=e[0],r.prev=5,r.next=8,s().awrap(q.request({method:"cfx_signTypedData_v4",params:[t,JSON.stringify(o)]}));case 8:a=r.sent,console.log("sing typed data v4 success: "+a),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(5),console.log(r.t0);case 15:case"end":return r.stop()}}),null,null,[[5,12]],Promise)}),[q]),Z=(0,r.useCallback)((function(){var f,e,t,a,r;return s().async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,s().awrap(q.request({method:"cfx_accounts"}));case 2:return f=c.sent,e=(0,n.Z)(f,1),t=e[0],a={from:t,data:l.constructor("Example",18,"EP",1e4).data},c.prev=6,c.next=9,s().awrap(q.request({method:"cfx_sendTransaction",params:[a]}));case 9:r=c.sent,console.log("deploy contract success: "+r),c.next=16;break;case 13:c.prev=13,c.t0=c.catch(6),console.log(c.t0);case 16:case"end":return c.stop()}}),null,null,[[6,13]],Promise)}),[q]),F=(0,r.useCallback)((function(){return s().async((function(f){for(;;)switch(f.prev=f.next){case 0:return f.prev=0,f.next=3,s().awrap(q.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:"cfxtest:acepe88unk7fvs18436178up33hb4zkuf62a9dk1gv",symbol:"cUSDT",decimals:18,image:"https://scan-icons.oss-cn-hongkong.aliyuncs.com/testnet/cfxtest%3Aacepe88unk7fvs18436178up33hb4zkuf62a9dk1gv.png"}}}));case 3:console.log("add token success"),f.next=9;break;case 6:f.prev=6,f.t0=f.catch(0),console.log(f.t0);case 9:case"end":return f.stop()}}),null,null,[[0,6]],Promise)}),[q]),O=(0,r.useCallback)((function(){return s().async((function(f){for(;;)switch(f.prev=f.next){case 0:return f.prev=0,f.next=3,s().awrap(q.request({method:"wallet_addConfluxChain",params:[{chainId:"0x47",chainName:"EVM Conflux",nativeCurrency:{name:"Conflux",symbol:"CFX",decimals:18},rpcUrls:["https://evmtestnet.confluxrpc.com"],blockExplorerUrls:["https://evmtestnet.confluxscan.io"]}]}));case 3:console.log("add network success"),f.next=9;break;case 6:f.prev=6,f.t0=f.catch(0),console.log(f.t0);case 9:case"end":return f.stop()}}),null,null,[[0,6]],Promise)}),[q]),U=(0,r.useCallback)((function(){return s().async((function(f){for(;;)switch(f.prev=f.next){case 0:return f.prev=0,f.next=3,s().awrap(q.request({method:"wallet_switchConfluxChain",params:[{chainId:"0x1"}]}));case 3:console.log("switch network success"),f.next=9;break;case 6:f.prev=6,f.t0=f.catch(0),console.log(f.t0);case 9:case"end":return f.stop()}}),null,null,[[0,6]],Promise)}),[q]);return(0,r.useEffect)((function(){q&&(S(q),q.on(c.jK.CONNECT,(function(f){console.log("connected"),a(!0),y(f.chainId),C(f.networkId),q.request({method:"cfx_accounts"}).then((function(f){return k(f)})).catch((function(f){return console.log(f)}))})),q.on(c.jK.ACCOUNTS_CHANGED,(function(f){k(f),console.log("cfx accountsChanged",f)})),q.on(c.jK.CHAIN_CHANGED,(function(f){y(f),C(parseInt(f,16).toString(10)),console.log("cfx chainChanged",f)})),q.on(c.jK.DISCONNECT,(function(){k([]),a(!1)})))}),[S,q]),r.createElement("div",null,r.createElement(u.p,{dapps:i}),!q&&r.createElement("a",{target:"_blank",href:"https://www.onekey.so/download/"},"Install OneKey Extension \u2192"),q&&r.createElement("div",null,r.createElement("div",null,r.createElement("p",null,t?"Wallet is initialized":"Wallet is not initialized"),r.createElement("p",null,"chainId: ",m),r.createElement("p",null,"networkId: ",x)),r.createElement("div",null,r.createElement("button",{disabled:E.length>0||!t,onClick:D},E.length?"connected":"connecte wallet"),r.createElement("p",null,E)),r.createElement("div",null,r.createElement("button",{disabled:0===E.length,onClick:A},"send native token to my self")),r.createElement("div",null,r.createElement("input",{ref:_,placeholder:"Sepnder Address"}),r.createElement("button",{disabled:0===E.length,onClick:M},"approve 100 cUDST limit")),r.createElement("div",null,r.createElement("input",{ref:T,placeholder:"from address"}),r.createElement("input",{ref:B,placeholder:"to address"}),r.createElement("button",{disabled:0===E.length,onClick:P},"transfer from")),r.createElement("div",null,r.createElement("button",{disabled:0===E.length,onClick:I},"personal sign")),r.createElement("div",null,r.createElement("button",{disabled:0===E.length,onClick:N},"sign typed data v4")),r.createElement("div",null,r.createElement("button",{disabled:0===E.length,onClick:Z},"deploy contract")),r.createElement("div",null,r.createElement("button",{disabled:0===E.length,onClick:F},"add token")),r.createElement("div",null,r.createElement("button",{disabled:0===E.length,onClick:O},"add network")),r.createElement("div",null,r.createElement("button",{disabled:0===E.length,onClick:U},"switch network"))))}},69135:function(f,e,t){t.d(e,{p:function(){return r}});var n=t(67294),a=t(214),s=t.n(a);function r(f){var e=f.dapps;return n.createElement("div",{className:s().container},n.createElement("h3",null,"Top DApps"),n.createElement("ul",null,e.map((function(f){return n.createElement("li",{key:f.name},n.createElement("a",{href:f.url,target:"_blank"},f.name," \u2197"))}))))}}}]);
//# sourceMappingURL=6351.d57d5ac71857b987.js.map