import React, { useEffect, useState } from "react";
import { useAccount, useBalance, useTransaction } from "wagmi";


const WalletInfo = () => {
    const { address, isConnected } = useAccount();
    const [userBalance, setUserBalance] = useState("");
    const { transactions } = useTransaction();

    useEffect(() => {
        if (isConnected && address) {
            setUserBalance(address);
        }
    }, [address, isConnected]);

    const handleBuy = () => {
        // Implement buy logic here
    };

    const handleSell = () => {
        // Implement sell logic here
    };

    return (
        <div className="wallet-info">
            <div className="address">Your Wallet Address: {userBalance}</div>
            <button onClick={handleBuy}>Buy</button>
            <button onClick={handleSell}>Sell</button>
            <div className="transactions">
                <h2>Transaction History</h2>
                <ul>
                    {transactions.map((transaction: { type: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; amount: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }, index: React.Key | null | undefined) => (
                        <li key={index}>
                            {transaction.type}: {transaction.amount}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default WalletInfo;
