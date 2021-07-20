import LegendItem from "./LegendItem";

const legendItems = [
  new LegendItem(
    "1,000,000+",
    "#C82538",
    (cases) => cases >= 1_000_000,
    "#ffffff"
  ),
  new LegendItem(
    "5,00,000 - 9,99,999",
    "#B13433",
    (cases) => cases >= 5_00_000 && cases <= 9_99_999,
    "#ffffff"
  ),
  new LegendItem(
    "2,00,000 - 4,99,999",
    "#8D472B",
    (cases) => cases >= 2_00_000 && cases <= 4_99_999,
    "#ffffff"
  ),
  new LegendItem(
    "50,000 - 1,99,999",
    "#675E24",
    (cases) => cases >= 50_000 && cases <= 1_99_999,    
  ),
  new LegendItem(
    "0 - 49,999",
    "#45731E",
    (cases) => cases >= 0 && cases <= 49_999,    
  ),
  new LegendItem(
    "No Data",
    "#2E7F18",
    (cases) => true,    
  ),
];


export default legendItems;
