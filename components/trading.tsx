// import React, { useEffect, useState } from "react";
// import web3 from 'web3';
// import { useAccount } from "wagmi";

// // Assuming you have the ABI and contract address

// export default function Home() {
//    // const contractABI = const [TreeStewardship]; // Replace with your contract ABI
// //const contractAddress = ""; // Replace with your contract address

//     const [userAddress, setUserAddress] = useState("");
//     const [isMounted, setIsMounted] = useState(false);
//     const { address, isConnected } = useAccount();
//     const [treeData, setTreeData] = useState([]);
//     const [treeId, setTreeId] = useState('');
//     const [price, setPrice] = useState('');
//     const [newSteward, setNewSteward] = useState('');

//     useEffect(() => {
//         setIsMounted(true);
//     }, []);

//     useEffect(() => {
//         if (isConnected && address) {
//             setUserAddress(address);
//         }
//     }, [address, isConnected]);

//     useEffect(() => {
//         if (isMounted) {
//             loadTrees();
//         }
//     }, [isMounted]);

//     const loadTrees = async () => {
//         try {
//             const web3 = new web3(window.ethereum);
//             const contract = new web3.eth.Contract(contractABI, contractAddress);
//             const totalTrees = await contract.methods.totalTrees().call();
//             const treeData = [];
//             for (let i = 1; i <= totalTrees; i++) {
//                 const treeDetails = await contract.methods.getTreeDetails(i).call();
//                 treeData.push(treeDetails);
//             }
//             setTreeData(treeData);
//         } catch (error) {
//             console.error('Failed to load trees', error);
//         }
//     };

//     const buyTree = async (treeId: string, price: string) => {
//         try {
//             const web3 = new web3(window.ethereum);
//             const contract = new web3.eth.Contract(contractABI, contractAddress);
//             await contract.methods.buyTree(treeId, price).send({ from: (await web3.eth.getAccounts())[0], value: web3.utils.toWei(price, 'ether') });
//             loadTrees();
//         } catch (error) {
//             console.error('Failed to buy tree', error);
//         }
//     };

//     const sellTree = async (treeId: any, price: any) => {
//         try {
//             const web3 = new web3(window.ethereum);
//             const contract = new web3.eth.Contract(contractABI, contractAddress);
//             await contract.methods.sellTree(treeId, price).send({ from: (await web3.eth.getAccounts())[0] });
//             loadTrees();
//         } catch (error) {
//             console.error('Failed to sell tree', error);
//         }
//     };

//     const assignSteward = async (treeId: any, newSteward: any) => {
//         try {
//             const web3 = new web3(window.ethereum);
//             const contract = new web3.eth.Contract(contractABI, contractAddress);
//             await contract.methods.assignSteward(treeId, newSteward).send({ from: (await web3.eth.getAccounts())[0] });
//             loadTrees();
//         } catch (error) {
//             console.error('Failed to assign steward', error);
//         }
//     };

//     if (!isMounted) {
//         return null;
//     }

//     return (
//         <div className="flex flex-col justify-center items-center">
//             {/* Your existing UI components */}
//             {/* Example UI components */}
//             <div>
//                 <input type="number" value={treeId} onChange={(e) => setTreeId(e.target.value)} placeholder="Enter Tree ID" />
//                 <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter Price" />
//                 <button onClick={() => buyTree(treeId, price)}>Buy Tree</button>
//             </div>
//             {/* Similar for Sell Tree and Assign Steward forms */}
//             {isConnected? (
//                 <div className="h2 text-center">
//                     Your address: {userAddress}
//                 </div>
//             ) : (
//                 <div>No Wallet Connected</div>
//             )}
//         </div>
//     );
// }


import React, { useEffect, useState } from "react";

export default function Trading() {
    return(
        <div></div>
    );

}
