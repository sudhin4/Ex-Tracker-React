import { ResponsiveBar } from "@nivo/bar";
import "./Linechart.css";

const data = [
  { month: "Jan", Income: 600, },
  { month: "Feb", Income: 700,  },
  { month: "Mar", Income: 650,  },
  { month: "Apr", Income: 800,  },
  { month: "May", Income: 900, },
//   { month: "june", Income: 900, Expense: 350 },
//   { month: "july", Income: 900, Expense: 350 },
//   { month: "aug", Income: 900, Expense: 350 },
//   { month: "sep", Income: 900, Expense: 350 },
//   { month: "oct", Income: 900, Expense: 350 },
//   { month: "Nov", Income: 900, Expense: 350 },
//   { month: "Dec", Income: 900, Expense: 350 },

];

export default function ExpenseBarChart() {
  return (
    <div className="bar-chart">
        <h2 className="Bar_heading">Income & Expanse</h2>
      <ResponsiveBar
        data={data}
        keys={["Income", "Expense"]}
        indexBy="month"
        margin={{ top: 50, right: 10, bottom: 60, left: 40 }}
        padding={0.4}
        borderRadius={0.9}
        
         valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={[ 'rgba(9, 197, 9, 1)' , "rgba(230, 30, 23, 1)"]}

        borderColor={{ from: "color", modifiers: [["darker", 2.6]] }}
        axisTop={null}
        axisRight={null}
        enableLabel={false}
        axisBottom={{
          tickSize: 1,
          tickPadding: 1,
          legend: "Months",
          legendPosition: "middle",
          legendOffset: 36,
        }}
        axisLeft={{
          tickSize: 1,
          tickPadding: 2,
          legend: "Amount",
          legendPosition: "middle",
          legendOffset: -50,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor="#ffffffff"
        
        role="application"
      />
    </div>
  );
}
