// ==========================================
// 1. CONFIGURATION
// ==========================================
const contractAddress = "0x5DA073C2Ad5e22eA8C1d0973E9DE04ad19189818"; // YOUR ADDRESS

// ==========================================
// 2. ABI
// ==========================================
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

// ==========================================
// 3. INITIALIZATION
// ==========================================
window.addEventListener('load', async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        contract = new web3.eth.Contract(contractABI, contractAddress);
        loadStats();
    } else {
        document.getElementById("accountArea").innerText = "MetaMask Required";
    }
});

async function connectWallet() {
    if (window.ethereum) {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            userAccount = accounts[0];
            
            document.getElementById("connectBtn").className = "btn btn-success btn-sm";
            document.getElementById("connectBtn").innerHTML = '<i class="fas fa-check-circle me-1"></i>Connected';
            document.getElementById("accountArea").innerText = userAccount.substring(0,6) + "..." + userAccount.substring(38);
            
            checkIfAdmin();
            loadSellerRequests(); // Check for requests
        } catch(e) { console.error(e); }
    }
}

async function checkIfAdmin() {
    try {
        const isAdmin = await contract.methods.isLandInspector(userAccount).call();
        if (isAdmin) {
            document.getElementById("adminPanel").style.display = "block";
            // NEW: Hide User Actions
            document.getElementById("userActions").style.display = "none";
            loadAdminRequests();
        } else {
            document.getElementById("adminPanel").style.display = "none";
            // NEW: Show User Actions
            document.getElementById("userActions").style.display = "block";
        }
    } catch (e) { console.error("Admin check error", e); }
}

// ==========================================
// 4. SMART SELLER INBOX
// ==========================================
async function loadSellerRequests() {
    if (!userAccount) return;
    
    const listContainer = document.getElementById("sellerRequestsList");
    listContainer.innerHTML = `<div class="spinner-border text-primary spinner-border-sm" role="status"></div> <span class="text-muted small">Scanning...</span>`;
    
    let html = "";
    let count = 0;
    
    const reqCount = await contract.methods.getRequestsCount().call();
    
    for(let i=1; i<=reqCount; i++) {
        const req = await contract.methods.getRequestDetails(i).call();
        
        // If I am the seller AND it's not approved yet
        if(req[0].toLowerCase() == userAccount.toLowerCase() && req[3] == false) {
            html += `
            <div class="d-flex justify-content-between align-items-center border-bottom border-secondary border-opacity-25 py-2">
                <div class="text-start">
                    <span class="badge bg-warning text-dark">Land #${req[2]}</span>
                    <div class="small text-muted mt-1">Buyer: <span class="text-info">${req[1].substring(0,6)}...</span></div>
                </div>
                <button class="btn btn-sm btn-primary" onclick="approveRequestAuto(${i})">Approve <i class="fas fa-check"></i></button>
            </div>`;
            count++;
        }
    }
    
    if (count === 0) {
        listContainer.innerHTML = `<div class="text-center text-muted small py-3"><i class="far fa-folder-open mb-2 d-block fa-2x opacity-25"></i>No pending requests</div>`;
    } else {
        listContainer.innerHTML = html;
    }
}

async function approveRequestAuto(reqId) {
    await contract.methods.approveRequest(reqId).send({ from: userAccount });
    alert("Request Approved! Buyer can now pay.");
    loadSellerRequests();
}

// ==========================================
// 5. SMART ADMIN INBOX
// ==========================================
async function loadAdminRequests() {
    const tbodyVerify = document.getElementById("verificationTableBody");
    const tbodyTransfer = document.getElementById("transferTableBody");
    
    let verifyRows = "";
    let pendingVerCount = 0;

    // Scan Sellers
    const sellers = await contract.methods.getSeller().call();
    for(let i=0; i<sellers.length; i++) {
        const isVer = await contract.methods.isVerified(sellers[i]).call();
        if(!isVer) {
            verifyRows += `<tr>
                <td><span class="badge bg-primary">Seller</span></td>
                <td class="text-white-50 font-monospace small">${sellers[i]}</td>
                <td class="text-end"><button class="btn btn-sm btn-success" onclick="verifySellerAuto('${sellers[i]}')">Verify</button></td>
            </tr>`;
            pendingVerCount++;
        }
    }
    // Scan Buyers
    const buyers = await contract.methods.getBuyer().call();
    for(let i=0; i<buyers.length; i++) {
        const isVer = await contract.methods.isVerified(buyers[i]).call();
        if(!isVer) {
            verifyRows += `<tr>
                <td><span class="badge bg-info text-dark">Buyer</span></td>
                <td class="text-white-50 font-monospace small">${buyers[i]}</td>
                <td class="text-end"><button class="btn btn-sm btn-success" onclick="verifyBuyerAuto('${buyers[i]}')">Verify</button></td>
            </tr>`;
            pendingVerCount++;
        }
    }
    tbodyVerify.innerHTML = verifyRows || "<tr><td colspan='3' class='text-center text-secondary small py-3'>No pending verifications</td></tr>";
    document.getElementById("badgeVerify").innerText = pendingVerCount;

    // Scan Transfers
    const landsCount = await contract.methods.getLandsCount().call();
    const requestsCount = await contract.methods.getRequestsCount().call();
    let transferRows = "";
    let pendingTransCount = 0;

    for(let i=1; i<=landsCount; i++) {
        const isPaid = await contract.methods.isPaid(i).call();
        if(isPaid) {
            const currentOwner = await contract.methods.getLandOwner(i).call();
            const isOwnerSeller = await contract.methods.isSeller(currentOwner).call();
            
            if (isOwnerSeller) {
                let buyerAddress = "Unknown";
                for(let k=1; k<=requestsCount; k++) {
                    const req = await contract.methods.getRequestDetails(k).call();
                    if (req[2] == i && req[3] == true) { 
                        buyerAddress = req[1];
                        break; 
                    }
                }

                transferRows += `<tr>
                    <td class="fw-bold text-white">#${i}</td>
                    <td><span class="badge bg-success">Paid</span></td>
                    <td class="text-white-50 font-monospace small">${buyerAddress}</td>
                    <td class="text-end">
                        <button class="btn btn-sm btn-danger" onclick="transferOwnershipAuto(${i}, '${buyerAddress}')">Transfer Title</button>
                    </td>
                </tr>`;
                pendingTransCount++;
            }
        }
    }
    tbodyTransfer.innerHTML = transferRows || "<tr><td colspan='4' class='text-center text-secondary small py-3'>No pending transfers</td></tr>";
    document.getElementById("badgeTransfer").innerText = pendingTransCount;
}

// ==========================================
// 6. ACTION FUNCTIONS
// ==========================================

async function verifySellerAuto(addr) {
    await contract.methods.verifySeller(addr).send({ from: userAccount });
    loadAdminRequests();
}

async function verifyBuyerAuto(addr) {
    await contract.methods.verifyBuyer(addr).send({ from: userAccount });
    loadAdminRequests();
}

async function transferOwnershipAuto(id, newOwner) {
    if(newOwner === "Unknown") return alert("Error: Could not find Buyer address.");
    await contract.methods.LandOwnershipTransfer(id, newOwner).send({ from: userAccount });
    alert("Ownership Transferred!");
    loadAdminRequests();
}

async function loadStats() {
    try {
        document.getElementById("statSellers").innerText = await contract.methods.getSellersCount().call();
        document.getElementById("statLands").innerText = await contract.methods.getLandsCount().call();
        document.getElementById("statRequests").innerText = await contract.methods.getRequestsCount().call();
    } catch (e) { }
}

// User Actions
async function registerSeller() {
    const name = document.getElementById("sellerName").value;
    const age = document.getElementById("sellerAge").value;
    const aadhar = document.getElementById("sellerAadhar").value;
    const pan = document.getElementById("sellerPan").value;
    const lands = document.getElementById("sellerLands").value;
    await contract.methods.registerSeller(name, age, aadhar, pan, lands, "doc").send({ from: userAccount });
    alert("Registered! Wait for verification.");
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
    alert("Land Minted!");
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
    alert("Registered! Wait for verification.");
}

async function requestLand() {
    const landId = document.getElementById("requestLandId").value;
    const owner = await contract.methods.getLandOwner(landId).call();
    if(owner.toLowerCase() == userAccount.toLowerCase()) return alert("You own this land.");
    await contract.methods.requestLand(owner, landId).send({ from: userAccount });
    alert("Request Sent to Seller!");
    loadStats();
}

async function makePayment() {
    const landId = document.getElementById("payLandId").value;
    const price = await contract.methods.getPrice(landId).call();
    const seller = await contract.methods.getLandOwner(landId).call();
    await contract.methods.payment(seller, landId).send({ from: userAccount, value: price });
    alert("Payment Sent! Admin will transfer title shortly.");
}

async function getLandDetails() {
    const id = document.getElementById("searchLandId").value;
    try {
        const area = await contract.methods.getArea(id).call();
        const city = await contract.methods.getCity(id).call();
        const owner = await contract.methods.getLandOwner(id).call();
        
        document.getElementById("landResult").innerHTML = `
            <div class="card p-3 border border-info border-opacity-50 bg-dark text-white mt-3">
                <div class="d-flex align-items-center mb-2">
                    <div class="bg-info bg-opacity-25 p-2 rounded-circle me-3"><i class="fas fa-file-contract text-info"></i></div>
                    <h5 class="mb-0">Asset #${id}</h5>
                </div>
                <hr class="border-secondary">
                <div class="row g-2 small">
                    <div class="col-6 text-secondary">Location:</div>
                    <div class="col-6 fw-bold">${city}</div>
                    <div class="col-6 text-secondary">Area:</div>
                    <div class="col-6 fw-bold">${area} Sq ft</div>
                    <div class="col-12 text-secondary mt-2">Current Owner:</div>
                    <div class="col-12"><code class="d-block bg-black p-2 rounded text-success border border-success border-opacity-25">${owner}</code></div>
                </div>
            </div>
        `;
    } catch (e) { 
        document.getElementById("landResult").innerHTML = `<div class="alert alert-danger bg-danger bg-opacity-10 border-danger text-danger mt-3"><i class="fas fa-exclamation-circle me-2"></i>Land not found</div>`; 
    }
}