import React from 'react';

const Table = () => {
    const columns = ['Name', 'Email', 'Role', 'Status'];
    const data = [
        { name: 'John Doe', email: 'johndoe@example.com', role: 'Admin', status: 'Active' },
        { name: 'Jane Smith', email: 'janesmith@example.com', role: 'Editor', status: 'Inactive' },
        { name: 'Alice Johnson', email: 'alicejohnson@example.com', role: 'Contributor', status: 'Active' },
    ];

    return (
        <table className="">
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th
                            key={column}
                            className=""
                        >
                            {column}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex} className="hover:bg-gray-100 row">
                        <td className="py-4 px-6 border-b">{row.name}</td>
                        <td className="py-4 px-6 border-b">{row.email}</td>
                        <td className="py-4 px-6 border-b">{row.role}</td>
                        <td className="py-4 px-6 border-b">
                            <span className={row.status === 'Active' ? 'text-green-500 font-semibold' : 'text-red-500 font-semibold'}>
                                {row.status}
                            </span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
