// CONFIGURATION
const contractAddress = "0x5DA073C2Ad5e22eA8C1d0973E9DE04ad19189818"; // YOUR ADDRESS

// ABI
const contractABI = [
	{ "constant": false, "inputs": [ { "name": "_name", "type": "string" }, { "name": "_age", "type": "uint256" }, { "name": "_aadharNumber", "type": "string" }, { "name": "_panNumber", "type": "string" }, { "name": "_landsOwned", "type": "string" }, { "name": "_document", "type": "string" } ], "name": "registerSeller", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" },
	{ "constant": false, "inputs": [ { "name": "_area", "type": "uint256" }, { "name": "_city", "type": "string" }, { "name": "_state", "type": "string" }, { "name": "landPrice", "type": "uint256" }, { "name": "_propertyPID", "type": "uint256" }, { "name": "_surveyNum", "type": "uint256" }, { "name": "_ipfsHash", "type": "string" }, { "name": "_document", "type": "string" } ], "name": "addLand", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" },
	{ "constant": true, "inputs": [{ "name": "i", "type": "uint256" }], "name": "getArea", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" },
    { "constant": true, "inputs": [{ "name": "i", "type": "uint256" }], "name": "getCity", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" },
    { "constant": true, "inputs": [{ "name": "i", "type": "uint256" }], "name": "getPrice", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" },
    { "constant": false, "inputs": [ { "name": "_name", "type": "string" }, { "name": "_age", "type": "uint256" }, { "name": "_city", "type": "string" }, { "name": "_aadharNumber", "type": "string" }, { "name": "_panNumber", "type": "string" }, { "name": "_document", "type": "string" }, { "name": "_email", "type": "string" } ], "name": "registerBuyer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" },
    { "constant": false, "inputs": [ { "name": "_sellerId", "type": "address" }, { "name": "_landId", "type": "uint256" } ], "name": "requestLand", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" },
    { "constant": true, "inputs": [{ "name": "id", "type": "uint256" }], "name": "getLandOwner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" },
    { "constant": false, "inputs": [ { "name": "_buyerId", "type": "address" } ], "name": "verifyBuyer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" },
    { "constant": false, "inputs": [ { "name": "_sellerId", "type": "address" } ], "name": "verifySeller", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" },
    { "constant": false, "inputs": [ { "name": "_reqId", "type": "uint256" } ], "name": "approveRequest", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" },
    { "constant": false, "inputs": [ { "name": "_receiver", "type": "address" }, { "name": "_landId", "type": "uint256" } ], "name": "payment", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" },
    { "constant": false, "inputs": [ { "name": "_landId", "type": "uint256" }, { "name": "_newOwner", "type": "address" } ], "name": "LandOwnershipTransfer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" },
    
    { "constant": true, "inputs": [], "name": "getLandsCount", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" },
    { "constant": true, "inputs": [], "name": "getSellersCount", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" },
    { "constant": true, "inputs": [], "name": "getRequestsCount", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" },
    { "constant": true, "inputs": [ { "name": "_id", "type": "address" } ], "name": "isLandInspector", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" },
    
    { "constant": true, "inputs": [], "name": "getSeller", "outputs": [ { "name": "", "type": "address[]" } ], "payable": false, "stateMutability": "view", "type": "function" },
    { "constant": true, "inputs": [], "name": "getBuyer", "outputs": [ { "name": "", "type": "address[]" } ], "payable": false, "stateMutability": "view", "type": "function" },
    { "constant": true, "inputs": [ { "name": "_id", "type": "address" } ], "name": "isVerified", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" },
    { "constant": true, "inputs": [ { "name": "_id", "type": "address" } ], "name": "isSeller", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" },
    { "constant": true, "inputs": [ { "name": "_landId", "type": "uint256" } ], "name": "isPaid", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" },
    { "constant": true, "inputs": [ { "name": "i", "type": "uint256" } ], "name": "getRequestDetails", "outputs": [ { "name": "", "type": "address" }, { "name": "", "type": "address" }, { "name": "", "type": "uint256" }, { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }
];

let web3;
let contract;
let userAccount;

window.addEventListener('load', async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        contract = new web3.eth.Contract(contractABI, contractAddress);
        console.log("Initialized");
        loadStats(); 
    } else {
        alert("Please install Metamask");
    }
});

async function connectWallet() {
    if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        userAccount = accounts[0];
        
        document.getElementById("connectBtn").className = "btn btn-success btn-sm btn-custom";
        document.getElementById("connectBtn").innerText = "Connected";
        document.getElementById("accountArea").innerText = userAccount;
        
        // Check if Admin
        checkIfAdmin();
    }
}

async function checkIfAdmin() {
    try {
        const isAdmin = await contract.methods.isLandInspector(userAccount).call();
        if (isAdmin) {
            document.getElementById("adminPanel").style.display = "block";
            loadAdminRequests(); 
        } else {
            document.getElementById("adminPanel").style.display = "none";
        }
    } catch (e) { console.error("Admin check failed", e); }
}

// --- SMART INBOX LOGIC ---
async function loadAdminRequests() {
    document.getElementById("verificationTableBody").innerHTML = "<tr><td colspan='3' class='text-center'>Scanning Blockchain...</td></tr>";
    
    let verifyRows = "";
    let pendingCount = 0;

    // 1. Scan Sellers
    const sellers = await contract.methods.getSeller().call();
    for(let i=0; i<sellers.length; i++) {
        const isVer = await contract.methods.isVerified(sellers[i]).call();
        if(!isVer) {
            verifyRows += `<tr>
                <td><span class="badge bg-primary">Seller</span></td>
                <td class="text-truncate" style="max-width: 150px;">${sellers[i]}</td>
                <td><button class="btn btn-sm btn-success" onclick="verifySellerAuto('${sellers[i]}')">Verify</button></td>
            </tr>`;
            pendingCount++;
        }
    }

    // 2. Scan Buyers
    const buyers = await contract.methods.getBuyer().call();
    for(let i=0; i<buyers.length; i++) {
        const isVer = await contract.methods.isVerified(buyers[i]).call();
        if(!isVer) {
            verifyRows += `<tr>
                <td><span class="badge bg-info text-dark">Buyer</span></td>
                <td class="text-truncate" style="max-width: 150px;">${buyers[i]}</td>
                <td><button class="btn btn-sm btn-success" onclick="verifyBuyerAuto('${buyers[i]}')">Verify</button></td>
            </tr>`;
            pendingCount++;
        }
    }

    document.getElementById("verificationTableBody").innerHTML = verifyRows || "<tr><td colspan='3' class='text-center text-muted'>No pending verifications</td></tr>";
    document.getElementById("badgeVerify").innerText = pendingCount;

    // 3. Scan Lands for Transfer
    const landsCount = await contract.methods.getLandsCount().call();
    let transferRows = "";
    let transferCount = 0;

    for(let i=1; i<=landsCount; i++) {
        const isPaid = await contract.methods.isPaid(i).call();
        
        if(isPaid) {
            const currentOwner = await contract.methods.getLandOwner(i).call();
            const isOwnerSeller = await contract.methods.isSeller(currentOwner).call();
            
            // Only show if Paid AND the current owner is still a Seller (not transferred yet)
            if (isOwnerSeller) {
                transferRows += `<tr>
                    <td>#${i}</td>
                    <td class="text-truncate" style="max-width: 150px;">${currentOwner}</td>
                    <td><span class="badge bg-success">PAID</span></td>
                    <td>
                        <input type="text" id="transferInput_${i}" class="form-control form-control-sm d-inline w-50" placeholder="Paste Buyer Addr">
                        <button class="btn btn-sm btn-danger" onclick="transferOwnershipAuto(${i})">Transfer</button>
                    </td>
                </tr>`;
                transferCount++;
            }
        }
    }
    document.getElementById("transferTableBody").innerHTML = transferRows || "<tr><td colspan='4' class='text-center text-muted'>No pending transfers</td></tr>";
    document.getElementById("badgeTransfer").innerText = transferCount;
}

// --- ADMIN AUTO FUNCTIONS ---
async function verifySellerAuto(addr) {
    await contract.methods.verifySeller(addr).send({ from: userAccount });
    alert("Verified!");
    loadAdminRequests(); // Refresh
}

async function verifyBuyerAuto(addr) {
    await contract.methods.verifyBuyer(addr).send({ from: userAccount });
    alert("Verified!");
    loadAdminRequests();
}

async function transferOwnershipAuto(id) {
    const newOwner = document.getElementById(`transferInput_${id}`).value;
    if(!newOwner) return alert("Please paste Buyer Address!");
    
    await contract.methods.LandOwnershipTransfer(id, newOwner).send({ from: userAccount });
    alert("Ownership Transferred!");
    loadAdminRequests();
}

async function loadStats() {
    try {
        const sCount = await contract.methods.getSellersCount().call();
        const lCount = await contract.methods.getLandsCount().call();
        const rCount = await contract.methods.getRequestsCount().call();
        
        document.getElementById("statSellers").innerText = sCount;
        document.getElementById("statLands").innerText = lCount;
        document.getElementById("statRequests").innerText = rCount;
    } catch (e) { }
}

// --- CORE FUNCTIONS ---
async function registerSeller() {
    if (!userAccount) return alert("Connect Wallet first");
    const name = document.getElementById("sellerName").value;
    const age = document.getElementById("sellerAge").value;
    const aadhar = document.getElementById("sellerAadhar").value;
    const pan = document.getElementById("sellerPan").value;
    const lands = document.getElementById("sellerLands").value;
    await contract.methods.registerSeller(name, age, aadhar, pan, lands, "doc").send({ from: userAccount });
    alert("Seller Registered!");
}

async function addLand() {
    const area = document.getElementById("landArea").value;
    const city = document.getElementById("landCity").value;
    const state = document.getElementById("landState").value;
    const price = document.getElementById("landPrice").value;
    const pid = document.getElementById("landPID").value;
    const survey = document.getElementById("landSurvey").value;
    const ipfs = document.getElementById("ipfsHash").value;
    await contract.methods.addLand(area, city, state, price, pid, survey, ipfs, "doc").send({ from: userAccount });
    alert("Land Tokenized!");
    loadStats();
}

async function registerBuyer() {
    const name = document.getElementById("buyerName").value;
    const age = document.getElementById("buyerAge").value;
    const city = document.getElementById("buyerCity").value;
    const aadhar = document.getElementById("buyerAadhar").value;
    const pan = document.getElementById("buyerPan").value;
    const email = document.getElementById("buyerEmail").value;
    await contract.methods.registerBuyer(name, age, city, aadhar, pan, "doc", email).send({ from: userAccount });
    alert("Buyer Registered!");
}

async function requestLand() {
    const landId = document.getElementById("requestLandId").value;
    const owner = await contract.methods.getLandOwner(landId).call();
    if(owner.toLowerCase() == userAccount.toLowerCase()) return alert("Cannot buy own land");
    await contract.methods.requestLand(owner, landId).send({ from: userAccount });
    alert("Request Sent!");
    loadStats();
}

async function approveRequest() {
    const reqId = document.getElementById("approveRequestId").value;
    await contract.methods.approveRequest(reqId).send({ from: userAccount });
    alert("Approved!");
}

async function makePayment() {
    const landId = document.getElementById("payLandId").value;
    const price = await contract.methods.getPrice(landId).call();
    const seller = await contract.methods.getLandOwner(landId).call();
    await contract.methods.payment(seller, landId).send({ from: userAccount, value: price });
    alert("Paid!");
}

async function getLandDetails() {
    const id = document.getElementById("searchLandId").value;
    try {
        const area = await contract.methods.getArea(id).call();
        const city = await contract.methods.getCity(id).call();
        const owner = await contract.methods.getLandOwner(id).call();
        
        document.getElementById("landResult").innerHTML = `
            <div class="alert alert-info">
                <h5>Land #${id}</h5>
                <p><strong>Location:</strong> ${city}</p>
                <p><strong>Area:</strong> ${area} sq ft</p>
                <p><strong>Owner:</strong> <small>${owner}</small></p>
            </div>
        `;
    } catch (e) { 
        document.getElementById("landResult").innerHTML = `<div class="alert alert-danger">Not Found</div>`; 
    }
}