'use client';

import { useState } from "react";

interface User {
    name: string;
    email: string;
    address: {
      street: string;
      city: string;
    };
  }

export default function SearchBar(users : User[]){
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

    
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);
        const users_array = Object.entries(users).map(([key, value]) => ({
            id: parseInt(key, 10), // Convert key to an integer
            ...value
          }));

        if(searchQuery.length > 0){
            const newUsers = users_array.filter((user: User) => user.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
            setFilteredUsers(newUsers);
        } else {
            setFilteredUsers(users_array);
        }
        console.log(filteredUsers);
    }


    return (
        <div className="bg-white border border-gray-500 p-4 rounded-lg m-4">
            <input 
            className="w-full rounded-md" 
            type="text" 
            placeholder="search user" 
            onChange={handleSearchChange} 
            />
        </div>
    );
}