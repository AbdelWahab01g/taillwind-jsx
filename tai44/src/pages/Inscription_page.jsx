import React from "react";

const InscriptionPage = () => {
    // Sample data
    const data = [
        {
        id: 1,
        fullName: "John Doe",
        birthday: "1990-05-15",
        number: "123-456-7890",
        email: "john.doe@example.com",
        },
        {
        id: 2,
        fullName: "Jane Smith",
        birthday: "1985-08-25",
        number: "987-654-3210",
        email: "jane.smith@example.com",
        },
        {
        id: 3,
        fullName: "Alice Johnson",
        birthday: "1995-12-30",
        number: "555-555-5555",
        email: "alice.johnson@example.com",
        },
    ];

    const handleAccept = (id) => {
        console.log(`Accepted: ${id}`);
        // Add your logic here
    };

    const handleRefuse = (id) => {
        console.log(`Refused: ${id}`);
        // Add your logic here
    };

    return (
        <>
            <div className="p-4">
            <h1 className="text-4xl font-extrabold text-[#003561] mb-8 text-left">Inscription List</h1>
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
                <thead>
                <tr className="bg-[#003561] text-white">
                    <th className="py-2 px-4 border-b">Num</th>
                    <th className="py-2 px-4 border-b">Full Name</th>
                    <th className="py-2 px-4 border-b">Birthday</th>
                    <th className="py-2 px-4 border-b">Number</th>
                    <th className="py-2 px-4 border-b">Email</th>
                    <th className="py-2 px-4 border-b">Actions</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={item.id} className="hover:bg-gray-200">
                    <td className="py-2 px-4 border-b">{index + 1}</td>
                    <td className="py-2 px-4 border-b">{item.fullName}</td>
                    <td className="py-2 px-4 border-b">{item.birthday}</td>
                    <td className="py-2 px-4 border-b">{item.number}</td>
                    <td className="py-2 px-4 border-b">{item.email}</td>
                    <td className="py-2 px-4 border-b">
                        <button
                        onClick={() => handleAccept(item.id)}
                        className="bg-green-500 text-white px-3 py-1 rounded mr-2 hover:bg-green-600 transition duration-200"
                        >
                        Accept
                        </button>
                        <button
                        onClick={() => handleRefuse(item.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-200"
                        >
                        Refuse
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </>
    );
};

export default InscriptionPage;
