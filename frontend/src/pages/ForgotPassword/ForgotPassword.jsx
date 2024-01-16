import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      {" "}
      <div className="w-full max-w-md p-8 space-y-4">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Forgot Password</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your email address and we'll send you a link to reset your
            password.
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="m@example.com"
              required
              type="email"
            />
          </div>
          <Button className="w-full" type="submit">
            Reset Password
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Remember your password?
          <Link className="underline" to={"/signin"}>
            Sign In
          </Link>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
