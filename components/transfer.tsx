import React, { useEffect, useState } from "react";

export default function Transfer() {
    const [treeId, setTreeId] = useState('');
    const [price, setPrice] = useState('');
    const [newSteward, setNewSteward] = useState('');
    
    const loadTrees = async () => {
        try {
            // Call your contract methods to fetch tree data here
            // Example: const totalTrees = await contract.methods.totalTrees().call();
            // Implement your logic to fetch tree data
        } catch (error) {
            console.error('Failed to load trees', error);
        }
    };
    const assignSteward = async (treeId: string, newSteward: string) => {
        try {
            // Example: await contract.methods.assignSteward(treeId, newSteward).send({ from: (await web3.eth.getAccounts())[0] });
            // Reload trees after assigning steward
            loadTrees();
        } catch (error) {
            console.error('Failed to assign steward', error);
        }
    };

    return(
        <div>
                 {/* Assign Steward Form */}
                 <div className="mb-4">
                <input type="number" className="border p-2" value={treeId} onChange={(e) => setTreeId(e.target.value)} placeholder="Enter Tree ID" />
                <input type="text" className="border p-2" value={newSteward} onChange={(e) => setNewSteward(e.target.value)} placeholder="Enter New Steward Address" />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => assignSteward(treeId, newSteward)}>Assign Steward</button>
            </div>
        </div>
    );

}