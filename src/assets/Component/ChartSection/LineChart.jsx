import { ResponsiveBar } from "@nivo/bar";
import "./Linechart.css";
import { Endpoints } from "../../../Api";
import { useEffect, useState } from "react";
import axios from 'axios'

const data = [
  { month: "Jan", Income: 600, },
  { month: "Feb", Income: 700,  },
  { month: "Mar", Income: 650,  },
  { month: "Apr", Income: 800,  },
  { month: "May", Income: 900, },


];

export default function ExpenseBarChart({isincomeorexpanse}) {
  const clickingvalue = isincomeorexpanse
  console.log(clickingvalue,"The value")
  const Api = Endpoints.Linechartsection;

  const [ischartvalue,setchartvalue] = useState([])
  const [ischartdatevalue,setchartdatevalue] = useState([]);

  useEffect( ()=>{
   async function gettingvaluechart(){
      const response = await axios.get(Api,{withCredentials:true})
      console.log(response,"The chart response");
    if(clickingvalue=="I"){
      setchartvalue(response.data.LinechartMonthwise);
    setchartdatevalue(response.data.LinechartDatewise)
    }else if(clickingvalue=="E"){
      setchartvalue(response.data.LinechartExpanse);
    setchartdatevalue(response.data.LinechartexpanseDatewise)
    }
    
    }
    gettingvaluechart();
    
  },[clickingvalue])

  console.log(ischartvalue,"The chartvalu")

  


  return (
    <>
    <div className="bar-chart">
        <h2 className="Bar_heading">Income & Expanse</h2>

        
        {ischartvalue? <ResponsiveBar
        data={ischartdatevalue}
        keys={["Income", "Expense"]}
        indexBy="month"
        margin={{ top: 50, right: 10, bottom: 60, left: 40 }}
        padding={0.4}
        borderRadius={0.9}
        
         valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        
        colors={(clickingvalue=="I" ?"rgba(26, 184, 26, 1)":"rgba(212, 34, 34, 1)")}

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
      />:<div>No value</div>}
      
    </div>
    <button className="dailybased">Daily</button>
    </>
  );
}
