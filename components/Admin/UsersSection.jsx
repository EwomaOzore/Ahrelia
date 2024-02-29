'use client'

import React, { useState, useEffect } from 'react';

const UsersSection = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        fetch('http://127.0.0.1:5000/api/auth/all')
            .then((response) => response.json())
            .then((data) => {
                console.log('Received user data:', data);

                if (Array.isArray(data.user)) {
                    setUsers(data.user);
                } else {
                    console.error('Invalid data structure. Expected an array of users.');
                }
            })
            .catch((error) => console.error('Error fetching users:', error));
    };

    const handleDeleteReview = (userId) => {
        fetch(`http://127.0.0.1:5000/api/auth/deleteUser`, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('User deleted successfully:', data);
                setReviews(users.filter((user) => user._id !== userId));
            })
            .catch((error) => console.error('Error deleting user:', error));
    };

    return (
        <section>
            <h2 className="text-2xl font-semibold mb-4">Manage Users</h2>
            {users.map((user) => (
                <div key={user._id} className="flex items-center text-center justify-between bg-white w-[100%] p-4 mb-4 mr-10 rounded-md">
                    <p>{user.username}</p>
                    <p>{user.role}</p>
                    <div>
                        <button
                            className="bg-blue-500 text-white px-3 py-1 mr-2"
                        // onClick={handleAddReview}
                        >
                            Add
                        </button>
                        <button
                            className="bg-red-500 text-white px-3 py-1"
                            onClick={() => handleDeleteReview(user._id)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default UsersSection;
