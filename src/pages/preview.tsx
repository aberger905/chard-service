import React, { useState, useEffect } from 'react';
import fetchArticle from '../utils/fetchArticle';
import ArticleFooter from '../components/submitFooter';

interface Article {
  title: string;
  content: string;
}

const Preview = () => {
  const [article, setArticle]= useState<Article | null>(null)

  useEffect(() => {

  const getArticle = async () => {
    try {
      const result = await fetchArticle();
      localStorage.setItem('title', JSON.stringify(result.title))
      setArticle(result);
    } catch (e) {
      throw new Error('error in preview fetching article')
    }
  }

  getArticle();

  }, [])

  return (
    <>
    <div className=' bg-gradient-to-t from-purple-300 to white min-h-screen'>
    <div className='flex flex-col justify-center items-center'>
      <div className='w-[90%] sm:w-[50rem] mb-5 mt-5 fadeUp'>
      <h1 className='text-3xl font-semibold'>Article Preview</h1>
      <p className=''>Here is your basic article preview! Please read over the content carefully to ensure it aligns with your expectations. Once you are ready, we ask that you agree to our publication policy. This step is essential before we can publish your article to one of our partnered news platforms for public viewing. </p>
      </div>
      <div className='w-[90%] sm:w-[50rem] border rounded-lg p-2 bg-white shadow-lg fadeUp mb-36'>
      <div>
      <h1 className='text-3xl font-bold mb-5'>{article ? article.title : ''}</h1>
      </div>
      <div className='mb-5'>
        <p><strong>Author Name </strong>| The Daily Times</p>
        <p className='text-sm text-gray-700'>Published {new Date(Date.now()).toDateString()}</p>
      </div>
      <div>
        {article ? JSON.parse(article.content).map((paragraph: string, index: number) => (
          <React.Fragment key={index}>
          <p>{paragraph}</p>
          <br />
          </React.Fragment>
        )) : ''}
      </div>
      </div>
    </div>
    <ArticleFooter />
    </div>
    </>
  )
}

export default Preview;