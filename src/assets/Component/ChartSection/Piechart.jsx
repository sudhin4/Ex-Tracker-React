import React, { useContext, useEffect, useState } from "react";
import { ResponsivePie } from "@nivo/pie";
import "./Chartstyle.css";
import { Islogin } from "../../../Data/Context";

export default function ExpensePieChart({
  valueincome,
  valueexpanse,
  clicking,
}) {
  const [data, setdata] = useState([]);
  const { incometotalvalue, expansetotalvalue } = useContext(Islogin);
  const [istotal, settotal] = useState();

  useEffect(() => {
    if (clicking == "I") {
      setdata(valueincome);
      settotal(incometotalvalue);
    } else if (clicking == "E") {
      setdata(valueexpanse);
      settotal(expansetotalvalue);
    }
  }, [clicking]);

  return (
    <div className="pie-card">
      <h2 className="pie-title">This Month Transactions</h2>
      <div className="pie-container">
        <ResponsivePie
          data={data}
          margin={{ top: 20, right: 20, bottom: 60, left: 20 }}
          innerRadius={0.6}
          padAngle={0.6}
          cornerRadius={5}
          activeOuterRadiusOffset={10}
          colors={{ scheme: "category10" }}
          borderWidth={0}
          arcLabelsTextColor={"white"}
          borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
          theme={{
            labels: {
              text: {
                fontFamily: "Inter",
                fontSize: "15px",
                fontWeight: "500",
                color: "white",
              },
            },
          }}
          enableArcLinkLabels={false}
        />
        <div className="amountandtotalheadingINchart">
          <h2 className="TotalPriceInchart">Total</h2>
          <h2
            className={
              clicking == "I"
                ? "pie-title_bottom_income piechartpriceheading"
                : "pie-title_bottom_expanses piechartpriceheading"
            }
          >
            ₹{istotal?.toLocaleString("en-IN")}{" "}
          </h2>
        </div>
      </div>
    </div>
  );
}
