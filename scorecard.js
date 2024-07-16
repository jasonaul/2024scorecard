
const representatives = [
    {
        id: 1,
        name: "Gabriel Acevero",
        party: "D",
        district: "39A",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 96,
        photoUrl: "https://msa.maryland.gov/msa/mdmanual/06hse/images/1198-1-10584b.jpg",
        email: "Gabriel.Acevero@house.state.md.us",
        votes: {
            "HB990": true,
            "HB864": true,
            "HB397/SB570": true,
            "SB783": true,
            "HB836": true,
            "SB148/HB449": true,
            "SB480/HB585": true,
            "HB1101/SB0653": true,
            "HB1165/SB0969": true
        }
    },
    {
        id: 2,
        name: "Christopher T. Adams",
        party: "R",
        district: "37BA",
        chamber: "house",
        score2024: 11,
        lifetimeScore: 14,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/adams01.jpg",
        email: "Christopher.Adams@house.state.md.us",
        votes: {
            "HB990": false,
            "HB864": false,
            "HB397/SB570": false,
            "SB783": false,
            "HB836": false,
            "SB148/HB449": true,
            "SB480/HB585": false,
            "HB1101/SB0653": false,
            "HB1165/SB0969": false
        }
    },
    {
        id: 3,
        name: "Jackie Addison",
        party: "D",
        district: "45A",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 100,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/addison01.jpg",
        email: "Jackie.Addison@house.state.md.us",
        votes: {
            "HB990": true,
            "HB864": true,
            "HB397/SB570": true,
            "SB783": true,
            "HB836": true,
            "SB148/HB449": true,
            "SB480/HB585": true,
            "HB1101/SB0653": true,
            "HB1165/SB0969": true
        }
    },

    {
        id: 4,
        name: "Nick Allen",
        party: "D",
        district: "08C",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 100,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/allen01.jpg",
        email: "",
        votes: {
            "HB990": true,
            "HB864": true,
            "HB397/SB570": true,
            "SB783": true,
            "HB836": true,
            "SB148/HB449": true,
            "SB480/HB585": true,
            "HB1101/SB0653": true,
            "HB1165/SB0969": true
        }
    },
    {
        id: 5,
        name: "Tiffany T. Alston",
        party: "D",
        district: "24A",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 100,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/alston01.jpg",
        email: "",
        votes: {
            "HB990": true,
            "HB864": true,
            "HB397/SB570": true,
            "SB783": true,
            "HB836": true,
            "SB148/HB449": true,
            "SB480/HB585": true,
            "HB1101/SB0653": true,
            "HB1165/SB0969": true
        }
    },
    {
        id: 6,
        name: "Marlon Amprey",
        party: "D",
        district: "40B",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 97,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/amprey01.jpg",
        email: "",
        votes: {
            "HB990": true,
            "HB864": true,
            "HB397/SB570": true,
            "SB783": true,
            "HB836": true,
            "SB148/HB449": true,
            "SB480/HB585": true,
            "HB1101/SB0653": true,
            "HB1165/SB0969": true
        }
    },
    {
        id: 7,
        name: "Carl Anderton",
        party: "R",
        district: "38B",
        chamber: "house",
        score2024: 13,
        lifetimeScore: 51,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/anderton01.jpg",
        email: "",
        votes: {
            "HB990": false,
            "HB864": false,
            "HB397/SB570": false,
            "SB783": false,
            "HB836": false,
            "SB148/HB449": null,
            "SB480/HB585": true,
            "HB1101/SB0653": false,
            "HB1165/SB0969": false
        }
    },
    {
        id: 8,
        name: "Steven J. Arentz",
        party: "R",
        district: "36B",
        chamber: "house",
        score2024: 0,
        lifetimeScore: 13,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/arentz01.jpg",
        email: "",
        votes: {
            "HB990": false,
            "HB864": false,
            "HB397/SB570": false,
            "SB783": false,
            "HB836": false,
            "SB148/HB449": false,
            "SB480/HB585": false,
            "HB1101/SB0653": false,
            "HB1165/SB0969": false
        }
    },
    {
        id: 9,
        name: "Lauren Arikan",
        party: "R",
        district: "07B",
        chamber: "house",
        score2024: 0,
        lifetimeScore: 13,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/arikan01.jpg",
        email: "",
        votes: {
            "HB990": false,
            "HB864": false,
            "HB397/SB570": false,
            "SB783": false,
            "HB836": false,
            "SB148/HB449": false,
            "SB480/HB585": false,
            "HB1101/SB0653": false,
            "HB1165/SB0969": false
        }
    },
    {
        id: 10,
        name: "Dalya Attar",
        party: "D",
        district: "41A",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 98,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/attar01.jpg",
        email: "",
        votes: {
            "HB990": true,
            "HB864": true,
            "HB397/SB570": true,
            "SB783": true,
            "HB836": true,
            "SB148/HB449": true,
            "SB480/HB585": true,
            "HB1101/SB0653": true,
            "HB1165/SB0969": true
        }
    },
];

const bills = [
    {
        id: "HB990",
        title: "Greenhouse Gas Emissions Reductions Act - Manufacturers",
        description: "Ensures manufacturers reduce their greenhouse gas emissions like other industries. This bill aims to create a more equitable approach to fighting climate change.",
        passed: true,
        votes: {
            1: true,
            2: false,
            3: true
        }
    },
    {
        id: "HB864",
        title: "Energy Efficiency and Conservation Plans (EmPOWER Reform)",
        description: "Updates energy efficiency programs and offers incentives for efficient appliances. This reform sets clear greenhouse gas reduction targets for the state.",
        passed: true,
        votes: {
            1: true,
            2: false,
            3: true
        }
    },
    {
        id: "HB397/SB570",
        title: "WARMTH Act",
        description: "Establishes a pilot program for geothermal heating projects, focusing on low-income households. This act aims to provide access to efficient, clean heating options and potential energy savings.",
        passed: true,
        votes: {
            1: true,
            2: false,
            3: true
        }
    },
    {
        id: "SB783",
        title: "Brighter Tomorrow Act",
        description: "Extends tax breaks for community solar projects and creates a new solar incentive program. This act makes solar power more accessible and affordable for communities.",
        passed: true,
        votes: {
            1: true,
            2: false,
            3: true
        }
    },
    {
        id: "HB836",
        title: "Transportation and Climate Alignment Act",
        description: "Required analysis of climate impacts for major highway projects. This act aimed to ensure better-planned transportation projects with less environmental impact.",
        passed: false,
        votes: {
            1: true,
            2: false,
            3: "E"
        }
    },
    {
        id: "SB148/HB449",
        title: "Comprehensive Flood Management Grant Program",
        description: "Directs at least 40% of flood management funding to underserved communities. This program aims to provide better flood protection for vulnerable neighborhoods and ensure fairer distribution of resources.",
        passed: true,
        votes: {
            1: true,
            2: true,
            3: true
        }
    },
    {
        id: "SB480/HB585",
        title: "Protecting Election Officials Act",
        description: "Makes it illegal to threaten election officials or their families. This act helps ensure fair and secure elections by protecting those who run them.",
        passed: true,

    },
    {
        id: "HB1101/SB0653",
        title: "Clean Water Justice Act",
        description: "Gives individuals and groups the right to take legal action to protect water resources. This act provides more power for communities to defend local water quality in courts and hold polluters accountable.",
        passed: true,
        votes: {
            1: true,
            2: false,
            3: true
        }
    },
    {
        id: "HB1165/SB0969",
        title: "Whole Watershed Act",
        description: "Allocates $20 million over five years for a pilot program of 5 targeted watershed restoration projects. This act aims to improve water quality in the Chesapeake Bay and local waterways, benefiting both the environment and communities.",
        passed: true,
        votes: {
            1: true,
            2: false,
            3: true
        }
    }
];

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded");
    populateDropdowns();
    displayWelcomeScreen();
});

function populateDropdowns() {
    console.log("Populating dropdowns");
    const chamberSelect = document.getElementById('chamber-select');
    const representativeSelect = document.getElementById('representative-select');
    const districtSelect = document.getElementById('district-select');

    if (!chamberSelect || !representativeSelect || !districtSelect) {
        console.error("One or more select elements not found");
        return;
    }

    chamberSelect.addEventListener('change', updateRepresentativeOptions);
    representativeSelect.addEventListener('change', selectRepresentative);
    districtSelect.addEventListener('change', selectDistrict);

    updateRepresentativeOptions();
}

function updateRepresentativeOptions() {
    console.log("Updating representative options");
    const chamber = document.getElementById('chamber-select').value;
    const representativeSelect = document.getElementById('representative-select');
    const districtSelect = document.getElementById('district-select');

    representativeSelect.innerHTML = '<option value="">Select Representative</option>';
    districtSelect.innerHTML = '<option value="">Select District</option>';

    representatives.forEach(rep => {
        if (rep.chamber === chamber) {
            const repOption = document.createElement('option');
            repOption.value = rep.id;
            repOption.textContent = rep.name;
            representativeSelect.appendChild(repOption);

            const districtOption = document.createElement('option');
            districtOption.value = rep.id;
            districtOption.textContent = rep.district;
            districtSelect.appendChild(districtOption);
        }
    });
}

function clearWelcomeScreen() {
    console.log("Clearing welcome screen");
    const container = document.querySelector('.delegate-info');
    if (!container) {
        console.error("Delegate info container not found");
        return;
    }
    container.innerHTML = `
        <div class="delegate-header">
            <img src="" alt="" class="representative-photo">
            <div class="representative-details">
                <h2></h2>
                <div class="score-box"></div>
                <div class="score-box"></div>
            </div>
            <div class="email-representative">
                <p class="email-message"></p>
                <a href="#" class="email-button">Email Your Representative</a>
            </div>
        </div>
        <div class="bills-container"></div>
    `;
}

function selectRepresentative() {
    console.log("Selecting representative");
    const repId = document.getElementById('representative-select').value;
    if (repId) {
        const representative = representatives.find(r => r.id === parseInt(repId));
        if (representative) {
            clearWelcomeScreen();  // Make sure this function is called before displaying rep info
            displayRepresentativeInfo(representative);
        } else {
            console.error("Representative not found for id:", repId);
        }
    } else {
        console.log("No representative selected");
    }
}

function selectDistrict() {
    const repId = document.getElementById('district-select').value;
    if (repId) {
        const representative = representatives.find(r => r.id === parseInt(repId));
        displayRepresentativeInfo(representative);
    }
}

function displayRepresentativeInfo(representative) {
    console.log("Displaying representative info for:", representative.name);
    const repPhoto = document.querySelector('.representative-photo');
    const repName = document.querySelector('.representative-details h2');
    const scoreBoxes = document.querySelectorAll('.score-box');
    const billsContainer = document.querySelector('.bills-container');
    const emailMessage = document.querySelector('.email-message');
    const emailButton = document.querySelector('.email-button');

    if (!repPhoto || !repName || scoreBoxes.length < 2 || !billsContainer || !emailMessage || !emailButton) {
        console.error("One or more required elements not found in the DOM");
        return;
    }

    const title = representative.chamber === 'senate' ? 'Senator' : 'Delegate';

    repPhoto.src = representative.photoUrl;
    repPhoto.alt = representative.name;
    repName.textContent = `${title} ${representative.name} (${representative.party}) - District ${representative.district}`;
    scoreBoxes[0].textContent = `2024 Score: ${representative.score2024}%`;
    scoreBoxes[1].textContent = `Lifetime Score: ${representative.lifetimeScore}%`;


    let messageText, emailSubject, emailBody;
    if (representative.score2024 >= 75) {
        messageText = `Proud of the work your ${title} did in 2024? Let them know!`;
        emailSubject = "Thank You for Supporting Maryland's Environment";
        emailBody = `Dear ${title} ${representative.name},\n\nI wanted to thank you for your strong support of environmental legislation in the 2024 session. Your voting record shows a commitment to protecting Maryland's natural resources and addressing climate change. Please continue to prioritize these important issues.\n\nSincerely,\n[Your Name]`;
    } else if (representative.score2024 >= 50) {
        messageText = `Your ${title} met us half-way this legislative session. Let them know to keep voting for Maryland's environment!`;
        emailSubject = "Encourage Stronger Environmental Support";
        emailBody = `Dear ${title} ${representative.name},\n\nI appreciate your support for some environmental legislation in the 2024 session. However, I encourage you to take an even stronger stance on protecting Maryland's environment and addressing climate change. These issues are crucial for our state's future.\n\nSincerely,\n[Your Name]`;
    } else {
        messageText = `Your ${title} has a failing grade on protecting Maryland's environment. Share your concerns and tell them how to vote in 2025.`;
        emailSubject = "Concerns About Environmental Voting Record";
        emailBody = `Dear ${title} ${representative.name},\n\nI am writing to express my concern about your voting record on environmental issues in the 2024 session. As your constituent, I strongly urge you to prioritize legislation that protects Maryland's natural resources and addresses climate change. These issues are vital for our state's future and the well-being of all Marylanders.\n\nSincerely,\n[Your Name]`;
    }

    emailMessage.textContent = messageText;
    emailButton.href = `mailto:${representative.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}&bcc=info@mdlcv.org`;

    billsContainer.innerHTML = '';
    bills.forEach(bill => {
        const billElement = createBillElement(bill, representative);
        billsContainer.appendChild(billElement);
    });
}
function createBillElement(bill, representative) {
    const billDiv = document.createElement('div');
    billDiv.className = `bill-info ${bill.passed ? 'bill-passed' : 'bill-failed'}`;

    let voteSymbol, voteText;
    const lastName = representative.name.split(' ').pop();
    const title = representative.chamber === 'senate' ? 'Senator' : 'Delegate';
    const vote = representative.votes[bill.id];

    if (vote === true) {
        voteSymbol = '✔';
        voteText = `${title} ${lastName} voted for this bill`;
    } else if (vote === false) {
        voteSymbol = '✘';
        voteText = `${title} ${lastName} voted against this bill`;
    } else {
        voteSymbol = vote; // 'E' or 'NV'
        voteText = `${title} ${lastName} was absent for this vote`;
    }

    billDiv.innerHTML = `
        <h3>${bill.id} - ${bill.title}</h3>
        <p>${bill.description}</p>
        <p class="vote-info">
            <span class="vote ${vote === true ? 'vote-yes' : 'vote-no'}">${voteSymbol}</span>
            <span class="vote-text">${voteText}</span>
        </p>
        <p class="bill-status">This bill ${bill.passed ? 'passed' : 'did not pass'} the Maryland General Assembly.</p>
    `;

    return billDiv;
}
function displayWelcomeScreen() {
    const container = document.querySelector('.delegate-info');
    container.innerHTML = `
        <div class="welcome-screen">
            <h2>Welcome to the Maryland LCV Scorecard</h2>
            <p>This scorecard provides information on how Maryland delegates voted on key environmental bills. Here's how to use it:</p>
            <ol>
                <li>Select either "House of Delegates" or "Senate" from the first dropdown.</li>
                <li>Choose your delegate by name or by district number from the respective dropdowns.</li>
                <li>View your delegate's voting record, including their 2024 and lifetime scores.</li>
                <li>Each bill shows how your delegate voted and whether the bill passed or failed in the Maryland General Assembly.</li>
            </ol>
            <p>Start by selecting a chamber and then a delegate or district above!</p>
        </div>
    `;
}

// Modify the initialization code
document.addEventListener('DOMContentLoaded', function() {
    populateDropdowns();
    displayWelcomeScreen();
});