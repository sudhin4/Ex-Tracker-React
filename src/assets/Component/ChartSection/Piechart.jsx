import React from "react";
import { ResponsivePie } from "@nivo/pie";
import './Chartstyle.css'

const data = [
  { id: "Food", label: "Food", value: 400 },
  { id: "Transport", label: "Transport", value: 300 },
  { id: "Shopping", label: "Shopping", value: 300 },
  { id: "Bills", label: "Bills", value: 200 },
  { id: "Friend", label: "Friend", value: 200 },
  { id: "Book", label: "Book", value: 200 },
  { id: "Card", label: "Card", value: 200 },
  { id: "Main", label: "Main", value: 200 },
];

export default function ExpensePieChart() {
  return (
    <div className="pie-card">
      <h2 className="pie-title">This month Transaction</h2>
      <div className="pie-container">
        <ResponsivePie
          data={data}
          margin={{ top: 20, right: 20, bottom: 60, left: 20 }}
          innerRadius={0.4}
          padAngle={0.6}
          cornerRadius={5}
          activeOuterRadiusOffset={10}
          colors={{ scheme: "category10" }}
          borderWidth={0}
          arcLabelsTextColor={"white"}
          borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
          theme={{
            labels:{
                text:{
                    fontFamily:"Inter",
                    fontSize:"15px",
                    fontWeight:"500",
                    color:"white",
                    
                }
            }
          }}
            enableArcLinkLabels={false}
        //   legends={[
        //     {
        //       anchor: "bottom",
        //       direction: "row",
        //       translateY: 60,
        //       itemWidth: 70,
        //       itemHeight: 15,
        //       itemTextColor: "#000000ff",
        //       itemsSpacing:1,
        //       symbolSize: 10,
        //     },
        //   ]}
        />
        <h2 className="pie-title_bottom">Expanses  </h2>
      </div>
    </div>
  );
}
