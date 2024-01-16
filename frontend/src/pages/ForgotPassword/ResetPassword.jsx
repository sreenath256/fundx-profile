import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <>
      {" "}
      <div className="w-full max-w-md p-8 space-y-4">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Reset Password</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter new password.
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="********"
              required
              name="password"
              type="password"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmpassword">Confirm Password</Label>
            <Input
              id="confirmpassword"
              placeholder="********"
              required
              name="confirmpassword"
              type="password"
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

export default ResetPassword;
