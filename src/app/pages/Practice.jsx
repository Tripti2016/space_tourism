import React from "react";

const Practice = () => {
  return (
    <div classNameName="container">
      <h1>Design system</h1>

      <section id="interactive-elements">
        <h2 className="numbered-title">
          <span>03</span> Interactive elements
        </h2>

        <div>
          <ul
            className="primary-navigation underline-indicator flex"
            style={{ "--gap": "8rem" }}
          >
            <li className="active">
              <a className="uppercase text-white letter-spacing-2" href="">
                <span>1</span>Active
              </a>
            </li>
            <li>
              <a className="uppercase text-white letter-spacing-2" href="">
                <span>2</span>Hovered
              </a>
            </li>
            <li>
              <a className="uppercase text-white letter-spacing-2" href="">
                <span>3</span>Idle
              </a>
            </li>
          </ul>
        </div>

        <div className="flex">
          <div>
            <a
              href="#"
              className="large-btn uppercase ff-serif f5-600 text-dark bg-white"
            >
              Explore
            </a>
          </div>

          <div className="flow" style={{ marginBottom: "50vh" }}>
            {/* <--tabs --> */}
            <div className="tab-list underline-indicator flex ">
              <button
                aria-selected="true"
                className="uppercase text-white ff-sans-cond bg-dark"
              >
                Moon
              </button>
              <button
                aria-selected="false"
                className="uppercase text-white ff-sans-cond bg-dark"
              >
                Mars
              </button>
              <button
                aria-selected="false"
                className="uppercase text-white ff-sans-cond bg-dark"
              >
                Aisa
              </button>
            </div>

            {/* //dots */}

            <div class="dot-indicators flex">
              <button aria-selected="true">
                <span className="sr-only">slide-1</span>
              </button>
              <button aria-selected="false">
                <span className="sr-only">slide-2</span>
              </button>
              <button aria-selected="false">
                <span className="sr-only">slide-3</span>
              </button>
            </div>
            <div class="circle-indicators flex">
              <button aria-selected="true">1</button>
              <button aria-selected="false">2</button>
              <button aria-selected="false">3</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Practice;
