import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const CropReportChart = ({ formData }) => {
    const topCrops = formData
        .sort((a, b) => b.daysSincePlanting - a.daysSincePlanting)
        .slice(0, 5);

    const labels = topCrops.map(crop => crop.cropName);
    const estimatedYields = topCrops.map(crop => crop.estimatedYield);
    const actualYields = topCrops.map(crop => crop.actualYield || 0);
    const daysSincePlanting = topCrops.map(crop => crop.daysSincePlanting);

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Estimated Yield',
                data: estimatedYields,
                backgroundColor: '#4ade80',
            },
            {
                label: 'Actual Yield',
                data: actualYields,
                backgroundColor: '#f87171',
            },
            {
                label: 'Days Since Planting',
                data: daysSincePlanting,
                backgroundColor: '#60a5fa',
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, // Allow height adjustments
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `${context.dataset.label}: ${context.raw}`;
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    font: {
                        size: 12, // Reduce y-axis label font size
                    }
                }
            },
            x: {
                ticks: {
                    font: {
                        size: 12, // Reduce x-axis label font size
                    },
                    autoSkip: true, // Automatically skip some labels if crowded
                    maxTicksLimit: 5, // Limit the number of ticks
                }
            },
        },
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-4 sm:p-0 sm:shadow-none bg-white rounded-lg shadow-md">
            <h2 className="text-2xl sm:text-lg font-semibold text-center mb-4">Crop Performance</h2>
            <p className="text-center text-gray-600 mb-6 sm:text-xs">This chart shows the estimated yield vs. actual yield and days since planting for the top 5 crops.</p>
            <div style={{ height: '300px', position: 'relative' }}> {/* Set a minimum height */}
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default CropReportChart;



export const CropReportChart2 = ({ formData }) => {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Estimated Yield',
                data: [],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
            {
                label: 'Actual Yield',
                data: [],
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
            },
        ],
    });

    useEffect(() => {
        // Set chart data based on formData
        const labels = [formData.cropName || 'No crop'];
        const estimatedYield = [formData.estimatedYield || 0];
        const actualYield = [formData.actualYield || 0];

        setChartData({
            labels,
            datasets: [
                {
                    label: 'Estimated Yield',
                    data: estimatedYield,
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                },
                {
                    label: 'Actual Yield',
                    data: actualYield,
                    backgroundColor: 'rgba(153, 102, 255, 0.6)',
                },
            ],
        });
    }, [formData]);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `${context.dataset.label}: ${context.raw}`;
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    font: {
                        size: 12, // Reduce y-axis label font size
                    }
                }
            },
            x: {
                ticks: {
                    font: {
                        size: 12, // Reduce x-axis label font size
                    },
                    autoSkip: true, // Automatically skip some labels if crowded
                    maxTicksLimit: 5, // Limit the number of ticks
                }
            },
        },
    };

    return (
        <div className="w-full max-w-md mx-auto p-4 sm:p-0 sm:shadow-none bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4 text-center">Crop Yield Report</h2>
            <div style={{ height: '300px', position: 'relative' }}> {/* Set a minimum height */}
                <Bar data={chartData} options={options} />
            </div>
        </div>
    );
};

