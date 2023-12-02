import React from 'react'
import money from "../assets/image-currency.jpg"
import restaurant from "../assets/image-restaurant.jpg"
import travel from "../assets/image-plane.jpg"
import fun from "../assets/image-confetti.jpg"
function ArticlesSection() {
    const articles =[
        {
            image: money,
            auther: "By Claire Robinson",
            title: "Receive money in any currency with no fees",
            preif: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single ..."
        },
        {
            image: restaurant,
            auther: "By Wilson Hutton",
            title: "Treat yourself without worrying about money",
            preif: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ..."
        },
        {
            image: travel,
            auther: "By Wilson Hutton",
            title: "Take your Easybank card wherever you go",
            preif: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you ..."
        },
        {
            image: fun,
            auther: "By Claire Robinson",
            title:"Our invite-only Beta accounts are now live!",
            preif: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."
        }
    ]
  return (
    <div className='w-full flex flex-col justify-center items-center lg:items-start py-5 lg:py-32 px-3 lg:px-24 gap-10 bg-Very-Light-Gray'>
        <h1 className='text-Dark-Blue text-2xl lg:text-6xl'>Latest Articles</h1>
        <div className='w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-6 lg:items-start h-full'>
            {
                articles.map((article)=> (
                    <div className='flex flex-col justify-start items-center rounded-lg overflow-hidden lg:w-1/5 h-[450px] gap-4 bg-white pb-8'>
                        <img src={article.image} alt={article.title} className='w-full h-2/4' />
                        <div className='px-4 flex flex-col justify-center items-center gap-2'>
                            <h4 className='text-sm text-Grayish-Blue'>{article.auther}</h4>
                            <a href='#' className='text-xl text-Dark-Blue hover:text-Lime-Green'>{article.title}</a>
                            <p className='text-sm text-Grayish-Blue'>{article.preif}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ArticlesSection