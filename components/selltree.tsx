import React, { useEffect, useState } from "react";

export default function SellTree() {
    const [treeId, setTreeId] = useState('');
    const [price, setPrice] = useState('');
    const loadTrees = async () => {
        try {
            // Call your contract methods to fetch tree data here
            // Example: const totalTrees = await contract.methods.totalTrees().call();
            // Implement your logic to fetch tree data
        } catch (error) {
            console.error('Failed to load trees', error);
        }
    };

    const sellTree = async (treeId: string, price: string) => {
        try {
            // Example: await contract.methods.sellTree(treeId, price).send({ from: (await web3.eth.getAccounts())[0] });
            // Reload trees after selling
            loadTrees();
        } catch (error) {
            console.error('Failed to sell tree', error);
        }
    };
    return(
        <div>
             {/* Sell Tree Form */}
             <div className="mb-4">
                <input type="number" className="border p-2" value={treeId} onChange={(e) => setTreeId(e.target.value)} placeholder="Enter Tree ID" />
                <br></br>
                <input type="number" className="border p-2" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter Price" />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => sellTree(treeId, price)}>Sell Tree</button>
            </div>
        </div>
    );
}