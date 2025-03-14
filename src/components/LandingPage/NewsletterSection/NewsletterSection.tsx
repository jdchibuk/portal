import React from "react";
import Newsletter from "../../Common/Newsletter/Newsletter";

const NewsletterSection: React.FC = () => {
  return (
    <section
      className="mt-20 mb-20 md:mt-30 md:mb-30 container-12"
      id="subscribe"
    >
      <div className="bg-gradient-100 from-[#3B00B9] to-[#2586B6DE] rounded-xl md:rounded-[32px] overflow-hidden relative">
        <div className="pl-6 md:pl-0 md:absolute right-0 top-0 bottom-0 flex ml-auto justify-end">
          <img
            src="/img/home/newsletter-home.webp"
            alt="Subscribe to newsletter"
            loading="lazy"
            className="object-contain object-right"
          />
        </div>
        <div className="container-10 flex items-center w-full">
          <div className="relative mt-6 md:max-w-[600px] mr-auto mb-10 md:my-20">
            <h2 className="text-white tw-heading-5 md:tw-heading-4 mb-6 md:mb-8 md:pr-10">
              Sign up for email updates{" "}
              <span className="text-white-60">
                to keep up to date with the Internet Computer
              </span>
            </h2>
            <form
              method="post"
              action="https://dfinity.us16.list-manage.com/subscribe/post?u=33c727489e01ff5b6e1fb6cc6&amp;id=7e9469a315&amp;f_id=00bac2e1f0"
              className=""
            >
              <input
                type="text"
                placeholder="Email"
                className="input-text input-text-white w-full mb-3"
                name="EMAIL"
                required
              />
              <button className="button-white">Get updates</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
