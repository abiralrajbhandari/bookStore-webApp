import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="bg-zinc-900 flex h-screen items-center justify-center">
        <div className="w-[450px]">
          <div className="modal-box ">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-2xl">Contact us</h3>
              {/* NAME */}
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="name"
                  placeholder="Enter your full name"
                  className="w-full px-3 py-1 border rounded-md outline-none"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* EMAIL */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* MESSAGE */}
              <div className="mt-4 space-y-2">
                <span>Message</span>
                <br />
                <textarea
                  name="message"
                  className="w-full px-3 py-1 border rounded-md outline-none h-24"
                  placeholder="Enter your message"
                  {...register("email", { required: true })}
                ></textarea>
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              {/* Button */}
              <div className="flex mt-6">
                <button className=" bg-pink-500 text-white rounded-md px-4 py-1 hover:bg-pink-700 duration-200">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
