import React, { useState, useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useParams, Link } from 'react-router-dom';
import fetchArticle from '../utils/fetchArticle';


interface Article {
  title: string;
  content: string;
  plan: string;
  image: any;
}

const MyArticle = () => {
  const [article, setArticle] = useState<Article | null>(null);
  const { slug } = useParams();
  const componentRef: any = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'My-News-Article',
  })


  useEffect(() => {

    const getArticle = async () => {
      try {
        const result = await fetchArticle(slug);
        localStorage.setItem('title', JSON.stringify(result.title));
        setArticle(result);
      } catch (e) {
        console.error('Error in preview fetching article', e);

      }
    };


    const match = slug?.match(/-(\d+)$/);
    if (match) {
      const number = parseInt(match[1], 10);
      localStorage.setItem('articleId', JSON.stringify(number));
    } else {
      console.log("No number found at the end of the string");
    }


    getArticle();

  }, []);


  return (
    <>
    <div className=' bg-gradient-to-t from-gray-300 to white min-h-screen'>
    <div className='flex flex-col justify-center items-center'>
      <div className='w-[90%] sm:w-[50rem] mb-5 mt-5 fadeUp'>
      <h1 className='text-3xl font-anton'>My Article</h1>
      <p className=''>Welcome to your personalized article space! Below you'll find the final version of your story. You now have the option to save or print your article for personal keeping.</p>
      <button onClick={handlePrint} className='border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition rounded-lg p-2 text-sm mt-3'>Save and Print</button>
      </div>
      <div ref={componentRef} className='w-[90%] sm:w-[50rem] border rounded-lg p-3 sm:p-10 bg-white shadow-lg fadeUp mb-5'>
      <div>
      { article ? <h1 className='text-3xl font-bold mb-5'>{article ? article.title : ''}</h1> :
                <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-6 py-1">
                  <div className="h-2 bg-slate-700 rounded"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                      <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                    </div>
                  </div>
                </div>
              </div>
              }
      </div>
      <div className='mb-5 flex'>
        <div>
        <p><strong>Author Name </strong>| { article && article.plan === 'article' ? 'Journova' : 'Vista World News'}</p>
        <p className='text-sm text-gray-700'>Published {new Date(Date.now()).toDateString()}</p>
        </div>
      </div>
        {article && article.image && (
          <div className='flex justify-center items-center mb-5'>
          <div className="h-96 w-full bg-cover bg-center border rounded-lg" style={{ backgroundImage: `url(${article?.image})` }}>
        </div>
        </div>
        )}
      <div>
        {article ? JSON.parse(article.content).map((paragraph: string, index: number) => (
          <React.Fragment key={index}>
          <p>{paragraph}</p>
          <br />
          </React.Fragment>
        )) :
        <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-6 py-1">
          <div className="h-1 bg-slate-700 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-1 bg-slate-700 rounded col-span-2"></div>
              <div className="h-1 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div className="h-1 bg-slate-700 rounded"></div>
            <div className="grid grid-cols-3 gap-3">
              <div className="h-1 bg-slate-700 rounded col-span-1"></div>
              <div className="h-1 bg-slate-700 rounded col-span-2"></div>
            </div>
            <div className="h-1 bg-slate-700 rounded"></div>
          </div>
          <div className="h-1 bg-slate-700 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-1 bg-slate-700 rounded col-span-2"></div>
              <div className="h-1 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div className="h-1 bg-slate-700 rounded"></div>
            <div className="grid grid-cols-3 gap-3">
              <div className="h-1 bg-slate-700 rounded col-span-1"></div>
              <div className="h-1 bg-slate-700 rounded col-span-2"></div>
            </div>
            <div className="h-1 bg-slate-700 rounded"></div>
          </div>
          <div className="h-1 bg-slate-700 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-1 bg-slate-700 rounded col-span-2"></div>
              <div className="h-1 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div className="h-1 bg-slate-700 rounded"></div>
            <div className="grid grid-cols-3 gap-3">
              <div className="h-1 bg-slate-700 rounded col-span-1"></div>
              <div className="h-1 bg-slate-700 rounded col-span-2"></div>
            </div>
            <div className="h-1 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
        }
      </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default MyArticle;