import cskLogo from "./images/chennai_super_kings_logo.png";
import dcLogo from "./images/delhi_capitals_logo.png";
import gtLogo from "./images/gujarat_titans_logo.jpg";
import kkrLogo from "./images/kolkata_knight_riders_logo.jpg";
import lsgLogo from "./images/lucknow_super_giants_logo.jpg";
import miLogo from "./images/mumbai_indians_logo.png";
import pbksLogo from "./images/punjab_kings_logo.png";
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
      content: "Gujarat Titans",
      key: "GT",
      image: gtLogo,
    },
    "team-4": {
      id: "team-4",
      content: "Kolkata Knight Riders",
      key: "KKR",
      image: kkrLogo,
    },
    "team-5": {
      id: "team-5",
      content: "Lucknow Super Giants",
      key: "LSG",
      image: lsgLogo,
    },
    "team-6": {
      id: "team-6",
      content: "Mumbai Indians",
      key: "MI",
      image: miLogo,
    },
    "team-7": {
      id: "team-7",
      content: "Punjab Kings",
      key: "PBKS",
      image: pbksLogo,
    },
    "team-8": {
      id: "team-8",
      content: "Royal Challengers Bangalore",
      key: "RCB",
      image: rcbLogo,
    },
    "team-9": {
      id: "team-9",
      content: "Rajasthan Royals",
      key: "RR",
      image: rrLogo,
    },
    "team-10": {
      id: "team-10",
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
        "First team in the list gets assigned 10 points and last team gets 1 point.",
      teamIds: [
        "team-1",
        "team-2",
        "team-3",
        "team-4",
        "team-5",
        "team-6",
        "team-7",
        "team-8",
        "team-9",
        "team-10"
      ],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ["teamColumn"],
};

export default initialData;
