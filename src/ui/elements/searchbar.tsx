"use client";

import { useState } from "react";

interface User {
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
}

interface SearchBarProps {
  users: User[];
  setFilteredUsers: (users: User[]) => void;
}

export function SearchBar({ users, setFilteredUsers }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  const handleSearch = () => {
    const filteredUser = users.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredUsers(filteredUser);
  };

  return (
    <div className="bg-white border border-gray-500 flex flex-row-reverse p-4 gap-x-4 rounded-lg m-4">
      <input
        className="w-full rounded-md placeholder:text-right"
        type="text"
        placeholder="...اسم المستخدم"
        onChange={handleSearchChange}
      />
      <button
        type="button"
        onClick={handleSearch}
        className="w-56 bg-green-500 rounded-full text-white"
      >
        ابحث
      </button>
    </div>
  );
}
