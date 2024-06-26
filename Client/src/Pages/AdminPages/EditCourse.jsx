import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router";

const EditCourse = () => {
  const navigate = useNavigate();
  const [fetchedcourse, setFetchedCourse] = useState();
  const {
    handleSubmit,
    register,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const { _id } = useParams();

  useEffect(() => {
    const GetCoureseDetails = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/v1/Course/ReadOne/${_id}`,
          {
            withCredentials: true,
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        setFetchedCourse(res.data?.data);
      } catch (error) {
        console.log(error);
      }
    };
    GetCoureseDetails();
  }, []);
  useEffect(() => {
    if (fetchedcourse) {
      // Destructure fetchedCourse or trigger other actions
      const { Name, CourseId, Price, Duration, Thumbnail, StudyMaterial, Level, Description } = fetchedcourse;
      ("Setting Name:", setValue("Name", Name));
      setValue("CourseId", CourseId);
      setValue("Price", Price);
      setValue("Duration", Duration);
      setValue("Thumbnail", Thumbnail);
      setValue("StudyMaterial", StudyMaterial);
      setValue("Level", Level);
      setValue("Description", Description);
    }
  }, [fetchedcourse]);

  function findChangedKeys(obj1, obj2) {
    const changedKeys = {};
    console.log("clicked2" + obj1 + obj2)
    for (const key in obj1) {
      if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
        if (obj1[key] !== obj2[key]) {
          changedKeys[key] = obj1[key];
        }
      }
    }
    return changedKeys;
  }

  const editCourse = async (data) => {
   console.log("clicked" + data)

    const formData = new FormData();
    const updatedFields = findChangedKeys(data, fetchedcourse);
    
    delete updatedFields.StudyMaterial;

    console.log(updatedFields);

   Object.keys(updatedFields).forEach((key)=>{
    if(key === "Thumbnail"){
      formData.append(key,updatedFields[key][0])
    }else{
      formData.append(key,updatedFields[key]);
    }
   
   })
    
    console.log(formData)
    try {
      const res = await axios.patch(
        `http://localhost:8000/api/v1/Course/UpdateCourse/${_id}`,
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log(res);
      if (res.status === 200) {
        toast.success("Course has been updated");
        reset();
        navigate("/CourseList");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border-2 flex  w-3/5 ml-5 rounded-xl bg-neutral-900 text-white">
      <div className="flex flex-col ">
        <legend className="text-center text-3xl p-2 my-2 font-bold">
          Edit Course
        </legend>
        {fetchedcourse && (
 <form
 className="flex flex-wrap my-12 mx-20 justify-center max-sm:mx-auto p-1"
 onSubmit={handleSubmit(editCourse)}
 encType="multipart/form-data"
>
 <label className="block mb-5 w-1/2 text-xl max-sm:w-full " htmlFor="">
   Name :
   <input
     type="text"
     className="block bg-neutral-800 text-neutral-300  mt-1  p-1 rounded-lg w-2/3"
     {...register("Name", { required: true })}
   />
 </label>

 <label className="block mb-5 text-xl w-1/2 max-sm:w-full">
   CourseId :
   <input
     type="text"
     className="block border bg-neutral-800 text-neutral-300  mt-1  p-1 rounded-lg w-2/3"
     {...register("CourseId", { required: true })}
   />
 </label>

 <label className="block mb-5 text-xl w-1/2 max-sm:w-full">
   Price
   <input
     type="text"
     className="block border bg-neutral-800 text-neutral-300 mt-1 p-1 rounded-lg w-2/3"
     {...register("Price", { required: true })}
   />
 </label>

 <label className="block mb-5 text-xl w-1/2 max-sm:w-full" htmlFor="">
   Duration :
   <input
     type="text"
     className="block border bg-neutral-800 text-neutral-300 mt-1 w-2/3  p-1 rounded-lg"
     {...register("Duration")}
   />
 </label>

 <label className="block mb-5 text-xl w-1/2 max-sm:w-full" htmlFor="">
   Thumbnail :
   <input
     type="File"
     className="block border bg-neutral-800 text-neutral-300 mt-1 w-2/3  p-1 rounded-lg"
     {...register("Thumbnail")}// { required: true }
   />
 </label>

 <label className="block mb-5 text-xl w-1/2 max-sm:w-full" htmlFor="">
   Files/pdf :
   <input
     type="File"
     className="block border bg-neutral-800 text-neutral-300 mt-1 w-2/3  p-1 rounded-lg"
     {...register("StudyMaterial")}
     multiple
   />
 </label>
 <label className="mb-5 block text-xl w-1/2 max-sm:w-full">
   Select Level :
   <select
     name="level"
     id=""
     {...register("Level")}
     className=" mt-1 block w-2/3 p-1 rounded-lg bg-neutral-800 text-neutral-300"
   >
     <option value="Beginner">Beginner</option>
     <option value="Intermediate">Intermediate</option>
     <option value="Advance">Advance</option>
   </select>
 </label>

 <label className="block mb-12 text-xl w-1/2 max-sm:w-full" htmlFor="discription">
   Discription :
   <textarea
     name="Description"
     id="Description"
     cols="3"
     rows="3"
     className="block border  mt-1 w-2/3  p-1 rounded-lg bg-neutral-800 text-neutral-300"
     {...register("Description", { required: true })}
   ></textarea>
 </label>
 <input
   type="submit"
   className="border m-2 text-xl  rounded-xl bg-blue-500 p-2 w-1/3 max-sm:w-full"
 />
</form>
)}
      </div>
    </div>
  );
};

export default EditCourse;
