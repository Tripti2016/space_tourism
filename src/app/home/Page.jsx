import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      <div className="home">
        <div className="grid-container">
          <div>
            <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
              {" "}
              So, you want to travel to
              <span className="text-white ff-serif fs-900 "> Space</span>
            </h1>{" "}
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="explore-btn">
            <Link
              href="/destination"
              className="large-btn uppercase ff-serif fs-600 text-dark bg-white"
            >
              Explore
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
