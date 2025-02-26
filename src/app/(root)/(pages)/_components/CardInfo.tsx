'use client'
import { useEffect, useState } from "react";
interface CardInfoProps {
    budgetList: any[];
    incomeList: any[];
}

const CardInfo = ({budgetList, incomeList}: CardInfoProps) => {
    const [totalBudget, setTotalBudget] = useState(0);
    const [totalSpend, setTotalSpend] = useState(0);
    const [totalIncome, setTotalIncome] = useState(0);
    const [financialAdvice, setFinancialAdvice] = useState("");

    const CalculateCardInfo = () => {
        let totalBudget_temp = 0;
        let totalSpend_temp = 0;
        let totalIncome_temp = 0;

        // Calculate total budget and spend
        budgetList.forEach((budget) => {
            totalBudget_temp = totalBudget_temp + Number(budget.amount);
            totalSpend_temp += totalSpend_temp + budget.spend;
        });
        // Calculate total income
        incomeList.forEach((income) => {
            totalIncome_temp = totalIncome_temp + Number(income.amount);
            totalSpend_temp += totalSpend_temp + income.spend;
        });
        // Set the state with the calculated values
        setTotalBudget(totalBudget_temp);
        setTotalSpend(totalSpend_temp);
        setTotalIncome(totalIncome_temp);
        // Set financial advice based on the calculated values
        if(totalIncome_temp > totalSpend_temp){
            setFinancialAdvice("You are doing great! Keep saving");
            return;
    }

    useEffect(() => {
        if(budgetList.length > 0 || incomeList.length > 0){
            // Calculate total budget and spend
        }
    }, [budgetList, incomeList]);

  return (
    <div>CardInfo</div>
  )
}

export default CardInfo