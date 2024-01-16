import React from "react";
import { useQuery } from "react-query";
import axiosClient from "../../utils/axios";
import { Button } from "@/components/ui/button";

const Home = () => {
  const fetchDrops = async () => {
    // const token = localStorage.getItem('token'); // Retrieve the JWT token from localStorage
    // const headers = {
    //     Authorization: `Bearer ${token}`, // Include the token in the Authorization header
    // };
    // const response = await axiosClient.get('/drop', { headers });
    const response = await axiosClient.get("/");
    return response.data;
  };

  // const mutation = useMutation({
  //   mutationFn: postTodo,
  //   onSuccess: () => {
  //     // Invalidate and refetch
  //     queryClient.invalidateQueries({ queryKey: ["todos"] });
  //   },
  // });

  // <button
  //   onClick={() => {
  //     mutation.mutate({
  //       id: Date.now(),
  //       title: "Do Laundry",
  //     });
  //   }}
  // >
  //   Add Todo
  // </button>;

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["test"],
    queryFn: fetchDrops,
  });

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>An error has occurred: {error.message}</p>;

  return (
    <div className="">
      <Button>{data.msg}</Button>
    </div>
  );
};

export default Home;
