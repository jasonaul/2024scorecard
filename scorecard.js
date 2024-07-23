
const representatives = [
    {
        id: 1,
        name: "Gabriel Acevero",
        party: "D",
        district: "39A",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 96,
        email: "",
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/acevero01.jpg",
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
        name: "Tiffany T. Alston",
        party: "D",
        district: "24A",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 100,
        email: "",
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/alston01.jpg",
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
        id: 3,
        name: "Marlon Amprey",
        party: "D",
        district: "40B",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 97,
        email: "",
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/amprey01.jpg",
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
        name: "Steven J. Arentz",
        party: "R",
        district: "36B",
        chamber: "house",
        score2024: 0,
        lifetimeScore: 13,
        email: "",
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/arentz01.jpg",
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
        id: 5,
        name: "Heather Bagnall",
        party: "D",
        district: "33C",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 98,
        email: "",
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/bagnall01.jpg",
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
        name: "J. Sandy Bartlett",
        party: "D",
        district: "32B",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 98,
        email: "",
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/bartlett02.jpg",
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
        name: "Regina T. Boyce",
        party: "D",
        district: "43AA",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 98,
        email: "",
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/boyce01.jpg",
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
        id: 8,
        name: "Brian M. Crosby",
        party: "D",
        district: "29B",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 95,
        email: "",
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/crosby01.jpg",
        votes: {
            "HB990": null,
            "HB864": null,
            "HB397/SB570": null,
            "SB783": null,
            "HB836": true,
            "SB148/HB449": null,
            "SB480/HB585": null,
            "HB1101/SB0653": null,
            "HB1165/SB0969": null
        }
    },
    {
        id: 9,
        name: "Mary A. Lehman",
        party: "D",
        district: "21A",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 100,
        email: "",
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/lehman01.jpg",
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
        id: 10,
        name: "Ryan Nawrocki",
        party: "R",
        district: "07AA",
        chamber: "house",
        score2024: 0,
        lifetimeScore: 11,
        email: "",
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/nawrocki01.jpg",
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
        id: 11,
        name: "Stephanie Smith",
        party: "D",
        district: "45C",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 98,
        email: "",
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/smith03.jpg",
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
        id: 12,
        name: "Vaughn Stewart",
        party: "D",
        district: "19B",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 98,
        email: "",
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/stewart01.jpg",
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
        id: 13,
        name: "Joshua J. Stonko",
        party: "R",
        district: "42C",
        chamber: "house",
        score2024: 11,
        lifetimeScore: 21,
        email: "",
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/stonko01.jpg",
        votes: {
            "HB990": false,
            "HB864": false,
            "HB397/SB570": null,
            "SB783": false,
            "HB836": false,
            "SB148/HB449": true,
            "SB480/HB585": false,
            "HB1101/SB0653": false,
            "HB1165/SB0969": false
        }
    },
    {
        id: 14,
        name: "Veronica Turner",
        party: "D",
        district: "26C",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 98,
        email: "",
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/turner01.jpg",
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
        id: 15,
        name: "Jamila J. Woods",
        party: "D",
        district: "26A",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 91,
        email: "",
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/woods01.jpg",
        votes: {
            "HB990": null,
            "HB864": null,
            "HB397/SB570": null,
            "SB783": null,
            "HB836": true,
            "SB148/HB449": null,
            "SB480/HB585": null,
            "HB1101/SB0653": null,
            "HB1165/SB0969": null
        }
    },
    {
        id: 16,
        name: "Harry Bhandari",
        party: "D",
        district: "08A",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 98,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/bhandari01.jpg",
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
        id: 17,
        name: "Adrian Boafo",
        party: "D",
        district: "23A",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 100,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/boafo01.jpg",
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
        id: 18,
        name: "Christopher Eric Bouchat",
        party: "R",
        district: "05A",
        chamber: "house",
        score2024: 33,
        lifetimeScore: 42,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/bouchat01.jpg",
        email: "",
        votes: {
            "HB990": false,
            "HB864": false,
            "HB397/SB570": true,
            "SB783": false,
            "HB836": false,
            "SB148/HB449": true,
            "SB480/HB585": true,
            "HB1101/SB0653": false,
            "HB1165/SB0969": false
        }
    },
    {
        id: 19,
        name: "Regina T. Boyce",
        party: "D",
        district: "43AA",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 98,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/boyce01.jpg",
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
        id: 20,
        name: "Jason C. Buckel",
        party: "R",
        district: "01B",
       chamber: "house",
        score2024: 22,
        lifetimeScore: 16,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/buckel01.jpg",
        email: "",
        votes: {
            "HB990": false,
            "HB864": false,
            "HB397/SB570": false,
            "SB783": false,
            "HB836": false,
            "SB148/HB449": true,
            "SB480/HB585": true,
            "HB1101/SB0653": false,
            "HB1165/SB0969": false
        }
    },
    {
        id: 21,
        name: "Jon S. Cardin",
        party: "D",
        district: "11B",
        chamber: "house",
        score2024: 89,
        lifetimeScore: 96,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/cardin01.jpg",
        email: "",
        votes: {
            "HB990": true,
            "HB864": true,
            "HB397/SB570": true,
            "SB783": null,
            "HB836": true,
            "SB148/HB449": true,
            "SB480/HB585": true,
            "HB1101/SB0653": true,
            "HB1165/SB0969": true
        }
    },
    {
        id: 22,
        name: "Mark S. Chang",
        party: "D",
        district: "32A",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 99,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/chang01.jpg",
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
        id: 23,
        name: "Lorig Charkoudian",
        party: "D",
        district: "20B",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 98,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/charkoudian01.jpg",
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
        id: 24,
        name: "Brian Chisholm",
        party: "R",
        district: "31A",
        chamber: "house",
        score2024: 0,
        lifetimeScore: 13,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/chisholm01.jpg",
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
        id: 25,
        name: "Barrie S. Ciliberti",
        party: "R",
        district: "04B",
        chamber: "house",
        score2024: 0,
        lifetimeScore: 21,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/ciliberti01.jpg",
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
        id: 26,
        name: "Luke Clippinger",
        party: "D",
        district: "46B",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 99,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/clippinger.jpg",
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
        id: 27,
        name: "Frank M. Conaway",
        party: "D",
        district: "40A",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 98,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/conaway.jpg",
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
        id: 28,
        name: "Brian M. Crosby",
        party: "D",
        district: "29B",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 95,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/crosby01.jpg",
        email: "",
        votes: {
            "HB990": null,
            "HB864": null,
            "HB397/SB570": null,
            "SB783": null,
            "HB836": true,
            "SB148/HB449": null,
            "SB480/HB585": null,
            "HB1101/SB0653": null,
            "HB1165/SB0969": null
        }
    },
    {
        id: 29,
        name: "Charlotte Crutchfield",
        party: "D",
        district: "19A",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 98,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/crutchfield01.jpg",
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
        id: 30,
        name: "Bonnie Cullison",
        party: "D",
        district: "19C",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 98,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/cullison.jpg",
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
        id: 31,
        name: "Debra Davis",
        party: "D",
        district: "28B",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 98,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/davis02.jpg",
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
        id: 32,
        name: "Eric Ebersole",
        party: "D",
        district: "44A",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 98,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/ebersole01.jpg",
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
        id: 33,
        name: "Mark Edelson",
        party: "D",
        district: "46C",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 100,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/edelson01.jpg",
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
        id: 34,
        name: "Elizabeth Embry",
        party: "D",
        district: "43AB",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 100,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/embry01.jpg",
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
        id: 35,
        name: "Kris Fair",
        party: "D",
        district: "03A",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 100,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/fair01.jpg",
        email: "",
        votes: {
            "HB990": null,
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
        id: 36,
        name: "Jessica Feldmark",
        party: "D",
        district: "12AA",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 98,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/feldmark01.jpg",
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
        id: 37,
        name: "Diana M. Fennell",
        party: "D",
        district: "47AA",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 98,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/fennell01.jpg",
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
        id: 38,
        name: "Mark N. Fisher",
        party: "R",
        district: "27C",
        chamber: "house",
        score2024: 0,
        lifetimeScore: 6,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/fisher.jpg",
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
        id: 39,
        name: "Linda Foley",
        party: "D",
        district: "15B",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 100,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/foley01.jpg",
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
        id: 40,
        name: "Catherine M. Forbes",
        party: "D",
        district: "43B",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 100,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/forbes01.jpg",
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
        id: 41,
        name: "David Fraser-Hidalgo",
        party: "D",
        district: "15C",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 99,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/fraser-hidalgo01.jpg",
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
        id: 42,
        name: "Jefferson L. Ghrist",
        party: "R",
        district: "36A",
        chamber: "house",
        score2024: 0,
        lifetimeScore: 15,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/ghrist01.jpg",
        email: "",
        votes: {
        "HB990": false,
        "HB864": null,
        "HB397/SB570": null,
        "SB783": false,
        "HB836": true,
        "SB148/HB449": false,
        "SB480/HB585": false,
        "HB1101/SB0653": false,
        "HB1165/SB0969": false
        }
        },
        {
        id: 43,
        name: "Robin L. Grammer",
        party: "R",
        district: "06A",
        chamber: "house",
        score2024: 14,
        lifetimeScore: 14,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/grammer01.jpg",
        email: "",
        votes: {
        "HB990": false,
        "HB864": false,
        "HB397/SB570": false,
        "SB783": false,
        "HB836": false,
        "SB148/HB449": true,
        "SB480/HB585": true,
        "HB1101/SB0653": false,
        "HB1165/SB0969": true
        }
        },
        {
        id: 44,
        name: "Mike Griffith",
        party: "R",
        district: "35AA",
        chamber: "house",
        score2024: 22,
        lifetimeScore: 32,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/griffith01.jpg",
        email: "",
        votes: {
        "HB990": false,
        "HB864": false,
        "HB397/SB570": false,
        "SB783": false,
        "HB836": false,
        "SB148/HB449": true,
        "SB480/HB585": true,
        "HB1101/SB0653": false,
        "HB1165/SB0969": false
        }
        },
        {
        id: 45,
        name: "Brooke Grossman",
        party: "D",
        district: "02B",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 100,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/grossman01.jpg",
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
        id: 46,
        name: "Michele Guyton",
        party: "D",
        district: "42BA",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 98,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/guyton01.jpg",
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
        id: 47,
        name: "Pam Lanman Guzzone",
        party: "D",
        district: "13A",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 100,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/guzzone01.jpg",
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
        id: 48,
        name: "Kevin M. Harris",
        party: "D",
        district: "27A",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 100,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/harris01.jpg",
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
        id: 49,
        name: "Andrea Fletcher Harrison",
        party: "D",
        district: "24B",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 98,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/harrison01.jpg",
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
        id: 50,
        name: "Wayne A. Hartman",
        party: "R",
        district: "38C",
        chamber: "house",
        score2024: 11,
        lifetimeScore: 11,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/hartman01.jpg",
        email: "",
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
        id: 51,
        name: "Anne Healey",
        party: "D",
        district: "22B",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 99,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/healey01.jpg",
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
        id: 52,
        name: "Shaneka Henson",
        party: "D",
        district: "30AA",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 97,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/henson01.jpg",
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
        id: 53,
        name: "Terri L. Hill",
        party: "D",
        district: "12AB",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 98,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/hill01.jpg",
        email: "",
        votes: {
        "HB990": true,
        "HB864": true,
        "HB397/SB570": true,
        "SB783": true,
        "HB836": true,
        "SB148/HB449": true,
        "SB480/HB585": true,
        "HB1101/SB0653": null,
        "HB1165/SB0969": true
        }
        },
        {
        id: 54,
        name: "James Hinebaugh",
        party: "R",
        district: "01A",
        chamber: "house",
        score2024: 11,
        lifetimeScore: 17,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/hinebaugh01.jpg",
        email: "",
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
        id: 55,
        name: "Marvin E. Holmes",
        party: "D",
        district: "23B",
        chamber: "house",
        score2024: 100,
        lifetimeScore: 97,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/holmes01.jpg",
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
        id: 56,
        name: "Kevin B. Hornberger",
        party: "R",
        district: "35BA",
        chamber: "house",
        score2024: 56,
        lifetimeScore: 48,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/hornberger01.jpg",
        email: "",
        votes: {
        "HB990": false,
        "HB864": true,
        "HB397/SB570": true,
        "SB783": true,
        "HB836": false,
        "SB148/HB449": true,
        "SB480/HB585": true,
        "HB1101/SB0653": false,
        "HB1165/SB0969": false
        }
        },
        {
        id: 57,
        name: "Seth A. Howard",
        party: "R",
        district: "30B",
        chamber: "house",
        score2024: 11,
        lifetimeScore: 29,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/howard01.jpg",
        email: "",
        votes: {
        "HB990": false,
        "HB864": false,
        "HB397/SB570": false,
        "SB783": false,
        "HB836": false,
        "SB148/HB449": false,
        "SB480/HB585": true,
        "HB1101/SB0653": false,
        "HB1165/SB0969": false
        }
        },
        {
        id: 58,
        name: "Thomas S. Hutchinson",
        party: "R",
        district: "37BB",
        chamber: "house",
        score2024: 11,
        lifetimeScore: 16,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/hutchinson01.jpg",
        email: "",
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
            id: 59,
            name: "Julian Ivey",
            party: "D",
            district: "47AB",
            chamber: "house",
            score2024: 100,
            lifetimeScore: 98,
            photoUrl: "https://mgaleg.maryland.gov/2023RS/images/ivey01.jpg",
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
                id: 60,
                name: "Carl Jackson",
                party: "D",
                district: "08B",
                chamber: "house",
                score2024: 100,
                lifetimeScore: 97,
                photoUrl: "https://mgaleg.maryland.gov/2023RS/images/jackson01.jpg",
                email: "",
                votes: {
                "HB990": true,
                "HB864": true,
                "HB397/SB570": true,
                "SB783": true,
                "HB836": true,
                "SB148/HB449": true,
                "SB480/HB585": true,
                "HB1101/SB0653": null,
                "HB1165/SB0969": true
                }
                },
                {
                id: 61,
                name: "Jay A. Jacobs",
                party: "R",
                district: "36C",
                chamber: "house",
                score2024: 11,
                lifetimeScore: 30,
                photoUrl: "https://mgaleg.maryland.gov/2023RS/images/jacobs01.jpg",
                email: "",
                votes: {
                "HB990": true,
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
                id: 62,
                name: "Steve Johnson",
                party: "D",
                district: "34AA",
                chamber: "house",
                score2024: 100,
                lifetimeScore: 100,
                photoUrl: "https://mgaleg.maryland.gov/2023RS/images/johnson01.jpg",
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
                id: 63,
                name: "Andre V. Johnson",
                party: "D",
                district: "34AB",
                chamber: "house",
                score2024: 100,
                lifetimeScore: 98,
                photoUrl: "https://mgaleg.maryland.gov/2023RS/images/johnson-andre01.jpg",
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
                id: 64,
                name: "Adrienne A. Jones",
                party: "D",
                district: "10B",
                chamber: "house",
                score2024: 100,
                lifetimeScore: 99,
                photoUrl: "https://mgaleg.maryland.gov/2023RS/images/jones01.jpg",
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
                id: 65,
                name: "Dana Jones",
                party: "D",
                district: "30AB",
                chamber: "house",
                score2024: 100,
                lifetimeScore: 97,
                photoUrl: "https://mgaleg.maryland.gov/2023RS/images/jones-dana01.jpg",
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
                id: 66,
                name: "Anne R. Kaiser",
                party: "D",
                district: "14A",
                chamber: "house",
                score2024: 100,
                lifetimeScore: 97,
                photoUrl: "https://mgaleg.maryland.gov/2023RS/images/kaiser01.jpg",
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
                id: 67,
                name: "Aaron M. Kaufman",
                party: "D",
                district: "18B",
                chamber: "house",
                score2024: 100,
                lifetimeScore: 95,
                photoUrl: "https://mgaleg.maryland.gov/2023RS/images/kaufman01.jpg",
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
                id: 68,
                name: "Kenneth Kerr",
                party: "D",
                district: "03B",
                chamber: "house",
                score2024: 100,
                lifetimeScore: 98,
                photoUrl: "https://mgaleg.maryland.gov/2023RS/images/kerr01.jpg",
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
                id: 69,
                name: "Nicholaus R. Kipke",
                party: "R",
                district: "31B",
                chamber: "house",
                score2024: 22,
                lifetimeScore: 35,
                photoUrl: "https://mgaleg.maryland.gov/2023RS/images/kipke01.jpg",
                email: "",
                votes: {
                "HB990": false,
                "HB864": false,
                "HB397/SB570": false,
                "SB783": false,
                "HB836": false,
                "SB148/HB449": false,
                "SB480/HB585": true,
                "HB1101/SB0653": false,
                "HB1165/SB0969": true
                }
                },
                {
                id: 70,
                name: "Marc Korman",
                party: "D",
                district: "16C",
                chamber: "house",
                score2024: 100,
                lifetimeScore: 99,
                photoUrl: "https://mgaleg.maryland.gov/2023RS/images/korman01.jpg",
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
                id: 71,
                name: "Mary A. Lehman",
                party: "D",
                district: "21A",
                chamber: "house",
                score2024: 100,
                lifetimeScore: 100,
                photoUrl: "https://mgaleg.maryland.gov/2023RS/images/lehman01.jpg",
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
                id: 72,
                name: "Robbyn Lewis",
                party: "D",
                district: "46A",
                chamber: "house",
                score2024: 100,
                lifetimeScore: 96,
                photoUrl: "https://mgaleg.maryland.gov/2023RS/images/lewis01.jpg",
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
                id: 73,
                name: "Jazz Lewis",
                party: "D",
                district: "24C",
                chamber: "house",
                score2024: 100,
                lifetimeScore: 98,
                photoUrl: "https://mgaleg.maryland.gov/2023RS/images/lewis-jazz01.jpg",
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
                id: 74,
                name: "Robert B. Long",
                party: "R",
                district: "06B",
                chamber: "house",
                score2024: 22,
                lifetimeScore: 29,
                photoUrl: "https://mgaleg.maryland.gov/2023RS/images/long01.jpg",
                email: "",
                votes: {
                "HB990": false,
                "HB864": false,
                "HB397/SB570": false,
                "SB783": false,
                "HB836": false,
                "SB148/HB449": true,
                "SB480/HB585": true,
                "HB1101/SB0653": false,
                "HB1165/SB0969": false
                }
                },
                {
                id: 75,
                name: "Jeffrie E. Long",
                party: "D",
                district: "27B",
                chamber: "house",
                score2024: 100,
                lifetimeScore: 53,
                photoUrl: "https://mgaleg.maryland.gov/2023RS/images/long-jeffrie01.jpg",
                email: "",
                votes: {
                "HB990": true,
                "HB864": null,
                "HB397/SB570": true,
                "SB783": true,
                "HB836": true,
                "SB148/HB449": true,
                "SB480/HB585": true,
                "HB1101/SB0653": true,
                "HB1165/SB0969": null
                }
                },
                {
                id: 76,
                name: "Lesley J. Lopez",
                party: "D",
                district: "39C",
                chamber: "house",
                score2024: 100,
                lifetimeScore: 96,
                photoUrl: "https://mgaleg.maryland.gov/2023RS/images/lopez01.jpg",
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
                id: 77,
                name: "Sara Love",
                party: "D",
                district: "16B",
                chamber: "house",
                score2024: 100,
                lifetimeScore: 100,
                photoUrl: "https://mgaleg.maryland.gov/2023RS/images/love01.jpg",
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
                    id: 78,
                    name: "Nino Mangione",
                    party: "R",
                    district: "42A",
                    chamber: "house",
                    score2024: 0,
                    lifetimeScore: 4,
                    photoUrl: "https://mgaleg.maryland.gov/2023RS/images/mangione01.jpg",
                    email: "",
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
                        id: 79,
                        name: "Ashanti Martinez",
                        party: "D",
                        district: "22C",
                        chamber: "house",
                        score2024: 100,
                        lifetimeScore: 100,
                        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/martinez01.jpg",
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
                        id: 80,
                        name: "Aletheia McCaskill",
                        party: "D",
                        district: "44BB",
                        chamber: "house",
                        score2024: 88,
                        lifetimeScore: 94,
                        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/mccaskill01.jpg",
                        email: "",
                        votes: {
                        "HB990": true,
                        "HB864": true,
                        "HB397/SB570": true,
                        "SB783": true,
                        "HB836": null,
                        "SB148/HB449": true,
                        "SB480/HB585": true,
                        "HB1101/SB0653": null,
                        "HB1165/SB0969": true
                        }
                        },
                        {
                        id: 81,
                        name: "Susan K. McComas",
                        party: "R",
                        district: "34B",
                        chamber: "house",
                        score2024: 11,
                        lifetimeScore: 22,
                        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/mccomas01.jpg",
                        email: "",
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
                        id: 82,
                        name: "Ric Metzgar",
                        party: "R",
                        district: "06C",
                        chamber: "house",
                        score2024: 13,
                        lifetimeScore: 22,
                        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/metzgar01.jpg",
                        email: "",
                        votes: {
                        "HB990": false,
                        "HB864": false,
                        "HB397/SB570": false,
                        "SB783": false,
                        "HB836": false,
                        "SB148/HB449": false,
                        "SB480/HB585": true,
                        "HB1101/SB0653": false,
                        "HB1165/SB0969": true
                        }
                        },
                        {
                        id: 83,
                        name: "April Miller",
                        party: "R",
                        district: "04A",
                        chamber: "house",
                        score2024: 0,
                        lifetimeScore: 11,
                        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/miller01.jpg",
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
                        id: 84,
                        name: "Bernice Mireku-North",
                        party: "D",
                        district: "14B",
                        chamber: "house",
                        score2024: 100,
                        lifetimeScore: 100,
                        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/mireku-north01.jpg",
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
                        id: 85,
                        name: "David Moon",
                        party: "D",
                        district: "20A",
                        chamber: "house",
                        score2024: 100,
                        lifetimeScore: 100,
                        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/moon01.jpg",
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
                        id: 86,
                        name: "Matthew Morgan",
                        party: "R",
                        district: "29A",
                        chamber: "house",
                        score2024: 0,
                        lifetimeScore: 14,
                        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/morgan01.jpg",
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
                        id: 87,
                        name: "Todd B. Morgan",
                        party: "R",
                        district: "29C",
                        chamber: "house",
                        score2024: 22,
                        lifetimeScore: 21,
                        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/morgan-todd01.jpg",
                        email: "",
                        votes: {
                        "HB990": true,
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
                        id: 88,
                        name: "Rachel Muñoz",
                        party: "R",
                        district: "31C",
                        chamber: "house",
                        score2024: 0,
                        lifetimeScore: 20,
                        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/munoz01.jpg",
                        email: "",
                        votes: {
                        "HB990": true,
                        "HB864": true,
                        "HB397/SB570": true,
                        "SB783": true,
                        "HB836": false,
                        "SB148/HB449": true,
                        "SB480/HB585": true,
                        "HB1101/SB0653": true,
                        "HB1165/SB0969": true
                        }
                        },
                        {
                        id: 89,
                        name: "Ryan Nawrocki",
                        party: "R",
                        district: "07AA",
                        chamber: "house",
                        score2024: 0,
                        lifetimeScore: 11,
                        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/nawrocki01.jpg",
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
                        id: 90,
                        name: "Charles J. Otto",
                        party: "R",
                        district: "38A",
                        chamber: "house",
                        score2024: 22,
                        lifetimeScore: 30,
                        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/otto01.jpg",
                        email: "",
                        votes: {
                        "HB990": true,
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
                            id: 91,
                            name: "Julie Palakovich Carr",
                            party: "D",
                            district: "17C",
                            chamber: "house",
                            score2024: 100,
                            lifetimeScore: 98,
                            photoUrl: "https://mgaleg.maryland.gov/2023RS/images/palakovich-carr01.jpg",
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
                            id: 92,
                            name: "Cheryl E. Pasteur",
                            party: "D",
                            district: "11A",
                            chamber: "house",
                            score2024: 100,
                            lifetimeScore: 100,
                            photoUrl: "https://mgaleg.maryland.gov/2023RS/images/pasteur01.jpg",
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
                            id: 93,
                            name: "Edith J. Patterson",
                            party: "D",
                            district: "28A",
                            chamber: "house",
                            score2024: 100,
                            lifetimeScore: 97,
                            photoUrl: "https://mgaleg.maryland.gov/2023RS/images/patterson01.jpg",
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
                            id: 94,
                            name: "Joseline A. Pena-Melnyk",
                            party: "D",
                            district: "21C",
                            chamber: "house",
                            score2024: 100,
                            lifetimeScore: 98,
                            photoUrl: "https://mgaleg.maryland.gov/2023RS/images/pena-melnyk01.jpg",
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
                            id: 95,
                            name: "Scott Phillips",
                            party: "D",
                            district: "10A",
                            chamber: "house",
                            score2024: 100,
                            lifetimeScore: 100,
                            photoUrl: "https://mgaleg.maryland.gov/2023RS/images/phillips01.jpg",
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
                            id: 96,
                            name: "Jesse T. Pippy",
                            party: "R",
                            district: "04C",
                            chamber: "house",
                            score2024: 0,
                            lifetimeScore: 13,
                            photoUrl: "https://mgaleg.maryland.gov/2023RS/images/pippy01.jpg",
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
                            id: 97,
                            name: "Andrew C. Pruski",
                            party: "D",
                            district: "33A",
                            chamber: "house",
                            score2024: 100,
                            lifetimeScore: 100,
                            photoUrl: "https://mgaleg.maryland.gov/2023RS/images/pruski01.jpg",
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
                            id: 98,
                            name: "Lily Qi",
                            party: "D",
                            district: "15A",
                            chamber: "house",
                            score2024: 100,
                            lifetimeScore: 98,
                            photoUrl: "https://mgaleg.maryland.gov/2023RS/images/qi01.jpg",
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
                            id: 99,
                            name: "Pam Queen",
                            party: "D",
                            district: "14C",
                            chamber: "house",
                            score2024: 100,
                            lifetimeScore: 97,
                            photoUrl: "https://mgaleg.maryland.gov/2023RS/images/queen01.jpg",
                            email: "",
                            votes: {
                            "HB990": true,
                            "HB864": true,
                            "HB397/SB570": true,
                            "SB783": true,
                            "HB836": true,
                            "SB148/HB449": true,
                            "SB480/HB585": true,
                            "HB1101/SB0653": null,
                            "HB1165/SB0969": true
                            }
                            },
                            {
                            id: 100,
                            name: "Teresa E. Reilly",
                            party: "R",
                            district: "35AB",
                            chamber: "house",
                            score2024: 0,
                            lifetimeScore: 23,
                            photoUrl: "https://mgaleg.maryland.gov/2023RS/images/reilly01.jpg",
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
                            id: 101,
                            name: "Kent Roberson",
                            party: "D",
                            district: "25C",
                            chamber: "house",
                            score2024: 100,
                            lifetimeScore: 100,
                            photoUrl: "https://mgaleg.maryland.gov/2023RS/images/roberson01.jpg",
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
                            id: 102,
                            name: "Denise Roberts",
                            party: "D",
                            district: "25A",
                            chamber: "house",
                            score2024: 100,
                            lifetimeScore: 100,
                            photoUrl: "https://mgaleg.maryland.gov/2023RS/images/roberts01.jpg",
                            email: "",
                            votes: {
                            "HB990": true,
                            "HB864": true,
                            "HB397/SB570": true,
                            "SB783": true,
                            "HB836": true,
                            "SB148/HB449": true,
                            "SB480/HB585": null,
                            "HB1101/SB0653": true,
                            "HB1165/SB0969": true
                            }
                            },
                            {
                            id: 103,
                            name: "Mike Rogers",
                            party: "D",
                            district: "32C",
                            chamber: "house",
                            score2024: 100,
                            lifetimeScore: 98,
                            photoUrl: "https://mgaleg.maryland.gov/2023RS/images/rogers01.jpg",
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
                            id: 104,
                            name: "April Rose",
                            party: "R",
                            district: "05B",
                            chamber: "house",
                            score2024: 11,
                            lifetimeScore: 15,
                            photoUrl: "https://mgaleg.maryland.gov/2023RS/images/rose01.jpg",
                            email: "",
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
                            id: 105,
                            name: "Samuel I. Rosenberg",
                            party: "D",
                            district: "41C",
                            chamber: "house",
                            score2024: 100,
                            lifetimeScore: 98,
                            photoUrl: "https://mgaleg.maryland.gov/2023RS/images/rosenberg01.jpg",
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
                            id: 106,
                            name: "Malcolm Ruff",
                            party: "D",
                            district: "41B",
                            chamber: "house",
                            score2024: 100,
                            lifetimeScore: 100,
                            photoUrl: "https://mgaleg.maryland.gov/2023RS/images/ruff01.jpg",
                            email: "",
                            votes: {
                            "HB990": true,
                            "HB864": true,
                            "HB397/SB570": null,
                            "SB783": true,
                            "HB836": true,
                            "SB148/HB449": true,
                            "SB480/HB585": true,
                            "HB1101/SB0653": true,
                            "HB1165/SB0969": true
                            }
                            },
                            {
                            id: 107,
                            name: "Sheila Ruth",
                            party: "D",
                            district: "44BA",
                            chamber: "house",
                            score2024: 100,
                            lifetimeScore: 97,
                            photoUrl: "https://mgaleg.maryland.gov/2023RS/images/ruth01.jpg",
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
                            id: 108,
                            name: "Sheree Sample-Hughes",
                            party: "D",
                            district: "37A",
                            chamber: "house",
                            score2024: 56,
                            lifetimeScore: 78,
                            photoUrl: "https://mgaleg.maryland.gov/2023RS/images/sample-hughes01.jpg",
                            email: "",
                            votes: {
                            "HB990": true,
                            "HB864": null,
                            "HB397/SB570": false,
                            "SB783": true,
                            "HB836": true,
                            "SB148/HB449": true,
                            "SB480/HB585": null,
                            "HB1101/SB0653": true,
                            "HB1165/SB0969": false
                            }
                            },
                            {
                                id: 109,
                                name: "Stuart Michael Schmidt",
                                party: "R",
                                district: "33B",
                                chamber: "house",
                                score2024: 100,
                                lifetimeScore: 63,
                                photoUrl: "https://mgaleg.maryland.gov/2023RS/images/schmidt01.jpg",
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
id: 110,
name: "Emily Shetty",
party: "D",
district: "18A",
chamber: "house",
score2024: 100,
lifetimeScore: 100,
photoUrl: "https://mgaleg.maryland.gov/2023RS/images/shetty01.jpg",
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
id: 111,
name: "Gary Simmons",
party: "D",
district: "12B",
chamber: "house",
score2024: 100,
lifetimeScore: 100,
photoUrl: "https://mgaleg.maryland.gov/2023RS/images/simmons01.jpg",
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
id: 112,
name: "Karen Simpson",
party: "D",
district: "03C",
chamber: "house",
score2024: 100,
lifetimeScore: 100,
photoUrl: "https://mgaleg.maryland.gov/2023RS/images/simpson01.jpg",
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
id: 113,
name: "Stephanie Smith",
party: "D",
district: "45C",
chamber: "house",
score2024: 100,
lifetimeScore: 98,
photoUrl: "https://mgaleg.maryland.gov/2023RS/images/smith-stephanie01.jpg",
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
id: 114,
name: "Jared Solomon",
party: "D",
district: "18C",
chamber: "house",
score2024: 100,
lifetimeScore: 100,
photoUrl: "https://mgaleg.maryland.gov/2023RS/images/solomon01.jpg",
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
id: 115,
name: "Ryan Spiegel",
party: "D",
district: "17A",
chamber: "house",
score2024: 100,
lifetimeScore: 100,
photoUrl: "https://mgaleg.maryland.gov/2023RS/images/spiegel01.jpg",
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
id: 116,
name: "Dana Stein",
party: "D",
district: "11BB",
chamber: "house",
score2024: 100,
lifetimeScore: 97,
photoUrl: "https://mgaleg.maryland.gov/2023RS/images/stein01.jpg",
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
id: 117,
name: "Vaughn Stewart",
party: "D",
district: "19B",
chamber: "house",
score2024: 100,
lifetimeScore: 98,
photoUrl: "https://mgaleg.maryland.gov/2023RS/images/stewart01.jpg",
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
id: 118,
name: "Joshua J. Stonko",
party: "R",
district: "42C",
chamber: "house",
score2024: 11,
lifetimeScore: 21,
photoUrl: "https://mgaleg.maryland.gov/2023RS/images/stonko01.jpg",
email: "",
votes: {
"HB990": false,
"HB864": false,
"HB397/SB570": null,
"SB783": false,
"HB836": false,
"SB148/HB449": true,
"SB480/HB585": false,
"HB1101/SB0653": false,
"HB1165/SB0969": false
}
},
{
id: 119,
name: "Kathy Szeliga",
party: "R",
district: "07AB",
chamber: "house",
score2024: 0,
lifetimeScore: 19,
photoUrl: "https://mgaleg.maryland.gov/2023RS/images/szeliga01.jpg",
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
id: 120,
name: "Deni Taveras",
party: "D",
district: "47B",
chamber: "house",
score2024: 100,
lifetimeScore: 100,
photoUrl: "https://mgaleg.maryland.gov/2023RS/images/taveras01.jpg",
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
id: 121,
name: "Kym Taylor",
party: "D",
district: "23C",
chamber: "house",
score2024: 100,
lifetimeScore: 100,
photoUrl: "https://mgaleg.maryland.gov/2023RS/images/taylor01.jpg",
email: "",
votes: {
"HB990": true,
"HB864": true,
"HB397/SB570": true,
"SB783": true,
"HB836": null,
"SB148/HB449": true,
"SB480/HB585": true,
"HB1101/SB0653": true,
"HB1165/SB0969": true
}
},
{
id: 122,
name: "Jen Terrasa",
party: "D",
district: "13B",
chamber: "house",
score2024: 100,
lifetimeScore: 98,
photoUrl: "https://mgaleg.maryland.gov/2023RS/images/terrasa01.jpg",
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
id: 123,
name: "Karen R. Toles",
party: "D",
district: "25B",
chamber: "house",
score2024: 100,
lifetimeScore: 100,
photoUrl: "https://mgaleg.maryland.gov/2023RS/images/toles01.jpg",
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
id: 124,
name: "Christopher L. Tomlinson",
party: "R",
district: "05C",
chamber: "house",
score2024: 11,
lifetimeScore: 21,
photoUrl: "https://mgaleg.maryland.gov/2023RS/images/tomlinson01.jpg",
email: "",
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
id: 125,
name: "Veronica Turner",
party: "D",
district: "26C",
chamber: "house",
score2024: 100,
lifetimeScore: 98,
photoUrl: "https://mgaleg.maryland.gov/2023RS/images/turner01.jpg",
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
id: 126,
name: "Kriselda Valderrama",
party: "D",
district: "26B",
chamber: "house",
score2024: 100,
lifetimeScore: 99,
photoUrl: "https://mgaleg.maryland.gov/2023RS/images/valderrama01.jpg",
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
id: 127,
name: "William Valentine",
party: "R",
district: "02AB",
chamber: "house",
score2024: 0,
lifetimeScore: 5,
photoUrl: "https://mgaleg.maryland.gov/2023RS/images/valentine01.jpg",
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
id: 128,
name: "Joe Vogel",
party: "D",
district: "17B",
chamber: "house",
score2024: 100,
lifetimeScore: 100,
photoUrl: "https://mgaleg.maryland.gov/2023RS/images/vogel01.jpg",
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
id: 129,
name: "Courtney Watson",
party: "D",
district: "09B",
chamber: "house",
score2024: 100,
lifetimeScore: 98,
photoUrl: "https://mgaleg.maryland.gov/2023RS/images/watson01.jpg",
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
id: 130,
name: "Melissa Wells",
party: "D",
district: "40C",
chamber: "house",
score2024: 100,
lifetimeScore: 98,
photoUrl: "https://mgaleg.maryland.gov/2023RS/images/wells01.jpg",
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
id: 131,
name: "Jennifer White Holland",
party: "D",
district: "10C",
chamber: "house",
score2024: 100,
lifetimeScore: 100,
photoUrl: "https://mgaleg.maryland.gov/2023RS/images/white-holland01.jpg",
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
id: 132,
name: "Jheanelle K. Wilkins",
party: "D",
district: "20C",
chamber: "house",
score2024: 100,
lifetimeScore: 100,
photoUrl: "https://mgaleg.maryland.gov/2023RS/images/wilkins01.jpg",
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
id: 133,
name: "Nicole A. Williams",
party: "D",
district: "22A",
chamber: "house",
score2024: 100,
lifetimeScore: 97,
photoUrl: "https://mgaleg.maryland.gov/2023RS/images/williams01.jpg",
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
id: 134,
name: "C.T. Wilson",
party: "D",
district: "28C",
chamber: "house",
score2024: 100,
lifetimeScore: 97,
photoUrl: "https://mgaleg.maryland.gov/2023RS/images/wilson01.jpg",
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
id: 135,
name: "Greg Wims",
party: "D",
district: "39B",
chamber: "house",
score2024: 100,
lifetimeScore: 100,
photoUrl: "https://mgaleg.maryland.gov/2023RS/images/wims01.jpg",
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
id: 136,
name: "William J. Wivell",
party: "R",
district: "02AA",
chamber: "house",
score2024: 0,
lifetimeScore: 19,
photoUrl: "https://mgaleg.maryland.gov/2023RS/images/wivell01.jpg",
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
id: 137,
name: "Sarah Wolek",
party: "D",
district: "16A",
chamber: "house",
score2024: 100,
lifetimeScore: 100,
photoUrl: "https://mgaleg.maryland.gov/2023RS/images/wolek01.jpg",
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
id: 138,
name: "Jamila J. Woods",
party: "D",
district: "26A",
chamber: "house",
score2024: 100,
lifetimeScore: 91,
photoUrl: "https://mgaleg.maryland.gov/2023RS/images/woods01.jpg",
email: "",
votes: {
"HB990": null,
"HB864": null,
"HB397/SB570": null,
"SB783": null,
"HB836": true,
"SB148/HB449": null,
"SB480/HB585": null,
"HB1101/SB0653": null,
"HB1165/SB0969": null
}
},
{
id: 139,
name: "Chao Wu",
party: "D",
district: "09AA",
chamber: "house",
score2024: 100,
lifetimeScore: 95,
photoUrl: "https://mgaleg.maryland.gov/2023RS/images/wu01.jpg",
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
id: 140,
name: "Caylin A. Young",
party: "D",
district: "45B",
chamber: "house",
score2024: 100,
lifetimeScore: 100,
photoUrl: "https://mgaleg.maryland.gov/2023RS/images/young01.jpg",
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
id: 141,
name: "Natalie Ziegler",
party: "D",
district: "09AB",
chamber: "house",
score2024: 100,
lifetimeScore: 100,
photoUrl: "https://mgaleg.maryland.gov/2023RS/images/ziegler01.jpg",
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
id: 142,
name: "Malcolm Augustine",
party: "D",
district: "47",
chamber: "senate",
score2024: 100,
lifetimeScore: 98,
photoUrl: "https://mgaleg.maryland.gov/2023RS/images/augustine01.jpg",
email: "",
votes: {
"HB990": true,
"HB864": true,
"HB397/SB570": true,
"SB783": true,
"SB148/HB449": true,
"SB480/HB585": true,
"HB1101/SB0653": true,
"HB1165/SB0969": true
}
},
{
id: 143,
name: "Jack Bailey",
party: "R",
district: "29",
chamber: "senate",
score2024: 50,
lifetimeScore: 48,
photoUrl: "https://mgaleg.maryland.gov/2023RS/images/bailey01.jpg",
email: "",
votes: {
"HB990": false,
"HB864": false,
"HB397/SB570": false,
"SB783": true,
"SB148/HB449": true,
"SB480/HB585": true,
"HB1101/SB0653": false,
"HB1165/SB0969": true
}
},
{
id: 144,
name: "Pamela Beidle",
party: "D",
district: "32",
chamber: "senate",
score2024: 100,
lifetimeScore: 97,
photoUrl: "https://mgaleg.maryland.gov/2023RS/images/beidle01.jpg",
email: "",
votes: {
"HB990": null,
"HB864": true,
"HB397/SB570": true,
"SB783": true,
"SB148/HB449": true,
"SB480/HB585": true,
"HB1101/SB0653": true,
"HB1165/SB0969": true
}
},
{
    id: 145,
    name: "Joanne C. Benson",
    party: "D",
    district: "24",
    chamber: "senate",
    score2024: 100,
    lifetimeScore: 96,
    photoUrl: "https://mgaleg.maryland.gov/2023RS/images/benson01.jpg",
    email: "",
    votes: {
    "HB990": true,
    "HB864": true,
    "HB397/SB570": true,
    "SB783": true,
    "SB148/HB449": true,
    "SB480/HB585": true,
    "HB1101/SB0653": true,
    "HB1165/SB0969": true
    }
    },
    {
        id: 146,
        name: "Benjamin Brooks",
        party: "D",
        district: "10",
        chamber: "senate",
        score2024: 100,
        lifetimeScore: 97,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/brooks01.jpg",
        email: "",
        votes: {
        "HB990": null,
        "HB864": true,
        "HB397/SB570": null,
        "SB783": true,
        "SB148/HB449": true,
        "SB480/HB585": true,
        "HB1101/SB0653": true,
        "HB1165/SB0969": null
        }
        },
        {
        id: 147,
        name: "Mary Beth Carozza",
        party: "R",
        district: "38",
        chamber: "senate",
        score2024: 50,
        lifetimeScore: 48,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/carozza01.jpg",
        email: "",
        votes: {
        "HB990": false,
        "HB864": false,
        "HB397/SB570": false,
        "SB783": true,
        "SB148/HB449": true,
        "SB480/HB585": true,
        "HB1101/SB0653": false,
        "HB1165/SB0969": true
        }
        },
        {
        id: 148,
        name: "Jill P. Carter",
        party: "D",
        district: "41",
        chamber: "senate",
        score2024: 100,
        lifetimeScore: 98,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/carter01.jpg",
        email: "",
        votes: {
        "HB990": true,
        "HB864": true,
        "HB397/SB570": true,
        "SB783": true,
        "SB148/HB449": true,
        "SB480/HB585": true,
        "HB1101/SB0653": true,
        "HB1165/SB0969": true
        }
        },
        {
        id: 149,
        name: "Nick Charles",
        party: "D",
        district: "25",
        chamber: "senate",
        score2024: 100,
        lifetimeScore: 98,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/charles01.jpg",
        email: "",
        votes: {
        "HB990": true,
        "HB864": true,
        "HB397/SB570": true,
        "SB783": true,
        "SB148/HB449": true,
        "SB480/HB585": true,
        "HB1101/SB0653": true,
        "HB1165/SB0969": true
        }
        },
        {
        id: 150,
        name: "Paul D. Corderman",
        party: "R",
        district: "2",
        chamber: "senate",
        score2024: 50,
        lifetimeScore: 41,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/corderman01.jpg",
        email: "",
        votes: {
        "HB990": false,
        "HB864": false,
        "HB397/SB570": false,
        "SB783": true,
        "SB148/HB449": true,
        "SB480/HB585": true,
        "HB1101/SB0653": false,
        "HB1165/SB0969": true
        }
        },
        {
        id: 151,
        name: "Sarah K. Elfreth",
        party: "D",
        district: "30",
        chamber: "senate",
        score2024: 100,
        lifetimeScore: 100,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/elfreth01.jpg",
        email: "",
        votes: {
        "HB990": true,
        "HB864": true,
        "HB397/SB570": true,
        "SB783": true,
        "SB148/HB449": true,
        "SB480/HB585": true,
        "HB1101/SB0653": true,
        "HB1165/SB0969": true
        }
        },
        {
        id: 152,
        name: "Arthur Ellis",
        party: "D",
        district: "28",
        chamber: "senate",
        score2024: 100,
        lifetimeScore: 98,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/ellis01.jpg",
        email: "",
        votes: {
        "HB990": true,
        "HB864": true,
        "HB397/SB570": true,
        "SB783": true,
        "SB148/HB449": true,
        "SB480/HB585": true,
        "HB1101/SB0653": true,
        "HB1165/SB0969": true
        }
        },
        {
        id: 153,
        name: "Brian J. Feldman",
        party: "D",
        district: "15",
        chamber: "senate",
        score2024: 100,
        lifetimeScore: 99,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/feldman01.jpg",
        email: "",
        votes: {
        "HB990": true,
        "HB864": true,
        "HB397/SB570": true,
        "SB783": true,
        "SB148/HB449": true,
        "SB480/HB585": true,
        "HB1101/SB0653": true,
        "HB1165/SB0969": true
        }
        },
        {
        id: 154,
        name: "Bill Ferguson",
        party: "D",
        district: "46",
        chamber: "senate",
        score2024: 100,
        lifetimeScore: 98,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/ferguson01.jpg",
        email: "",
        votes: {
        "HB990": true,
        "HB864": true,
        "HB397/SB570": true,
        "SB783": true,
        "SB148/HB449": true,
        "SB480/HB585": true,
        "HB1101/SB0653": true,
        "HB1165/SB0969": true
        }
        },
        {
        id: 155,
        name: "William G. Folden",
        party: "R",
        district: "4",
        chamber: "senate",
        score2024: 50,
        lifetimeScore: 36,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/folden01.jpg",
        email: "",
        votes: {
        "HB990": false,
        "HB864": false,
        "HB397/SB570": false,
        "SB783": true,
        "SB148/HB449": true,
        "SB480/HB585": true,
        "HB1101/SB0653": false,
        "HB1165/SB0969": true
        }
        },
        {
        id: 156,
        name: "Katie Fry Hester",
        party: "D",
        district: "35",
        chamber: "senate",
        score2024: 63,
        lifetimeScore: 49,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/fry-hester01.jpg",
        email: "",
        votes: {
        "HB990": false,
        "HB864": false,
        "HB397/SB570": true,
        "SB783": true,
        "SB148/HB449": true,
        "SB480/HB585": true,
        "HB1101/SB0653": false,
        "HB1165/SB0969": true
        }
        },
        {
        id: 157,
        name: "Jason C. Gallion",
        party: "R",
        district: "33",
        chamber: "senate",
        score2024: 100,
        lifetimeScore: 100,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/gallion01.jpg",
        email: "",
        votes: {
        "HB990": true,
        "HB864": true,
        "HB397/SB570": true,
        "SB783": true,
        "SB148/HB449": true,
        "SB480/HB585": true,
        "HB1101/SB0653": true,
        "HB1165/SB0969": true
        }
        },
        {
        id: 158,
        name: "Dawn D. Gile",
        party: "D",
        district: "13",
        chamber: "senate",
        score2024: 100,
        lifetimeScore: 98,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/gile01.jpg",
        email: "",
        votes: {
        "HB990": true,
        "HB864": true,
        "HB397/SB570": true,
        "SB783": true,
        "SB148/HB449": true,
        "SB480/HB585": true,
        "HB1101/SB0653": true,
        "HB1165/SB0969": true
        }
        },
        {
        id: 159,
        name: "Guy Guzzone",
        party: "D",
        district: "40",
        chamber: "senate",
        score2024: 100,
        lifetimeScore: 98,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/guzzone01.jpg",
        email: "",
        votes: {
        "HB990": true,
        "HB864": true,
        "HB397/SB570": true,
        "SB783": true,
        "SB148/HB449": true,
        "SB480/HB585": true,
        "HB1101/SB0653": true,
        "HB1165/SB0969": true
        }
        },
        {
        id: 160,
        name: "Antonio Hayes",
        party: "D",
        district: "36",
        chamber: "senate",
        score2024: 50,
        lifetimeScore: 41,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/hayes01.jpg",
        email: "",
        votes: {
        "HB990": false,
        "HB864": false,
        "HB397/SB570": false,
        "SB783": true,
        "SB148/HB449": true,
        "SB480/HB585": true,
        "HB1101/SB0653": false,
        "HB1165/SB0969": true
        }
        },
        {
        id: 161,
        name: "Stephen S. Hershey",
        party: "R",
        district: "9",
        chamber: "senate",
        score2024: 100,
        lifetimeScore: 100,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/hershey01.jpg",
        email: "",
        votes: {
        "HB990": true,
        "HB864": true,
        "HB397/SB570": true,
        "SB783": true,
        "SB148/HB449": true,
        "SB480/HB585": true,
        "HB1101/SB0653": true,
        "HB1165/SB0969": true
        }
        },
        {
        id: 162,
        name: "Shelly Hettleman",
        party: "D",
        district: "11",
        chamber: "senate",
        score2024: 100,
        lifetimeScore: 98,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/hettleman01.jpg",
        email: "",
        votes: {
        "HB990": true,
        "HB864": true,
        "HB397/SB570": true,
        "SB783": true,
        "SB148/HB449": true,
        "SB480/HB585": true,
        "HB1101/SB0653": true,
        "HB1165/SB0969": true
        }
        },
        {
        id: 163,
        name: "Michael A. Jackson",
        party: "D",
        district: "27",
        chamber: "senate",
        score2024: 100,
        lifetimeScore: 97,
        photoUrl: "https://mgaleg.maryland.gov/2023RS/images/jackson01.jpg",
        email: "",
        votes: {
        "HB990": true,
        "HB864": true,
        "HB397/SB570": true,
        "SB783": true,
        "SB148/HB449": true,
        "SB480/HB585": true,
        "HB1101/SB0653": true,
        "HB1165/SB0969": true
        }
        },
        {
            id: 164,
            name: "Mary-Dulany James",
            party: "D",
            district: "34",
            chamber: "senate",
            score2024: 100,
            lifetimeScore: 100,
            photoUrl: "https://mgaleg.maryland.gov/2023RS/images/james01.jpg",
            email: "",
            votes: {
            "HB990": true,
            "HB864": null,
            "HB397/SB570": true,
            "SB783": true,
            "SB148/HB449": true,
            "SB480/HB585": true,
            "HB1101/SB0653": true,
            "HB1165/SB0969": true
            }
            },
            {
            id: 165,
            name: "J.B. Jennings",
            party: "R",
            district: "7",
            chamber: "senate",
            score2024: 50,
            lifetimeScore: 45,
            photoUrl: "https://mgaleg.maryland.gov/2023RS/images/jennings01.jpg",
            email: "",
            votes: {
            "HB990": false,
            "HB864": false,
            "HB397/SB570": false,
            "SB783": true,
            "SB148/HB449": true,
            "SB480/HB585": true,
            "HB1101/SB0653": false,
            "HB1165/SB0969": true
            }
            },
            {
            id: 166,
            name: "Cheryl C. Kagan",
            party: "D",
            district: "17",
            chamber: "senate",
            score2024: 100,
            lifetimeScore: 97,
            photoUrl: "https://mgaleg.maryland.gov/2023RS/images/kagan01.jpg",
            email: "",
            votes: {
            "HB990": true,
            "HB864": true,
            "HB397/SB570": true,
            "SB783": true,
            "SB148/HB449": true,
            "SB480/HB585": true,
            "HB1101/SB0653": true,
            "HB1165/SB0969": true
            }
            },
            {
            id: 167,
            name: "Nancy J. King",
            party: "D",
            district: "39",
            chamber: "senate",
            score2024: 100,
            lifetimeScore: 98,
            photoUrl: "https://mgaleg.maryland.gov/2023RS/images/king01.jpg",
            email: "",
            votes: {
            "HB990": true,
            "HB864": true,
            "HB397/SB570": true,
            "SB783": true,
            "SB148/HB449": true,
            "SB480/HB585": true,
            "HB1101/SB0653": true,
            "HB1165/SB0969": true
            }
            },
            {
            id: 168,
            name: "Katherine Klausmeier",
            party: "D",
            district: "8",
            chamber: "senate",
            score2024: 86,
            lifetimeScore: 93,
            photoUrl: "https://mgaleg.maryland.gov/2023RS/images/klausmeier01.jpg",
            email: "",
            votes: {
            "HB990": true,
            "HB864": false,
            "HB397/SB570": true,
            "SB783": true,
            "SB148/HB449": null,
            "SB480/HB585": true,
            "HB1101/SB0653": true,
            "HB1165/SB0969": true
            }
            },
            {
            id: 169,
            name: "Benjamin F. Kramer",
            party: "D",
            district: "19",
            chamber: "senate",
            score2024: 100,
            lifetimeScore: 99,
            photoUrl: "https://mgaleg.maryland.gov/2023RS/images/kramer01.jpg",
            email: "",
            votes: {
            "HB990": true,
            "HB864": true,
            "HB397/SB570": true,
            "SB783": true,
            "SB148/HB449": true,
            "SB480/HB585": true,
            "HB1101/SB0653": true,
            "HB1165/SB0969": true
            }
            },
            {
            id: 170,
            name: "Clarence K. Lam",
            party: "D",
            district: "12",
            chamber: "senate",
            score2024: 88,
            lifetimeScore: 99,
            photoUrl: "https://mgaleg.maryland.gov/2023RS/images/lam01.jpg",
            email: "",
            votes: {
            "HB990": true,
            "HB864": true,
            "HB397/SB570": null,
            "SB783": true,
            "SB148/HB449": true,
            "SB480/HB585": true,
            "HB1101/SB0653": true,
            "HB1165/SB0969": true
            }
            },
            {
            id: 171,
            name: "Karen Lewis Young",
            party: "D",
            district: "3",
            chamber: "senate",
            score2024: 100,
            lifetimeScore: 98,
            photoUrl: "https://mgaleg.maryland.gov/2023RS/images/lewis-young01.jpg",
            email: "",
            votes: {
            "HB990": true,
            "HB864": true,
            "HB397/SB570": true,
            "SB783": true,
            "SB148/HB449": true,
            "SB480/HB585": true,
            "HB1101/SB0653": true,
            "HB1165/SB0969": true
            }
            },
            {
            id: 172,
            name: "Johnny Mautz",
            party: "R",
            district: "37",
            chamber: "senate",
            score2024: 50,
            lifetimeScore: 24,
            photoUrl: "https://mgaleg.maryland.gov/2023RS/images/mautz01.jpg",
            email: "",
            votes: {
            "HB990": false,
            "HB864": false,
            "HB397/SB570": false,
            "SB783": true,
            "SB148/HB449": true,
            "SB480/HB585": true,
            "HB1101/SB0653": false,
            "HB1165/SB0969": true
            }
            },
            {
            id: 173,
            name: "Cory V. McCray",
            party: "D",
            district: "45",
            chamber: "senate",
            score2024: 100,
            lifetimeScore: 94,
            photoUrl: "https://mgaleg.maryland.gov/2023RS/images/mccray01.jpg",
            email: "",
            votes: {
            "HB990": true,
            "HB864": true,
            "HB397/SB570": true,
            "SB783": true,
            "SB148/HB449": true,
            "SB480/HB585": true,
            "HB1101/SB0653": true,
            "HB1165/SB0969": true
            }
            },
            {
            id: 174,
            name: "Mike McKay",
            party: "R",
            district: "1",
            chamber: "senate",
            score2024: 63,
            lifetimeScore: 35,
            photoUrl: "https://mgaleg.maryland.gov/2023RS/images/mckay01.jpg",
            email: "",
            votes: {
            "HB990": false,
            "HB864": false,
            "HB397/SB570": true,
            "SB783": true,
            "SB148/HB449": true,
            "SB480/HB585": true,
            "HB1101/SB0653": false,
            "HB1165/SB0969": true
            }
            },
            {
            id: 175,
            name: "C. Anthony Muse",
            party: "D",
            district: "26",
            chamber: "senate",
            score2024: 100,
            lifetimeScore: 97,
            photoUrl: "https://mgaleg.maryland.gov/2023RS/images/muse01.jpg",
            email: "",
            votes: {
            "HB990": true,
            "HB864": true,
            "HB397/SB570": true,
            "SB783": true,
            "SB148/HB449": true,
            "SB480/HB585": true,
            "HB1101/SB0653": true,
            "HB1165/SB0969": true
            }
            },
            {
            id: 176,
            name: "Justin Ready",
            party: "R",
            district: "5",
            chamber: "senate",
            score2024: 50,
            lifetimeScore: 41,
            photoUrl: "https://mgaleg.maryland.gov/2023RS/images/ready01.jpg",
            email: "",
            votes: {
            "HB990": false,
            "HB864": false,
            "HB397/SB570": false,
            "SB783": true,
            "SB148/HB449": true,
            "SB480/HB585": true,
            "HB1101/SB0653": false,
            "HB1165/SB0969": true
            }
            },
            {
            id: 177,
            name: "Jim Rosapepe",
            party: "D",
            district: "21",
            chamber: "senate",
            score2024: 100,
            lifetimeScore: 99,
            photoUrl: "https://mgaleg.maryland.gov/2023RS/images/rosapepe01.jpg",
            email: "",
            votes: {
            "HB990": true,
            "HB864": true,
            "HB397/SB570": true,
            "SB783": null,
            "SB148/HB449": true,
            "SB480/HB585": true,
            "HB1101/SB0653": true,
            "HB1165/SB0969": true
            }
            },
            {
            id: 178,
            name: "Johnny Ray Salling",
            party: "R",
            district: "6",
            chamber: "senate",
            score2024: 50,
            lifetimeScore: 41,
            photoUrl: "https://mgaleg.maryland.gov/2023RS/images/salling01.jpg",
            email: "",
            votes: {
            "HB990": null,
            "HB864": false,
            "HB397/SB570": false,
            "SB783": true,
            "SB148/HB449": true,
            "SB480/HB585": true,
            "HB1101/SB0653": false,
            "HB1165/SB0969": null
            }
            },
            {
            id: 179,
            name: "Bryan W. Simonaire",
            party: "R",
            district: "31",
            chamber: "senate",
            score2024: 63,
            lifetimeScore: 58,
            photoUrl: "https://mgaleg.maryland.gov/2023RS/images/simonaire01.jpg",
            email: "",
            votes: {
            "HB990": false,
            "HB864": false,
            "HB397/SB570": true,
            "SB783": true,
            "SB148/HB449": true,
            "SB480/HB585": true,
            "HB1101/SB0653": false,
            "HB1165/SB0969": true
            }
            },
            {
            id: 180,
            name: "William C. Smith",
            party: "D",
            district: "20",
            chamber: "senate",
            score2024: 100,
            lifetimeScore: 98,
            photoUrl: "https://mgaleg.maryland.gov/2023RS/images/smith01.jpg",
            email: "",
            votes: {
            "HB990": true,
            "HB864": true,
            "HB397/SB570": true,
            "SB783": true,
            "SB148/HB449": true,
            "SB480/HB585": true,
            "HB1101/SB0653": true,
            "HB1165/SB0969": true
            }
            },
            {
            id: 181,
            name: "Charles E. Sydnor",
            party: "D",
            district: "44",
            chamber: "senate",
            score2024: 100,
            lifetimeScore: 98,
            photoUrl: "https://mgaleg.maryland.gov/2023RS/images/sydnor01.jpg",
            email: "",
            votes: {
            "HB990": true,
            "HB864": true,
            "HB397/SB570": true,
            "SB783": true,
            "SB148/HB449": true,
            "SB480/HB585": true,
            "HB1101/SB0653": true,
            "HB1165/SB0969": true
            }
            },
            {
            id: 182,
            name: "Jeff Waldstreicher",
            party: "D",
            district: "18",
            chamber: "senate",
            score2024: 100,
            lifetimeScore: 99,
            photoUrl: "https://mgaleg.maryland.gov/2023RS/images/waldstreicher01.jpg",
            email: "",
            votes: {
            "HB990": true,
            "HB864": true,
            "HB397/SB570": true,
            "SB783": true,
            "SB148/HB449": true,
            "SB480/HB585": true,
            "HB1101/SB0653": true,
            "HB1165/SB0969": true
            }
            },
            {
                id: 183,
                name: "Mary Washington",
                party: "D",
                district: "43",
                chamber: "senate",
                score2024: 100,
                lifetimeScore: 100,
                photoUrl: "https://mgaleg.maryland.gov/2023RS/images/washington01.jpg",
                email: "",
                votes: {
                "HB990": true,
                "HB864": true,
                "HB397/SB570": true,
                "SB783": true,
                "SB148/HB449": true,
                "SB480/HB585": true,
                "HB1101/SB0653": true,
                "HB1165/SB0969": true
                }
                },
                {
                id: 184,
                name: "Alonzo T. Washington",
                party: "D",
                district: "22",
                chamber: "senate",
                score2024: 100,
                lifetimeScore: 98,
                photoUrl: "https://mgaleg.maryland.gov/2023RS/images/washington-alonzo01.jpg",
                email: "",
                votes: {
                "HB990": true,
                "HB864": true,
                "HB397/SB570": true,
                "SB783": null,
                "SB148/HB449": true,
                "SB480/HB585": true,
                "HB1101/SB0653": true,
                "HB1165/SB0969": true
                }
                },
                {
                id: 185,
                name: "Ron Watson",
                party: "D",
                district: "23",
                chamber: "senate",
                score2024: 100,
                lifetimeScore: 98,
                photoUrl: "https://mgaleg.maryland.gov/2023RS/images/watson01.jpg",
                email: "",
                votes: {
                "HB990": true,
                "HB864": true,
                "HB397/SB570": true,
                "SB783": true,
                "SB148/HB449": true,
                "SB480/HB585": true,
                "HB1101/SB0653": true,
                "HB1165/SB0969": true
                }
                },
                {
                id: 186,
                name: "Chris West",
                party: "R",
                district: "42",
                chamber: "senate",
                score2024: 63,
                lifetimeScore: 78,
                photoUrl: "https://mgaleg.maryland.gov/2023RS/images/west01.jpg",
                email: "",
                votes: {
                "HB990": false,
                "HB864": null,
                "HB397/SB570": true,
                "SB783": true,
                "SB148/HB449": true,
                "SB480/HB585": true,
                "HB1101/SB0653": false,
                "HB1165/SB0969": true
                }
                },
                {
                id: 187,
                name: "Craig J. Zucker",
                party: "D",
                district: "14",
                chamber: "senate",
                score2024: 100,
                lifetimeScore: 99,
                photoUrl: "https://mgaleg.maryland.gov/2023RS/images/zucker01.jpg",
                email: "",
                votes: {
                "HB990": null,
                "HB864": true,
                "HB397/SB570": true,
                "SB783": true,
                "SB148/HB449": true,
                "SB480/HB585": true,
                "HB1101/SB0653": true,
                "HB1165/SB0969": null
                }
                }
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



function populateDropdowns() {
    console.log("Populating dropdowns");
    const chamberSelect = document.getElementById('chamber-select');
    const representativeSelect = document.getElementById('representative-select');
    const districtSelect = document.getElementById('district-select');

    if (!chamberSelect || !representativeSelect || !districtSelect) {
        console.error("One or more select elements not found");
        return;
    }

    updateRepresentativeOptions();
}

function updateRepresentativeOptions() {
    console.log("Updating representative options");
    const chamber = document.getElementById('chamber-select').value;
    const representativeSelect = document.getElementById('representative-select');
    const districtSelect = document.getElementById('district-select');

    const selectText = chamber === 'senate' ? 'Select Senator' : 'Select Representative';
    representativeSelect.innerHTML = `<option value="">${selectText}</option>`;
    districtSelect.innerHTML = '<option value="">Select District</option>';

    // Filter representatives by chamber
    let chamberReps = representatives.filter(rep => rep.chamber === chamber);

    // Extract and sort districts
    let districts = [...new Set(chamberReps.map(rep => rep.district))];
    districts.sort((a, b) => {
        const aMatch = a.match(/(\d+)([A-Z]*)/);
        const bMatch = b.match(/(\d+)([A-Z]*)/);
        const aNum = parseInt(aMatch[1]);
        const bNum = parseInt(bMatch[1]);
        if (aNum !== bNum) return aNum - bNum;
        return (aMatch[2] || '').localeCompare(bMatch[2] || '');
    });

    // Populate district dropdown
    districts.forEach(district => {
        const districtOption = document.createElement('option');
        districtOption.value = district;
        districtOption.textContent = district;
        districtSelect.appendChild(districtOption);
    });

    // Sort representatives by last name
    chamberReps.sort((a, b) => {
        const lastNameA = a.name.split(' ').pop();
        const lastNameB = b.name.split(' ').pop();
        return lastNameA.localeCompare(lastNameB);
    });

    // Populate representative dropdown
    chamberReps.forEach(rep => {
        const repOption = document.createElement('option');
        repOption.value = rep.id;
        repOption.textContent = `${rep.name} (${rep.district})`;
        representativeSelect.appendChild(repOption);
    });

    // Add event listeners to district and representative selects
    districtSelect.addEventListener('change', () => {
        const selectedDistrict = districtSelect.value;
        const rep = chamberReps.find(r => r.district === selectedDistrict);
        if (rep) {
            representativeSelect.value = rep.id;
            selectRepresentative();
        }
    });

    representativeSelect.addEventListener('change', () => {
        const selectedRepId = representativeSelect.value;
        const rep = chamberReps.find(r => r.id === parseInt(selectedRepId));
        if (rep) {
            districtSelect.value = rep.district;
            selectDistrict();
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
                <a href="#" class="email-button">Email Your Legislator</a>
            </div>
        </div>
        <div class="bills-container"></div>
    `;
}

function selectRepresentative() {
    const repId = document.getElementById('representative-select').value;
    if (repId) {
        const representative = representatives.find(r => r.id === parseInt(repId));
        if (representative) {
            clearWelcomeScreen();
            displayRepresentativeInfo(representative);
        }
    }
}

function selectDistrict() {
    const repId = document.getElementById('district-select').value;
    if (repId) {
        const representative = representatives.find(r => r.district === repId);
        if (representative) {
            clearWelcomeScreen();
            displayRepresentativeInfo(representative);
        }
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
        messageText = `Your ${title} met us halfway this legislative session. Let them know to keep voting for Maryland's environment!`;
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
    console.log("Displaying welcome screen");
    const container = document.querySelector('.delegate-info');
    if (!container) {
        console.error("Delegate info container not found");
        return;
    }
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
    console.log("DOM fully loaded");
    populateDropdowns();
    displayWelcomeScreen();

    const chamberSelect = document.getElementById('chamber-select');
    if (chamberSelect) {
        chamberSelect.addEventListener('change', updateRepresentativeOptions);
    } else {
        console.error("Chamber select not found");
    }

    const representativeSelect = document.getElementById('representative-select');
    if (representativeSelect) {
        representativeSelect.addEventListener('change', selectRepresentative);
    } else {
        console.error("Representative select not found");
    }

    const districtSelect = document.getElementById('district-select');
    if (districtSelect) {
        districtSelect.addEventListener('change', selectDistrict);
    } else {
        console.error("District select not found");
    }
});
