import React, { useEffect, useState } from "react";
import { useAccount, useBalance } from "wagmi";
import WalletInfo from "../components/walletinfo";
import SellTree from "@/components/selltree";
import BuyTree from "@/components/buytree";
import Transfer from "@/components/transfer";


// Initialize your contract instance here
// const contract = new web3.eth.Contract(TreeStewardshipContract.abi, 'deployed_contract_address');

export default function Home() {
    const [userAddress, setUserAddress] = useState("");
    const [isMounted, setIsMounted] = useState(false);
    const { address, isConnected } = useAccount();
    const [treeId, setTreeId] = useState('');
    const [price, setPrice] = useState('');
    const [newSteward, setNewSteward] = useState('');
    const result = useBalance({
         address: userAddress as `0x${string}`
      })

      console.log(result)
    //const { balance, loading: balanceLoading } = useBalance(address); // Fetch user's balance

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isConnected && address) {
            setUserAddress(address);
        }
    }, [address, isConnected]);

    useEffect(() => {
        if (isMounted) {
            // Load trees or perform any other initialization here
            loadTrees();
        }
    }, [isMounted]);

    const loadTrees = async () => {
        try {
            // Call your contract methods to fetch tree data here
            // Example: const totalTrees = await contract.methods.totalTrees().call();
            // Implement your logic to fetch tree data
        } catch (error) {
            console.error('Failed to load trees', error);
        }
    };

 

 

   
    if (!isMounted) {
        return null; // You might want to show a loading indicator here instead
    }

    return (
        <div className="flex flex-col justify-center items-center">
            {/* Your existing UI components */}
            
     

           

       
            {isConnected ? (
    <div className="h2 text-center">
        <h2>
            Your address: {userAddress}
        </h2>
        <div className="control">
<button>Wallet</button>
<button>Buy</button>
<button>Sell</button>
            </div>
        <div className="cnt_walet">
        <WalletInfo /> {/* Include WalletInfo component here */}
        </div>
        <div className="cnt_buy">
            <BuyTree/>
        </div>
        <div className="cnt_sell">
            <SellTree />
        </div>
        <div className="cnt_sell"> 
            <Transfer />
            </div>
    </div>
) : (
    <div>No Wallet Connected</div>
)}

        </div>
    );
}
