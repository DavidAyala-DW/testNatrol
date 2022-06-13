import React from 'react'

function Footer() {
  return (

    <footer className="bg-primary px-6 sm:px-[50px] xl:px-20 pt-[70px] pb-11 text-[#e9ebf2]">

      <div className="flex flex-col">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-12">

          <div className="flex flex-col">

            <h3 className="mb-5 uppercase text-[15px] tracking-[.2em] font-bold leading-[1.65]">
              Contact
            </h3>

            <div className="flex flex-col mb-4 text-[15px] leading-[1.65] font-normal">

              <p className="font-bold">Eredità Eyewear Group Inc.</p>
              <p>1920 Clements Road</p>
              <p>Pickering, ON</p>
              <p>L1W 3V6</p>
              <p>Canada</p>

            </div>

            <div className="flex flex-col mb-4 text-[15px] leading-[1.65] font-normal">
              
              <p>Support:</p>
              <p>sales@ereditaeyewear.com</p>
              <p>orders@ereditaeyewear.com</p>
              <p>1-855-793-EYES </p>

            </div>

            <div className="flex items-center space-x-7">

              <div className="flex fle-col h-[30px] w-[30px] justify-center items-center rounded-full bg-white">
                <svg width="16" height="16" viewBox="0 0 9 17">
                  <path d="M5.842 17V9.246h2.653l.398-3.023h-3.05v-1.93c0-.874.246-1.47 1.526-1.47H9V.118C8.718.082 7.75 0 6.623 0 4.27 0 2.66 1.408 2.66 3.994v2.23H0v3.022h2.66V17h3.182z"></path>
                </svg>
              </div>

              <div className="flex fle-col h-[30px] w-[30px] justify-center items-center rounded-full bg-white">
                <svg role="presentation" width="16" height="16" viewBox="0 0 32 32">
                  <path d="M15.994 2.886c4.273 0 4.775.019 6.464.095 1.562.07 2.406.33 2.971.552.749.292 1.283.635 1.841 1.194s.908 1.092 1.194 1.841c.216.565.483 1.41.552 2.971.076 1.689.095 2.19.095 6.464s-.019 4.775-.095 6.464c-.07 1.562-.33 2.406-.552 2.971-.292.749-.635 1.283-1.194 1.841s-1.092.908-1.841 1.194c-.565.216-1.41.483-2.971.552-1.689.076-2.19.095-6.464.095s-4.775-.019-6.464-.095c-1.562-.07-2.406-.33-2.971-.552-.749-.292-1.283-.635-1.841-1.194s-.908-1.092-1.194-1.841c-.216-.565-.483-1.41-.552-2.971-.076-1.689-.095-2.19-.095-6.464s.019-4.775.095-6.464c.07-1.562.33-2.406.552-2.971.292-.749.635-1.283 1.194-1.841s1.092-.908 1.841-1.194c.565-.216 1.41-.483 2.971-.552 1.689-.083 2.19-.095 6.464-.095zm0-2.883c-4.343 0-4.889.019-6.597.095-1.702.076-2.864.349-3.879.743-1.054.406-1.943.959-2.832 1.848S1.251 4.473.838 5.521C.444 6.537.171 7.699.095 9.407.019 11.109 0 11.655 0 15.997s.019 4.889.095 6.597c.076 1.702.349 2.864.743 3.886.406 1.054.959 1.943 1.848 2.832s1.784 1.435 2.832 1.848c1.016.394 2.178.667 3.886.743s2.248.095 6.597.095 4.889-.019 6.597-.095c1.702-.076 2.864-.349 3.886-.743 1.054-.406 1.943-.959 2.832-1.848s1.435-1.784 1.848-2.832c.394-1.016.667-2.178.743-3.886s.095-2.248.095-6.597-.019-4.889-.095-6.597c-.076-1.702-.349-2.864-.743-3.886-.406-1.054-.959-1.943-1.848-2.832S27.532 1.247 26.484.834C25.468.44 24.306.167 22.598.091c-1.714-.07-2.26-.089-6.603-.089zm0 7.778c-4.533 0-8.216 3.676-8.216 8.216s3.683 8.216 8.216 8.216 8.216-3.683 8.216-8.216-3.683-8.216-8.216-8.216zm0 13.549c-2.946 0-5.333-2.387-5.333-5.333s2.387-5.333 5.333-5.333 5.333 2.387 5.333 5.333-2.387 5.333-5.333 5.333zM26.451 7.457c0 1.059-.858 1.917-1.917 1.917s-1.917-.858-1.917-1.917c0-1.059.858-1.917 1.917-1.917s1.917.858 1.917 1.917z"></path>
                </svg>
              </div>

              <div className="flex fle-col h-[30px] w-[30px] justify-center items-center rounded-full bg-white">
                <svg width="16" height="16" role="presentation" viewBox="0 0 24 24">
                  <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V8h3v11zM6.5 6.73a1.76 1.76 0 1 1 0-3.53 1.76 1.76 0 0 1 0 3.53zM20 19h-3v-5.6c0-3.37-4-3.12-4 0V19h-3V8h3v1.76a3.8 3.8 0 0 1 7 2.48V19z"></path>
                </svg>
              </div>

            </div>

          </div>

          <div className="flex flex-col">

            <h3 className="mb-5 uppercase text-[15px] tracking-[.2em] font-bold leading-[1.65]">
              Quick links
            </h3>

            <div className="flex flex-col mb-4 text-[15px] leading-[1.65] font-normal space-y-3">

              <p>Shop All Frames</p>
              <p>Search</p>
              <p>FAQ</p>
              <p>Our Heritage</p>
              <p>Thoughts & Insights</p>
              <p>Contact</p>
              <p>Book An Appointment</p>

            </div>

          </div>

          <div className="flex flex-col">

            <h3 className="mb-5 uppercase text-[15px] tracking-[.2em] font-bold leading-[1.65]">
              Terms & Conditions
            </h3>

            <div className="flex flex-col mb-4 text-[15px] leading-[1.65] font-normal space-y-3">

              <p>Terms of Service</p>
              <p>Refund Policy</p>
              <p>Privacy Policy</p>
              <p>Shipping Policy</p>

            </div>

          </div>

          <div className="flex flex-col">

            <h3 className="mb-5 uppercase text-[15px] tracking-[.2em] font-bold leading-[1.65]">
              Open an account
            </h3>

            <div className="flex flex-col mb-4 text-[15px] leading-[1.65] font-normal">

              <p className="max-w-[250px] mb-5">
                Get exclusive pricing on all our brands, volume discounts, plus partnership opportunities aimed at growing your business.
              </p>

              <span className="italic underline">
                Apply for a Wholesale Account
              </span>

            </div>

          </div>

        </div>

        <div className="w-full flex flex-col space-y-10 md:space-y-0 md:flex-row items-start md:items-center justify-start md:justify-between pt-10 md:pt-[50px] lg:pt-[100px] xl:pt-[150px] pr-14">

          <p className="text-xs">© 2021 Eredità Eyewear Group Inc. | Branding & Website by SC</p>


        </div>

      </div>

    </footer>

  )
}

export default Footer