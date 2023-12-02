import React from 'react';
import iconOnline from '../assets/icon-online.svg';
import iconBudgeting from '../assets/icon-budgeting.svg';
import iconOnboarding from '../assets/icon-onboarding.svg';
import iconApi from '../assets/icon-api.svg';

function ChooseUs() {
  const reasons = [
    {
      icon: iconOnline,
      heading: 'Online Banking',
      text: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
    },
    {
      icon: iconBudgeting,
      heading: 'Simple Budgeting',
      text: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.',
    },
    {
      icon: iconOnboarding,
      heading: 'Fast Onboarding',
      text: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.',
    },
    {
      icon: iconApi,
      heading: 'Open API',
      text: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
    },
  ];

  return (
    <div className='bg-Light-Grayish-Blue py-5 lg:py-32 w-full flex flex-col justify-center items-center lg:items-start gap-5 lg:gap-20 px-3 lg:px-24'>

      <div className='flex flex-col justify-center items-center lg:items-start gap-4'>

        <h2 className='text-Dark-Blue text-2xl lg:text-6xl'>
          Why choose Easybank?
        </h2>

        <p className='text-Grayish-Blue text-center lg:text-left w-5/6 lg:w-4/6'>
          We leverage Open Banking to turn your bank account
          into your financial hub. Control your finances like never before.
        </p>

      </div>

      <div className='flex flex-col justify-center items-center lg:flex-row lg:justify-between'>
        
        {reasons.map((reason) => (
          <div key={reason.heading} className='flex flex-col justify-center items-center lg:items-start gap-5 lg:w-1/5'>
            
            <img src={reason.icon} alt={reason.heading}  className=''/>
            <h3 className='text-Dark-Blue text-lg lg:text-2xl'>{reason.heading}</h3>
            <p className='text-Grayish-Blue w-10/12 text-center lg:text-left'>{reason.text}</p>

          </div>
        ))}

      </div>
    </div>
  );
}

export default ChooseUs;
