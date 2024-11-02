import React from 'react';

const Table = () => {
    const columns = ['Name', 'Email', 'Role', 'Status'];
    const data = [
        { name: 'John Doe', email: 'johndoe@example.com', role: 'Admin', status: 'Active' },
        { name: 'Jane Smith', email: 'janesmith@example.com', role: 'Editor', status: 'Inactive' },
        { name: 'Alice Johnson', email: 'alicejohnson@example.com', role: 'Contributor', status: 'Active' },
    ];

    return (
        <div className='overflow-x-auto'>
            <table className="w-full text-left shadow-xl">
                <thead className=''>
                    <tr className='text-left'>
                        {columns.map((column) => (
                            <th
                                key={column}
                                className=""
                            >
                                {column}
                            </th>
                        ))}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className="hover:bg-gray-100 hover:shadow-sm hover:shadow-white">
                            <td className="py-4 pb-10">{row.name}</td>
                            <td className="py-4 pb-10">{row.email}</td>
                            <td className="py-4 pb-10">{row.role}</td>
                            <td className="py-4 pb-10">
                                <span className={row.status === 'Active' ? 'text-green-500 font-semibold' : 'text-red-500 font-semibold'}>
                                    {row.status}
                                </span>
                            </td>
                            <td className='py-4 pb-10'>
                                <button className='bg-[green] hover:bg-[darkGreen] text-[white] rounded-md p-3'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
