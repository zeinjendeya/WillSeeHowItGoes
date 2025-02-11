"use client";

import { useState, useEffect } from "react";
import { SearchBar } from "../elements/searchbar";
import UserCard from "../elements/user-card";
import CardsContainer from "./cards-container";

interface User {
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
}

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      setUsers(users);
    };

    fetchUsers();
  }, []);
  return (
    <>
      <SearchBar users={users} setFilteredUsers={setFilteredUsers} />
      <CardsContainer>
        <UserCard users={filteredUsers} />
      </CardsContainer>
    </>
  );
}
