import React from "react";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <div>
      <div className="bg-base-200 p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-3">
          <div className="text-center w-[300px] lg:w-full">
            <h1 className="text-5xl font-bold">- Contact Me -</h1>
            <p className="py-6">
              Thank you for your interest in contacting me. You can reach me via
              email at venu2699@gmail.com . Please feel free to send me a
              message with any questions or inquiries you may have. Whether you
              are looking to collaborate on a project, discuss potential job
              opportunities, or simply want to connect, I am always open to
              hearing from fellow professionals and enthusiasts in the field of
              blockchain and decentralized applications. I look forward to
              connecting with you and exploring how we can work together. Please
              do not hesitate to reach out and I will respond as soon as
              possible. Thank you again for considering me as a resource.
            </p>
          </div>
          <div className="w-[300px] lg:w-full flex flex-col justify-center items-center">
            {/* <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
  </div> */}

            <form className="Form">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                palaceholder="Enter your email"
                required
              />

              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                required
              />

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
