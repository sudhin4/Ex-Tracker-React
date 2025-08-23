import ExpenseBarChart from "./LineChart";
import ExpensePieChart from "./Piechart";
import "./Charsectionstyle.css";
import { useEffect, useState } from "react";
import { Endpoints } from "../../../Api";
import axios from "axios";
import LoginDirectComponent from "../../Pages/LoginDirectPage/LoginDirectComponent";
import Loadinganimation from "../LoadingPage/LodingPage";

function FullchartSection() {
  const [isclick, setclick] = useState("I");
  const [isincomevalue, setincomevalue] = useState([]);
  const [isexpansevalue, setexpansevalue] = useState([]);
  const [issuccess, setsuccess] = useState();
  const [Loading, setloading] = useState(true);

  const api = Endpoints.Piechartvalue;

  async function gettingvaluefromapi() {
    try {
      setloading(true);
      const response = await axios.get(api, { withCredentials: true });
      setsuccess(response.data.success);
      setincomevalue(response.data.Incomepiechartvalue);
      setexpansevalue(response.data.Expnasepiechartvalue);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setloading(false);
      }, 2000);
    }
  }

  useEffect(() => {
    gettingvaluefromapi();
  }, []);

  return (
    <div>
      {Loading ? (
        <Loadinganimation />
      ) : (
        <div>
          {issuccess ? (
            <>
              <div className="Incomeandexpansebuttondiv">
                <button
                  className={
                    isclick == "I"
                      ? "IncomeButtonChart buttonfullcharttt"
                      : " IncomeButtonChartclick buttonfullcharttt"
                  }
                  onClick={() => setclick("I")}
                >
                  Income
                </button>
                <button
                  className={
                    isclick == "E"
                      ? "ExpanseButtonChart buttonfullcharttt"
                      : "ExpansebuttonChartclick buttonfullcharttt"
                  }
                  onClick={() => setclick("E")}
                >
                  Expanse
                </button>
              </div>
              <div className="fullsectionbarchart">
                <ExpensePieChart
                  valueincome={isincomevalue}
                  valueexpanse={isexpansevalue}
                  clicking={isclick}
                />
                <ExpenseBarChart />
              </div>{" "}
            </>
          ) : (
            <div>
              <LoginDirectComponent />
            </div>
          )}{" "}
        </div>
      )}
    </div>
  );
}
export default FullchartSection;
