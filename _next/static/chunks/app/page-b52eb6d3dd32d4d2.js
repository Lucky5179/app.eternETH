(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1931],{46601:function(){},10193:function(e,t,n){Promise.resolve().then(n.bind(n,16423))},16423:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var a=n(57437),s=n(2265),l=n(24934),r=n(26735),i=n(15371),c=n(62655),o=n(6920),d=n(45079),u=n(30568),x=n(68893),m=n(22554),h=n(53413),p=n(12045),f=n(20488),b=n(44839),g=n(96164);function w(e){let t=["","K","M","B","T"],n=Math.max(0,Math.floor(Math.log10(Math.abs(e))/3)),a=n>=t.length?e:(e/Math.pow(1e3,n)).toFixed(1);return"".concat(a).concat(t[n])}var j=e=>{let{message:t,onClose:n}=e,[l,r]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{if(t){r(!0);let e=setTimeout(()=>{r(!1),n()},1e3);return()=>clearTimeout(e)}},[t,n]),(0,a.jsx)("div",{className:"fixed rounded-full top-10 left-50 right-50 z-50 ".concat("transition-all duration-500 ".concat(l?"opacity-100":"opacity-0")),children:(0,a.jsx)("div",{className:"text-center py-4 lg:px-4 bg-black bg-opacity-75",children:(0,a.jsxs)("div",{className:"p-2 bg-green-400 items-center text-black leading-none lg:rounded-full flex lg:inline-flex",role:"alert",children:[(0,a.jsx)("span",{className:"flex rounded-full uppercase px-1 py-1 text-xs font-bold mr-3",children:"✅"}),(0,a.jsx)("span",{className:"font-semibold mr-2 text-left flex-auto",children:t})]})})})},y=n(95127),v=n(34599);let N=e=>{let{words:t,duration:n=1e3,className:l}=e,[r,i]=(0,s.useState)(t[0]),[c,o]=(0,s.useState)(!1),d=(0,s.useCallback)(()=>{i(t[t.indexOf(r)+1]||t[0]),o(!0)},[r,t]);return(0,s.useEffect)(()=>{c||setTimeout(()=>{d()},n)},[c,n,d]),(0,a.jsx)(y.M,{onExitComplete:()=>{o(!1)},children:(0,a.jsx)(v.E.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.4,ease:"easeInOut",type:"spring",stiffness:100,damping:10},exit:{opacity:0,y:-40,x:40,filter:"blur(8px)",scale:2,position:"absolute"},className:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,g.m6)((0,b.W)(t))}("z-10 inline-block relative text-left text-orange-500 dark:text-neutral-100 px-2",l),children:r.split("").map((e,t)=>(0,a.jsx)(v.E.span,{initial:{opacity:0,y:10,filter:"blur(8px)"},animate:{opacity:1,y:0,filter:"blur(0px)"},transition:{delay:.08*t,duration:.4},className:"inline-block",children:e},r+t))},r)})};function C(){return(0,a.jsx)("div",{className:"h-[5rem] text-3xl flex justify-center items-center px-4",children:(0,a.jsxs)("div",{className:"mx-auto font-normal",children:["Trade",(0,a.jsx)(N,{words:["faster","easier","incognito","decentralised"]})," ",(0,a.jsx)("br",{})]})})}let k=["0xC9bCa88B04581699fAb5aa276CCafF7Df957cbbf","0x812Ba41e071C7b7fA4EBcFB62dF5F45f6fA853Ee","0xb90b2a35c65dbc466b04240097ca756ad2005295","0xD29DA236dd4AAc627346e1bBa06A619E8c22d7C5","0x6982508145454Ce325dDbE47a25d4ec3d2311933","0xaaeE1A9723aaDB7afA2810263653A34bA2C21C7a"];var E=e=>{let{setTokenAddress:t}=e,[n,l]=(0,s.useState)({}),r=async e=>{try{let t=await fetch("https://api.dexscreener.com/latest/dex/search/?q=".concat(e)),n=(await t.json()).pairs.find(t=>t.baseToken.address.toLowerCase()===e.toLowerCase());if(n){let{symbol:t}=n.baseToken;l(n=>({...n,[e]:{symbol:t}}))}}catch(t){console.error("Error fetching data for token ".concat(e,":"),t)}},i=e=>{t(e)};return(0,s.useEffect)(()=>{k.forEach(e=>{r(e)})},[]),(0,a.jsx)("div",{className:"flex flex-wrap gap-4 mt-5",children:k.map(e=>{var t,s;return(0,a.jsxs)("div",{className:"bg-zinc-950 p-4 rounded-lg cursor-pointer flex items-center gap-2 text-white hover:bg-zinc-800",onClick:()=>i(e),children:[(0,a.jsx)("img",{src:"https://dd.dexscreener.com/ds-data/tokens/ethereum/".concat(e,".png"),alt:(null===(t=n[e])||void 0===t?void 0:t.symbol)||"Token",className:"w-8 h-8 rounded-full"}),(0,a.jsx)("span",{children:(null===(s=n[e])||void 0===s?void 0:s.symbol)||""})]},e)})})},T=()=>{let{connect:e}=(0,l.$)(),{address:t,isConnected:n}=(0,r.m)(),[b,g]=(0,s.useState)(""),[y,v]=(0,s.useState)(null),[N,k]=(0,s.useState)(null),[T,S]=(0,s.useState)(""),[z,A]=(0,s.useState)("buy"),[D,H]=(0,s.useState)(""),[P,B]=(0,s.useState)(!0),[M,I]=(0,s.useState)(""),[_,L]=(0,s.useState)(!1),[q,O]=(0,s.useState)(!1),[W,Y]=(0,s.useState)("Auto"),[U,$]=(0,s.useState)(10),[G,Q]=(0,s.useState)(!1),[X,R]=(0,s.useState)(""),[K,V]=(0,s.useState)(""),[Z,J]=(0,s.useState)(""),{address:ee}=(0,r.m)();(0,s.useEffect)(()=>{(async()=>{if(!b){I("");return}L(!0),I("");try{{let e=new x.Q(window.ethereum),t=new m.CH(b,["function totalSupply() view returns (uint256)"],e);await t.totalSupply()}let e=p.d;if(n){let t=new x.Q(window.ethereum).getSigner();e=await t.getAddress()}let t=await F(b,e);v(t),k(null)}catch(e){console.error("Error checking token address:",e),e instanceof Error&&e.message.toLowerCase().includes("erc-20")?I("Please insert only ERC-20 (Ethereum) tokens."):I("Please install a Web3 wallet extension first."),v(null),k(null)}L(!1)})()},[b,n]);let et=async()=>{try{var e;let t=await F(b,null!==(e=null==ee?void 0:ee.toString())&&void 0!==e?e:"");v(t)}catch(e){console.error("Error fetching token data:",e)}};(0,s.useEffect)(()=>{let e=setInterval(()=>{et()},1e3);return()=>{clearInterval(e)}},[b,ee]);let en=()=>{O(!q)},ea=async()=>{if(!y||!n||!ee)return;let e=new x.Q(window.ethereum),t=await h.HI.fetchTokenData(h.a_.MAINNET,b,e),a=h.DX[h.a_.MAINNET],s=await h.HI.fetchPairData(t,a,e),l=new h.AW([s],"buy"===z?a:t);if("buy"===z){if(!T||0===parseFloat(T)){J("");return}let e=new x.Q(window.ethereum).getSigner(),n=await e.getBalance();if(parseFloat(i.dF(n.toString()))<parseFloat(T)){J("Insufficient ETH balance");return}let s=i.fi(T),r=new h.ho(l,new h.dt(a,s),h.YL.EXACT_INPUT).outputAmount.raw,c=w(parseFloat((0,i.bM)(r.toString(),t.decimals)));try{let e=await fetch("https://api.dexscreener.com/latest/dex/search/?q=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"),t=(await e.json()).pairs.find(e=>"WETH"===e.baseToken.symbol&&"ethereum"===e.chainId),n=t?parseFloat(t.priceUsd):null;if(n){let e=parseFloat(T)*n,t="$".concat(e.toFixed(2));J("≈ ".concat(c," ").concat(y.symbol," (").concat(t,")"))}else J("≈ ".concat(c," ").concat(y.symbol))}catch(e){console.error("Error fetching WETH price:",e),J("≈ ".concat(c," ").concat(y.symbol))}}else{let n=new m.CH(t.address,["function balanceOf(address owner) view returns (uint256)"],e),a=await n.balanceOf(ee),s=parseFloat((0,i.bM)(a.toString(),t.decimals)),l=parseFloat(T||"0");if(s<l){J("Insufficient balance");return}let r=l*y.tokenPrice,c=await fetch("https://api.dexscreener.com/latest/dex/search/?q=0x4e68ccd3e89f51c3074ca5072bbac773960dfa36"),o=(await c.json()).pairs.find(e=>"WETH"===e.baseToken.symbol&&"ethereum"===e.chainId),d=o?parseFloat(o.priceUsd):null,u=d?r/d:null,x=u?u.toFixed(4):"0",h="$".concat(r.toFixed(2));J("≈ ".concat(x," ETH (").concat(h,")"))}};(0,s.useEffect)(()=>{ea()},[T,z,n,y]);let es=async()=>{try{{let e=new x.Q(window.ethereum).getSigner(),t=new m.CH(b,["function approve(address spender, uint256 amount) external returns (bool)"],e),n=new m.CH("0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",["function swapExactTokensForETH(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)","function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline) external payable returns (uint[] memory amounts)"],e),a=(0,i.vz)(T,y.decimals),s=await t.approve(n.address,a);await s.wait(),console.log("Token spend approved.")}}catch(e){console.error("Approval Error:",e),L(!1),H("Approval Failed. Please try again.")}},el=async()=>{if(!n){H("Please Connect Your Wallet");return}try{L(!0),H(""),V("");{let e;let t=new x.Q(window.ethereum),n=t.getSigner(),a=await n.getAddress(),s=new m.CH("0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",["function swapExactTokensForETH(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)","function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline) external payable returns (uint[] memory amounts)"],n),l=[h.DX[h.a_.MAINNET].address,b],r=Math.floor(Date.now()/1e3)+60*U;if("buy"===z){let t=(0,i.fi)(T);console.log("Swapping ETH to tokens..."),e=await s.swapExactETHForTokens(0,l,a,r,{value:t})}else if("sell"===z){let n=new m.CH(b,["function allowance(address owner, address spender) external view returns (uint256)"],t),c=await n.allowance(a,s.address),o=(0,i.vz)(T,y.decimals);c.lt(o)&&(console.log("Approving token spend..."),H("Approving..."),await es()),console.log("Swapping tokens to ETH..."),H("Fetching Trade..."),e=await s.swapExactTokensForETH(o,0,l.reverse(),a,r)}H("Transaction Pending...");let c=await e.wait();H("Transaction Confirmed."),console.log("Transaction Hash:",c.transactionHash)}}catch(e){console.error("Transaction Error:",e),H("Transaction Cancelled.")}finally{L(!1)}},er=async e=>{if(n&&y){if("buy"===z){let t=new x.Q(window.ethereum).getSigner(),n=await t.getBalance(),a=parseFloat(i.dF(n.toString()));S((100===e?a-.01:a*e/100).toString())}else"sell"===z&&S((y.userBalance*e/100).toString())}};return(0,a.jsx)(c.pj,{theme:(0,f.$)(),children:(0,a.jsxs)("div",{className:"min-h-screen flex flex-col justify-between ".concat(P?"bg-black text-white":"bg-white text-black"),children:[(0,a.jsx)(j,{message:X,onClose:()=>{R("")}}),(0,a.jsxs)("header",{className:"flex justify-between items-center p-4",children:[(0,a.jsxs)("button",{onClick:()=>window.location.reload(),className:"flex items-center space-x-2 cursor-pointer",children:[(0,a.jsx)("img",{src:"/icon.png",alt:"UniFlash Icon",className:"w-6 h-6"}),(0,a.jsx)("span",{className:"font-bold ".concat(P?"text-white":"text-black"),children:"UniFlash"})]}),(0,a.jsx)("div",{className:"flex items-center",children:(0,a.jsx)(c.NL,{})})]}),y?(0,a.jsxs)("main",{className:"flex flex-col md:flex-row justify-between pr-4 pl-4 rounded-lg bg-transparent shadow-lg shadow-orange-500/50 shadow-[_1px_1px_25px_1px]",children:[(0,a.jsxs)("div",{className:"relative w-full md:w-2/3 rounded-lg",children:[(0,a.jsx)("div",{className:"tradingview-chart",children:(0,a.jsx)("iframe",{className:"pt-4 rounded-[35px] saturate-120",src:"https://dexscreener.com/ethereum/".concat(b,"?embed=1&theme=dark&info=0"),width:"100%",height:"700",frameBorder:"0",allowFullScreen:!0})}),(0,a.jsx)("div",{className:"absolute bottom-0 w-full h-10 bg-black "})]}),(0,a.jsxs)("div",{className:"w-full md:w-1/3 pl-0 md:pl-8 pt-4 rounded-lg",children:[(0,a.jsxs)("div",{className:"token-details bg-zinc-950 border-zinc-800 rounded-lg p-4 md:p-2 w-full max-w-md mb-4 text-sm md:text-base flex justify-between items-start",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:"text-zinc-400",children:"\uD83E\uDDFF Token:"})," ",y.name," (",y.symbol,")",(0,a.jsx)("button",{className:"ml-2 text-zinc-400 hover:text-white focus:outline-none",onClick:()=>{navigator.clipboard.writeText(b),R("Token address copied to clipboard"),Q(!0)},children:(0,a.jsx)(o.G,{icon:d.Yjj})})]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:"text-zinc-400",children:"\uD83D\uDCC8 Price:"})," ",null!==y.tokenPrice?(0,a.jsxs)(a.Fragment,{children:["$",y.tokenPrice<1e-6?(0,a.jsxs)(a.Fragment,{children:[Number(y.tokenPrice).toFixed(8).replace(/0+$/,""),(0,a.jsx)("span",{className:"text-xs text-gray-500",children:y.tokenPrice.toExponential().split("-")[1].length-1})]}):Number(y.tokenPrice).toPrecision(8)]}):"N/A",null!==y.priceChange24h?(0,a.jsxs)("span",{className:"ml-2 ".concat(y.priceChange24h>=0?"text-green-500":"text-red-500"),children:["(",y.priceChange24h>=0?"+":"",y.priceChange24h.toFixed(2),"%)",(0,a.jsx)(o.G,{icon:d.SZw,className:"ml-1"})]}):null]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:"text-zinc-400",children:"\uD83D\uDCCA Market Cap:"})," ",null!==y.marketCap?"$".concat(w(y.marketCap)):"N/A"]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:"text-zinc-400",children:"⚖️ Liquidity:"})," ",null!==y.liquidity?"$".concat(w(y.liquidity)):"N/A"]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:"text-zinc-400",children:"\uD83C\uDF0A 24h Volume:"})," ",null!==y.volume24h?"$".concat(w(y.volume24h)):"N/A"]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:"text-zinc-400",children:"\uD83D\uDCC4 Ownership:"})," ","Renounced"===y.ownership?(0,a.jsx)("span",{className:"text-green-500",children:y.ownership}):"Unknown"===y.ownership?(0,a.jsx)("span",{className:"text-zinc-500",children:y.ownership}):(0,a.jsx)("a",{href:"https://etherscan.io/address/".concat(y.ownership),target:"_blank",rel:"noopener noreferrer",className:"text-blue-500",children:"".concat(y.ownership.slice(0,6),"...").concat(y.ownership.slice(-4))})]}),y.socials&&y.socials.length>0&&(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"text-zinc-400",children:"\uD83C\uDF10 Socials:"})," ",y.socials.map(e=>(0,a.jsxs)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"ml-2",children:["website"===e.type&&(0,a.jsx)(o.G,{icon:d.g4A}),"telegram"===e.type&&(0,a.jsx)(o.G,{icon:u.Uv8}),"twitter"===e.type&&(0,a.jsx)(o.G,{icon:u.mdU})]},e.url))]})]}),(0,a.jsx)("button",{className:"text-zinc-400 hover:text-white focus:outline-none",onClick:()=>window.location.reload(),children:(0,a.jsx)(o.G,{icon:d.NBC})})]}),(0,a.jsxs)("div",{className:"user-holdings mt-4 bg-zinc-950 border-zinc-800 rounded-lg p-2 w-full max-w-md mb-4 shadow-md ".concat("sell"===z?"shadow-red-500/30":"shadow-green-500/30"),children:[(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:"text-zinc-400",children:"\uD83D\uDC8E Your Supply:"})," ",n?(0,a.jsxs)(a.Fragment,{children:[w(y.userBalance)," of"," ",(0,a.jsxs)("span",{className:"text-zinc-400",children:[w(y.totalSupply)," (Total Supply)"]})," ","≈"," ",(0,a.jsxs)("span",{className:y.userBalance/y.totalSupply*100>0?"text-green-500":"",children:[(y.userBalance/y.totalSupply*100).toFixed(2),"%"]})]}):"(Connect Your Wallet)"]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:"text-zinc-400",children:"\uD83D\uDCB5 Your Holdings:"})," ",n?(0,a.jsxs)(a.Fragment,{children:[y.userBalance.toLocaleString()," ",y.symbol," ≈"," ",(0,a.jsx)("span",{className:y.userBalance*y.tokenPrice>0?"text-green-500":"",children:null!==y.tokenPrice?"$".concat((y.userBalance*y.tokenPrice).toLocaleString()):"N/A"})]}):"(Connect Your Wallet)"]})]}),(0,a.jsxs)("div",{className:"buy-sell-section mt-4 bg-zinc-950 border border-zinc-900 rounded-lg p-4 md:p-2 w-full max-w-md mb-4",children:[(0,a.jsxs)("div",{className:"flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4 mb-4",children:[(0,a.jsx)("button",{onClick:()=>A("buy"),className:"py-2 px-4 w-full ".concat("buy"===z?"bg-green-500":"bg-zinc-900 text-white hover:bg-zinc-800 "," rounded-l-lg"),children:"BUY"}),(0,a.jsx)("button",{onClick:()=>A("sell"),className:"py-2 px-4 w-full ".concat("sell"===z?"bg-red-500 text-white":"bg-zinc-900 text-white hover:bg-zinc-800"," rounded-r-lg"),children:"SELL"}),(0,a.jsxs)("div",{className:"relative ml-2",children:[(0,a.jsx)("button",{onClick:en,className:"text-gray-400 hover:text-gray-200 focus:outline-none",children:(0,a.jsx)(o.G,{icon:d.b7W})}),"Auto"!==W&&(0,a.jsxs)("div",{className:"absolute top-0 left-0 mt-1 ml-8 text-xs text-gray-400 whitespace-nowrap",children:[W,"% slippage"]})]})]}),q&&(0,a.jsxs)("div",{className:"bg-zinc-950 text-white rounded shadow-lg p-4",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,a.jsx)("h3",{className:"text-lg font-medium",children:"Transaction Settings"}),(0,a.jsx)("button",{onClick:en,className:"text-gray-500 hover:text-gray-700 focus:outline-none",children:(0,a.jsx)(o.G,{icon:d.NBC})})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{htmlFor:"slippage",className:"block mb-2 text-sm font-medium text-gray-700",children:"Max. slippage"}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsxs)("div",{className:"px-4 py-2 rounded-l ".concat("Auto"===W?"bg-zinc-950":"bg-zinc-950 "),children:[(0,a.jsx)("input",{type:"radio",id:"auto",name:"slippage",value:"Auto",checked:"Auto"===W,onChange:e=>Y(e.target.value),className:"mr-2"}),(0,a.jsx)("label",{htmlFor:"auto",className:"text-sm",children:"Auto"})]}),(0,a.jsxs)("div",{className:"px-4 py-2 rounded-r ".concat("Auto"!==W?"bg-zinc-950":"bg-zinc-950 "),children:[(0,a.jsx)("input",{type:"radio",id:"custom",name:"slippage",value:"Custom",checked:"Auto"!==W,onChange:e=>Y("0.5"),className:"mr-2"}),(0,a.jsx)("label",{htmlFor:"custom",className:"text-sm",children:"Custom"})]}),"Auto"!==W&&(0,a.jsxs)("div",{className:"ml-2",children:[(0,a.jsx)("input",{type:"number",step:"0.1",value:W,onChange:e=>Y(e.target.value),className:"w-16 px-2 py-1 bg-zinc-950 border border-zinc-800 rounded"}),(0,a.jsx)("span",{className:"ml-1",children:"%"})]})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"deadline",className:"block mb-2 text-sm font-medium text-gray-700",children:"Transaction deadline"}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("input",{id:"deadline",type:"number",step:"1",min:"1",value:U,onChange:e=>$(parseInt(e.target.value)),className:"w-16 px-2 py-1 bg-zinc-950 border border-zinc-800 rounded"}),(0,a.jsx)("span",{className:"ml-1",children:"minutes"})]})]})]}),(0,a.jsxs)("div",{className:"flex items-center border rounded-lg p-2 w-full max-w-md mb-4 border-zinc-800 focus-within:border-zinc-600 hover:border-zinc-600",children:[(0,a.jsx)("span",{className:"flex items-center justify-center bg-transparent p-2 rounded-l",children:"buy"===z?(0,a.jsx)("img",{src:"/eth-logo.png",alt:"ETH",className:"w-6 h-6"}):(0,a.jsx)("img",{src:"https://dd.dexscreener.com/ds-data/tokens/ethereum/".concat(b,".png"),alt:y.symbol,className:"w-6 h-6 rounded-full"})}),(0,a.jsx)("input",{type:"number",value:T,onChange:e=>S(e.target.value),placeholder:"Type ".concat("buy"===z?"ETH":y.symbol," amount"),className:"bg-transparent flex-1 mx-2 outline-none ".concat(P?"text-white":"text-black")})]}),(0,a.jsx)("div",{className:"text-zinc-400 mb-4",children:Z}),(0,a.jsxs)("div",{className:"flex justify-center space-x-4 mb-4",children:[(0,a.jsx)("button",{onClick:()=>er(25),className:"bg-zinc-900 text-zinc-400 py-2 px-12 rounded-lg hover:bg-zinc-800",children:"25%"}),(0,a.jsx)("button",{onClick:()=>er(50),className:"bg-zinc-900 text-zinc-400 py-2 px-12 rounded-lg hover:bg-zinc-800",children:"50%"}),(0,a.jsx)("button",{onClick:()=>er(100),className:"bg-zinc-900 text-zinc-400 py-2 px-12 rounded-lg hover:bg-zinc-800",children:"MAX"})]}),"You don't have enough ETH."===D&&(0,a.jsx)("p",{className:"text-red-500 text-center mb-4",children:D}),"Please Connect Your Wallet"===D&&(0,a.jsx)("p",{className:"text-red-500 text-center mb-4",children:D}),(0,a.jsx)("button",{onClick:el,disabled:_||!n||Z.includes("Insufficient"),className:"border border-zinc-800 py-2 px-4 rounded-full mt-4 w-full max-w-md hover:bg-zinc-800 ".concat(_||!n||Z.includes("Insufficient")?"opacity-50 cursor-not-allowed":""),children:_?"Loading...":n?Z.includes("Insufficient")?Z:"Confirm":"Connect Your Wallet"}),D&&"You don't have enough ETH."!==D&&"Please Connect Your Wallet"!==D&&(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)("p",{className:D.includes("Failed")?"text-red-500":"",children:D}),"Transaction Confirmed."===D&&(0,a.jsx)("a",{href:"#",className:"text-blue-500",children:"View on block explorer"})]})]})]})]}):(0,a.jsxs)("main",{className:"flex flex-col items-center justify-center flex-1 px-2",children:[(0,a.jsx)(C,{}),(0,a.jsxs)("div",{className:"flex items-center border rounded-full p-2 w-full max-w-md ".concat(P?"border-gray-400":"border-gray-800"," focus-within:border-orange-500 hover:border-orange-500"),children:[(0,a.jsx)(o.G,{icon:d.wn1,className:"w-6 h-6 ".concat(P?"text-gray-500":"text-gray-800")}),(0,a.jsx)("input",{type:"text",value:b,onChange:e=>g(e.target.value),onKeyDown:e=>{e.key},placeholder:"Paste token address",className:"bg-transparent flex-1 mx-2 outline-none ".concat(P?"text-white":"text-black")})]}),M&&(0,a.jsx)("p",{className:"text-red-500 mt-2",children:M}),(0,a.jsx)("div",{className:"mb-8"}),(0,a.jsx)("div",{className:"flex mt-20",children:(0,a.jsx)("h2",{className:"text-white w-full",children:"Trending on Ethereum \uD83D\uDD25"})}),(0,a.jsx)(E,{setTokenAddress:g})]}),(0,a.jsx)("footer",{className:"text-center py-4",children:(0,a.jsxs)("p",{className:"".concat(P?"text-white":"text-black"),children:["dApp by ",(0,a.jsx)("a",{href:"https://eternethai.com",target:"_blank",rel:"noopener noreferrer",children:"EternETHAI"}),"."]})})]})})};async function F(e,t){let n=new x.Q(window.ethereum),a=new m.CH(e,["function name() view returns (string)","function symbol() view returns (string)","function totalSupply() view returns (uint256)","function balanceOf(address owner) view returns (uint256)","function decimals() view returns (uint8)","function owner() view returns (address)"],n);try{let n,s;let[l,r,c,o,d]=await Promise.all([a.name(),a.symbol(),a.totalSupply(),a.balanceOf(t),a.decimals()]),u=parseFloat((0,i.bM)(c.toString(),d)),x=parseFloat((0,i.bM)(o.toString(),d)),{liquidity:m,fdv:h,pairCreatedAt:p}=await S(e,r);try{n=await a.owner()}catch(e){n=null}s="0x0000000000000000000000000000000000000000"===n?"Renounced":n||"Unknown";let f=await z(e,r,u),{tokenPrice:b,marketCap:g}=f||{};return{name:l,symbol:r,totalSupply:u,userBalance:x,decimals:d,tokenPrice:b,marketCap:g,liquidity:m,ownership:s,fdv:h,pairCreatedAt:p,volume24h:(null==f?void 0:f.volume24h)||null,txns24h:(null==f?void 0:f.txns24h)||{buys:null,sells:null},priceChange24h:(null==f?void 0:f.priceChange24h)||null,socials:(null==f?void 0:f.socials)||null}}catch(e){throw console.error("Error fetching token contract data:",e),Error("Failed to fetch token contract data")}}async function S(e,t){try{let t=await fetch("https://api.dexscreener.com/latest/dex/search/?q=".concat(e)),a=await t.json(),s=null,l=0;if(a.pairs.length>0){for(let t of a.pairs)if(t.baseToken.address.toLowerCase()===e.toLowerCase()){var n;let e=(null===(n=t.liquidity)||void 0===n?void 0:n.usd)||0;e>l&&(l=e,s=t)}}if(s){let{liquidity:e,fdv:t,pairCreatedAt:n}=s;return{liquidity:(null==e?void 0:e.usd)||null,fdv:t||null,pairCreatedAt:n||null}}return{liquidity:null,fdv:null,pairCreatedAt:null}}catch(e){return console.error("Error fetching DexScreener data:",e),{liquidity:null,fdv:null,pairCreatedAt:null}}}async function z(e,t,n){try{var a,s,l;let t=await fetch("https://api.dexscreener.com/latest/dex/search/?q=".concat(e)),r=await t.json(),i=null,c=0;if(r.pairs.length>0){for(let t of r.pairs)if(t.baseToken.address.toLowerCase()===e.toLowerCase()){let e=(null===(a=t.liquidity)||void 0===a?void 0:a.usd)||0;e>c&&(c=e,i=t)}}if(i){let{priceUsd:e,volume:t,txns:a,priceChange:r,info:c}=i;return{tokenPrice:e?parseFloat(e):null,marketCap:e&&n?parseFloat(e)*n:null,volume24h:(null==t?void 0:t.h24)||null,txns24h:{buys:(null==a?void 0:null===(s=a.h24)||void 0===s?void 0:s.buys)||null,sells:(null==a?void 0:null===(l=a.h24)||void 0===l?void 0:l.sells)||null},priceChange24h:(null==r?void 0:r.h24)||null,socials:(null==c?void 0:c.socials)||null}}return{tokenPrice:null,marketCap:null,volume24h:null,txns24h:{buys:null,sells:null},priceChange24h:null,socials:null}}catch(e){return console.error("Error fetching DexScreener pair data:",e),{tokenPrice:null,marketCap:null,volume24h:null,txns24h:{buys:null,sells:null},priceChange24h:null,socials:null}}}}},function(e){e.O(0,[9472,3676,3958,570,319,2074,2971,7023,1744],function(){return e(e.s=10193)}),_N_E=e.O()}]);