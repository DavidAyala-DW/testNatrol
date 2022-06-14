import React from 'react'
import More from "../public/more.svg"
import Less from "../public/less.svg"

const data = {

  left: [

    {
      question: "WHY EREDITÀ?",
      answer: "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor"
    },

    {
      question: "REVIEWS",
      answer: "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor"
    },

    {
      question: "Nullam maximus nulla eu viverra tempor. Donec?",
      answer: "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor"
    },

    {
      question: "Nullam maximus nulla eu viverra tempor. Donec?",
      answer: "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor"
    }

  ],

  right: [

    {
      question: "SHIPPING & RETURNS",
      answer: "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor"
    },
      
    {
      question: "Nullam maximus nulla eu viverra tempor. Donec?",
      answer: "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor"
    },
  
    {
      question: "Nullam maximus nulla eu viverra tempor. Donec?",
      answer: "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor"
    },
  
    {
      question: "Nullam maximus nulla eu viverra tempor. Donec?",
      answer: "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor"
    },
  
    {
      question: "Nullam maximus nulla eu viverra tempor. Donec?",
      answer: "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor"
    }

  ]

}



function FAQ() {

  function handleOpenQuestion(e){

    const target = e.target;
    const more = target.querySelector(".more");
    const less = target.querySelector(".less");
    const answer = target.parentElement.parentElement.querySelector(".answer");

    if(target.classList.contains("!bg-[#001C71]")){

      target.classList.remove("!bg-[#001C71]")
      less.classList.remove("!block");
      more.classList.remove("!hidden");

      answer.classList.remove("!visible");
      answer.classList.remove("!max-h-[130px]");

    }else{

      target.classList.add("!bg-[#001C71]")
      less.classList.add("!block");
      more.classList.add("!hidden");

      answer.classList.add("!visible");
      answer.classList.add("!max-h-[130px]");

    }

  }

  return (

    <section className="px-6 lg:px-0 lg:max-w-[80%] mx-auto py-20 bg-white flex flex-col w-full">

      <h2 className="text-primary uppercase text-center mb-6 text-2xl lg:text-[32px] leading-7 tracking-[.145em] font-black">
        FAQS
      </h2>

      <div className="flex flex-col space-y-[26px] lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-[22px] w-full">

        <div className="flex flex-col h-max space-y-[26px]">

          {
            data["left"].map((data,index)=> {

              const {question,answer} = data;

              return (

                <div key={index} className="pt-11 transition-[max-height] pb-[50px] px-8 rounded-[16px] shadow-[0px_5px_16px_rgba(8,_15,_52,_0.06)] w-full flex flex-col space-y-1.5">

                  <div className="flex w-full items-center justify-between">

                    <h3 className="text-sm 2xs:text-lg select-none font-semibold leading-7 text-primary max-w-[180px] 2xs:max-w-[270px] sm:max-w-[403px]">
                      {question}
                    </h3>
          
                    <div onClick={e => handleOpenQuestion(e)} className="h-[41px] w-[41px] bg-[#F7F7FF] rounded-lg flex items-center justify-center cursor-pointer">
                      <More className="more block pointer-events-none"/>
                      <Less className=" hidden less pointer-events-none"/>
                    </div>

                  </div>

                  <p className="max-h-0 select-none answer transition-[max-height] invisible max-w-[430px] text-[#6F6C90] text-sm 2xs:text-lg leading-[30px]">
                    {answer}
                  </p>
        
                </div>

              )
            })
          }

        </div>

        <div className="flex flex-col space-y-[26px]">

          {
            data["right"].map((data,index)=> {

              const {question,answer} = data; 
              
              return (

                <div key={index} className="pt-11 transition-[max-height] pb-[50px] px-8 rounded-[16px] shadow-[0px_5px_16px_rgba(8,_15,_52,_0.06)] w-full flex flex-col space-y-1.5">

                  <div className="flex w-full items-center justify-between">

                    <h3 className="text-sm 2xs:text-lg select-none font-semibold leading-7 text-primary max-w-[180px] 2xs:max-w-[270px] sm:max-w-[403px]">
                      {question}
                    </h3>
          
                    <div onClick={e => handleOpenQuestion(e)} className="h-[41px] w-[41px] bg-[#F7F7FF] rounded-lg flex items-center justify-center cursor-pointer">
                      <More className="more block pointer-events-none"/>
                      <Less className=" hidden less pointer-events-none"/>
                    </div>

                  </div>

                  <p className="max-h-0 select-none answer transition-[max-height] invisible max-w-[430px] text-[#6F6C90] text-sm 2xs:text-lg leading-[30px]">
                    {answer}
                  </p>
        
                </div>

              )
            })
          }
          
        </div>

      </div>

    </section>

  )

}

export default FAQ