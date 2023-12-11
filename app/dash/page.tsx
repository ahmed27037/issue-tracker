"use client";
import PieChart from "../components/PieChart";
import BarGraph from "../components/BarGraph";


export default function Home() {

  return (
        <div className='max-w-3xl border-4 rounded-2xl flex flex-col items-center space-y-20'>
          <PieChart />
          <BarGraph />
        </div>
  );
}