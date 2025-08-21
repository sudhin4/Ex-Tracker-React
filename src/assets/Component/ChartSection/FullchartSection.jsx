import ExpenseBarChart from "./LineChart";
import ExpensePieChart from "./Piechart";

function FullchartSection(){
    return(
        <>
        <div className="fullsectionbarchart">
            <ExpensePieChart/>
            <ExpenseBarChart/>
        </div>
        </>
    )
}
export default FullchartSection;