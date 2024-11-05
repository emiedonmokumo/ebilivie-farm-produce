import React from 'react';
import { Link } from 'react-router-dom';

const Table = ({ columns, data }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full text-left shadow-xl border-collapse">
                <thead>
                    <tr className="bg-green-100 border-b">
                        {columns.map((column) => (
                            <th key={column} className="px-6 py-3 text-sm font-semibold text-gray-700">
                                {column}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className="hover:bg-green-50 hover:shadow-md transition-shadow duration-200"
                        >
                            <td className="px-6 py-4 text-sm text-gray-800 border-b">
                                <Link to={`/crop/${row.uid}`} className="hover:text-green-500">{row.cropName}</Link>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 border-b">
                                <Link to={`/crop/${row.uid}`} className="hover:text-green-500">{row.cropVariety}</Link>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 border-b">
                                <Link to={`/crop/${row.uid}`} className="hover:text-green-500">{row.growthStage}</Link>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 border-b">
                                <Link to={`/crop/${row.uid}`} className="hover:text-green-500">{row.estimatedYield}</Link>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 border-b">
                                <Link to={`/crop/${row.uid}`} className="hover:text-green-500">{row.actualYield}</Link>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 border-b">
                                <Link to={`/crop/${row.uid}`} className="hover:text-green-500">{row.expectedHarvestDate}</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
