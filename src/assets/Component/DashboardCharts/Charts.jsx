import { Chart as chartJS } from "chart.js/auto";
import "../DashboardCharts/Charts.css";
import { Bar, Doughnut,Line } from "react-chartjs-2";

function Charts() {
  return (
    <>
      <div className="whole_chart_component">
        <div className=" Barchart_divv   ">
          <Bar
            data={{
              labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
               
              ],
              datasets: [
                {
                  label: "Income",
                  data: [
                    45000, 30000, 70000, 60000, 
                  ],
                  backgroundColor:"rgba(0, 128, 0, 0.833)",
                  borderRadius:3,
                },
                {
                  label: "Expanse",
                  data: [
                    35000, 70000, 40000, 50000, 
                  ],
                  backgroundColor:"rgb(255, 0, 0)",
                  borderRadius:3,
                },

              ],
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Charts;
