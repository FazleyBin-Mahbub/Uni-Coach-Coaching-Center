import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
const AddBlogs = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:9000/blogs", data).then((res) => {
      if (res.data.insertedId) {
        reset();
      }
    });
  };
  return (
    <div className="mt-5 pt-5 ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Name" />
        <br />
        <input type="text" {...register("date")} placeholder="date" />
        <br />
        <input {...register("img")} placeholder="image-url" /> <br />
        <input {...register("comments")} placeholder="comments" /> <br />
        <input {...register("instructor")} placeholder="instructor" /> <br />
        <input {...register("tag")} placeholder="Tag" /> <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddBlogs;
