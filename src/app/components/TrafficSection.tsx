'use client';

import { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  ScriptableContext,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { ArrowUpRight, ArrowDownRight, TrendingUp } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

interface TrafficData {
  label: string;
  value: number;
}

interface TrafficSectionProps {
  trafficData: TrafficData[];
}

export default function TrafficSection({ trafficData }: TrafficSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const hMinus1 = trafficData[trafficData.length - 2]?.value ?? 0;
  const hMinus0 = trafficData[trafficData.length - 1]?.value ?? 0;

  const percentageDiff = ((hMinus0 - hMinus1) / (hMinus1 ? hMinus1 : 1)) * 100;
  const isPositive = percentageDiff >= 0;
  const isZero = percentageDiff === 0;
  const formattedPercentage = `${isPositive ? '+' : ''}${percentageDiff.toFixed(0)}%`;

  // Hitung Nilai Min, Max, dan Mid
  const dataValues = trafficData.map((d) => d.value);
  const maxValue = Math.max(...dataValues);
  const minValue = Math.floor(Math.min(...dataValues) * 0.85);
  const midValue = Math.round((minValue + maxValue) / 2);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollContainerRef.current.scrollWidth;
    }
  }, [trafficData]);

  const chartData = {
    labels: trafficData.map((d) => d.label),
    datasets: [
      {
        data: trafficData.map((d) => d.value),
        borderColor: '#ef4444', // Red-500
        borderWidth: 2.5,
        tension: 0.35,
        fill: true,
        clip: 0,
        backgroundColor: (context: ScriptableContext<'line'>) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 140);
          gradient.addColorStop(0, 'rgba(239, 68, 68, 0.3)'); // Merah transparan lebih pekat untuk efek glass
          gradient.addColorStop(1, 'rgba(239, 68, 68, 0.0)');
          return gradient;
        },
        pointBackgroundColor: (context: any) => {
          const index = context.dataIndex;
          return index === trafficData.length - 1 ? '#ef4444' : '#18181b';
        },
        pointBorderColor: '#ef4444',
        pointBorderWidth: 2,
        pointRadius: (context: any) => {
          const index = context.dataIndex;
          return index === trafficData.length - 1 ? 5 : 3.5;
        },
        pointHoverRadius: 6,
        pointHoverBackgroundColor: '#ef4444',
        pointHoverBorderColor: '#ffffff',
        pointHoverBorderWidth: 2,
      },
    ],
  };

  const customYScale = {
    min: minValue,
    max: maxValue,
    afterBuildTicks: (scale: any) => {
      scale.ticks = [
        { value: minValue },
        { value: midValue },
        { value: maxValue },
      ];
    },
  };

  const mainChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 12,
        bottom: 8,
        left: 12,
        right: 12,
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(15, 23, 42, 0.85)', // Tooltip frosted glass
        titleColor: '#f8fafc',
        bodyColor: '#ffffff',
        borderColor: 'rgba(255, 255, 255, 0.15)',
        borderWidth: 1,
        padding: { top: 6, bottom: 6, left: 10, right: 10 },
        displayColors: false,
        cornerRadius: 8,
        titleFont: { size: 0 },
        bodyFont: { size: 12, weight: 600 as const },
        callbacks: {
          label: (context: any) => `${context.parsed.y} Pengunjung`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: (ctx: any) =>
            ctx.index === trafficData.length - 1 ? '#ef4444' : '#9ca3af',
          font: {
            size: 14,
            weight: (ctx: any) =>
              ctx.index === trafficData.length - 1 ? 700 : 500,
          },
        },
      },
      y: {
        ...customYScale,
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
        border: { dash: [4, 4], display: false },
        ticks: { display: false },
      },
    },
  };

  const yAxisOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 12,
        bottom: 8,
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      x: {
        ticks: { display: false },
        grid: { display: false },
        border: { display: false },
      },
      y: {
        ...customYScale,
        border: { display: false },
        grid: { display: false },
        afterFit: (scaleInstance: any) => {
          scaleInstance.width = 36;
        },
        ticks: {
          color: '#9ca3af',
          font: { size: 14, weight: 500 as const },
          padding: 4,
        },
      },
    },
  };

  const emptyData = {
    labels: trafficData.map((d) => d.label),
    datasets: [{ data: [] }],
  };

  return (
    <section
      id="traffic"
      className="relative max-w-7xl mx-4 sm:mx-auto p-5 bg-white/5 backdrop-blur-[1px] border border-white/10 rounded-2xl shadow-xl shadow-red-500/5 mt-6"
    >
      {/* Glow Merah Samar di Belakang Card */}
      {/* <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/10 to-transparent rounded-2xl blur-lg -z-10 pointer-events-none" /> */}

      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div className="space-y-0.5">
          <div
            className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-red-500/10 border border-red-500/20 backdrop-blur-sm rounded-full text-[10px] font-semibold text-red-400"
            hidden
          >
            <TrendingUp className="w-3 h-3" />
            Live
          </div>
          <h2 className="text-lg sm:text-xl font-semibold text-white tracking-tight">
            {hMinus0.toLocaleString()} <span className="font-normal text-gray-300 text-base">Pengunjung Hari Ini</span>
          </h2>
        </div>

        {/* Badge Persentase */}
        <div
          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${isPositive
            ? !isZero
              ? 'bg-red-500/10 border-red-500/30 text-red-400'
              : 'bg-white/5 border-white/10 text-gray-300'
            : 'bg-rose-950/30 border-rose-800/40 text-rose-400'
            }`}
        >
          {isPositive ? (
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          ) : (
            <ArrowDownRight className="w-3.5 h-3.5 stroke-[2.5]" />
          )}
          <span>{formattedPercentage}</span>
        </div>
      </div>

      {/* Wrapper Utama Grafik & Skala */}
      <div className="relative flex w-full h-36">
        {/* Fixed Y-Axis Left (Dibuat transparan agar menyatu dengan efek Glass) */}
        <div className="w-9 h-full shrink-0 z-10 bg-transparent">
          <Line data={emptyData} options={yAxisOptions} />
        </div>

        {/* Scrollable Area Grafik */}
        <div
          ref={scrollContainerRef}
          className="w-full overflow-x-auto scrollbar-none touch-pan-x"
        >
          <div className="h-full min-w-[500px] sm:min-w-full">
            <Line data={chartData} options={mainChartOptions} />
          </div>
        </div>
      </div>
    </section>
  );
}