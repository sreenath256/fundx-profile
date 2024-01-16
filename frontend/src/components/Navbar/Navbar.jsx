import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import DarkModeToggler from "../DarkModeToggler/DarkModeToggler";

const Navbar = ({ isUser, setIsUser }) => {
  return (
    <>
      <header className="fixed top-0 left-0 flex h-16 w-full shrink-0 items-center px-4 md:px-6 dark:bg-gray-900">
        <Link className="mr-6 flex items-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="ml-2 text-lg font-semibold">
            <b>Fundx</b>
          </span>
        </Link>
        <div className="ml-auto flex gap-2">
          {!isUser ? (
            <>
              <Link to={"/signin"}>
                <Button variant="outline">Sign in</Button>
              </Link>
              <Link to={"/signup"}>
                <Button>Sign Up</Button>
              </Link>
            </>
          ) : (
            <>
              <div className="">
                <form className="relative">
                  <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                  <Input
                    className="pl-8"
                    id="search"
                    placeholder="Search..."
                    type="search"
                  />
                </form>
              </div>
              <Avatar className="h-9 w-9">
                <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
              <Button className="rounded-full" size="icon" variant="ghost">
                <LogOutIcon className="h-6 w-6" />
                <span className="sr-only">Logout</span>
              </Button>
            </>
          )}
          <DarkModeToggler />
        </div>
      </header>
    </>
  );
};

export default Navbar;

function LogOutIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
