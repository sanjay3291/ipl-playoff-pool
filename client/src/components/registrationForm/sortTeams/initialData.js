import cskLogo from "./images/chennai_super_kings_logo.png";
import dcLogo from "./images/delhi_capitals_logo.png";
import kkrLogo from "./images/kolkata_knight_riders_logo.jpg";
import pbksLogo from "./images/punjab_kings_logo.png";
import miLogo from "./images/mumbai_indians_logo.png";
import rcbLogo from "./images/royal_challengers_bangalore_logo.png";
import rrLogo from "./images/rajasthan_royals_Logo.png";
import srhLogo from "./images/sunrisers_hyderabad.png";

const initialData = {
  teams: {
    "team-1": {
      id: "team-1",
      content: "Chennai Super Kings",
      key: "CSK",
      image: cskLogo,
    },
    "team-2": {
      id: "team-2",
      content: "Delhi Capitals",
      key: "DC",
      image: dcLogo,
    },
    "team-3": {
      id: "team-3",
      content: "Kolkata Knight Riders",
      key: "KKR",
      image: kkrLogo,
    },
    "team-4": {
      id: "team-4",
      content: "Punjab Kings",
      key: "PBKS",
      image: pbksLogo,
    },
    "team-5": {
      id: "team-5",
      content: "Mumbai Indians",
      key: "MI",
      image: miLogo,
    },
    "team-6": {
      id: "team-6",
      content: "Royal Challengers Bangalore",
      key: "RCB",
      image: rcbLogo,
    },
    "team-7": {
      id: "team-7",
      content: "Rajasthan Royals",
      key: "RR",
      image: rrLogo,
    },
    "team-8": {
      id: "team-8",
      content: "Sunrisers Hyderabad",
      key: "SRH",
      image: srhLogo,
    },
  },
  columns: {
    teamColumn: {
      id: "teamColumn",
      title: "Pick your order",
      explanation:
        "First team in the list gets assigned 8 points and last team gets 1 point.",
      teamIds: [
        "team-1",
        "team-2",
        "team-3",
        "team-4",
        "team-5",
        "team-6",
        "team-7",
        "team-8",
      ],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ["teamColumn"],
};

export default initialData;
