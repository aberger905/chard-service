import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchArticle from '../../utils/fetchArticle';
import { Tabs } from 'antd';
import RevisionFooter from '../../components/revisionSubmit';
const { TabPane } = Tabs;

interface Article {
  title: string;
  content: string;
  plan: string;
  revised: any;
  image: any;
  published: any;
  author: string;
}

const RevisionPreview = () => {
  const [article, setArticle] = useState<Article | null>(null);
  const { slug } = useParams();

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
      <h1 className='text-3xl font-anton'>Article Previews: Original and Revised</h1>
      <p className=''>Explore both the original and revised versions of your article. Carefully review each to see the changes and ensure they meet your expectations. Once satisfied, please agree to our publication policy, a crucial step for us to proceed with publicizing your article on our news platforms.</p>
      </div>
          <Tabs defaultActiveKey="2">
          <TabPane tab="Original Article" key="1">
          <div className='w-full max-w-[50rem] border rounded-lg p-3 sm:p-10 bg-white shadow-lg fadeUp mb-5'>
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
              <div className='mb-5 flex flex-col sm:flex-row'>
                <div>
                <p><strong>{article && article.author} </strong>| {article && article.published ? 'Vista World News' : 'Publication Name' }</p>
                <p className='text-sm text-gray-700'>Published {new Date(Date.now()).toDateString()}</p>
                </div>
                { article && <div className='border rounded-lg border-green-600 p-3 ml-3'>
                  <h1 className='text-green-600 text-center text-2xl'>{article.published ? 'Published' : 'Approved for Publication'}</h1>
                </div> }
              </div>
              {article && article.image && (
                <div className='flex justify-center items-center mb-5'>
                <img className="max-h-96 w-full border rounded-lg" src={article?.image} alt='header'/>
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
          </TabPane>
          <TabPane tab="Revised Article" key="2">
          <div className='w-full max-w-[50rem] border rounded-lg p-3 sm:p-10 bg-white shadow-lg fadeUp mb-5'>
              <div>
              { article ? <h1 className='text-3xl font-bold mb-5'>{article ? article.revised.title : ''}</h1> :
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
              <div className='mb-5 flex flex-col sm:flex-row'>
                <div>
                <p><strong>{article && article.author} </strong>| {article && article.published ? 'Vista World News' : 'Publication Name'}</p>
                <p className='text-sm text-gray-700'>Published {new Date(Date.now()).toDateString()}</p>
                </div>
                { article && <div className='border rounded-lg border-green-600 p-3 ml-3'>
                  <h1 className='text-green-600 text-center text-2xl'>{article.published ? 'Published' : 'Approved for Publication'}</h1>
                </div> }
              </div>
              {article && article.image && (
                  <div className='flex justify-center items-center mb-5'>
                  <img className="max-h-96 w-full border rounded-lg" src={article?.image} alt='header'/>
                </div>
                )}
              <div>
                {article ? article.revised.content.map((paragraph: string, index: number) => (
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
          </TabPane>
        </Tabs>
        { article && article.published === false && <RevisionFooter /> }
    </div>
    </div>
    </>
  )
}

export default RevisionPreview;