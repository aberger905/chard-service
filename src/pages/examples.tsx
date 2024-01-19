import ArticleCard from "../components/articleCard"

const Examples = () => {
  const articles = [
  {image: 'https://journova.s3.us-east-2.amazonaws.com/Screen+Shot+2024-01-19+at+3.52.54+PM.png', title: "Margaret Chen: The Silent Guardian of Our Seaside Town's Heart and Soul", description: "Margaret Chen's story is deeply intertwined with our seaside town's heart and soul. Her dedicated volunteerism has become an integral part of our community", url: 'https://vistaworldnews.com/margaret-chen-the-silent-guardian-of-our-seaside-towns-heart-and-soul-54'},
   {image: 'https://journova.s3.us-east-2.amazonaws.com/Screen+Shot+2024-01-19+at+1.13.23+PM.png', title: "Robert Johnson: A Portrait of Resilience, Kindness, and Dedication", description: "My father, Robert Johnson, is the epitome of strength and kindness. His life story is one of resilience and dedication, which has always been a source of inspiration for our family", url: 'https://vistaworldnews.com/robert-johnson-a-portrait-of-resilience-kindness-and-dedication-52'},
   {image: 'https://journova.s3.us-east-2.amazonaws.com/Adolfo%20for%20Journova.png', title: "Adolfo Hernandez: A Champion of Customer Experience and Staff Empowerment", description: "Adolfo Hernandez, the Customer Experience Manager for a network of 130 stores, is being", url: 'https://vistaworldnews.com/adolfo-hernandez-a-champion-of-Customer-experience-and-staff-empowerment-53'},
   {image: 'https://journova.s3.us-east-2.amazonaws.com/Screen+Shot+2024-01-19+at+4.27.52+PM.png', title: "Celebrating 25 Years of Love and Adventure: The Inspiring Story of Mark and Susan Miller", description: "Twenty-five years ago, in the quaint, picturesque chapel of Maplewood, a pair of best friends embarked on the adventure of a lifetime. Mark and Susan Miller, arm in arm", url: 'https://vistaworldnews.com/celebrating-25-years-of-love-and-adventure-the-inspiring-story-of-mark-and-susan-miller-55'},
   {image: 'https://journova.s3.us-east-2.amazonaws.com/Screen+Shot+2024-01-19+at+4.49.44+PM.png', title: 'Jasmine Turner: A Journey of Resilience and Triumph', description: "Jasmine Turner, a recent graduate of Lincoln University, stands as an embodiment of academic excellence and an unyielding spirit of resilience.", url: 'https://vistaworldnews.com/jasmine-turner-a-journey-of-resilience-and-triumph-56'},
   {image: 'https://journova.s3.us-east-2.amazonaws.com/TM%20image%20for%20Media1.jpg', title: "B. Ryan Teller: Launches 'Think Mortally! A Survival Guide for Young Adults" , description: "Many parents often worry, 'Did I teach my kids the basics of how to survive in the world or did I just protect them?' B. Ryan Teller, a father to two college graduates, found himself reflecting on this very question. This prompted him to pen down a book titled 'Think Mortally! A Survival Guide for Young Adults'.", url: 'https://vistaworldnews.com/b-ryan-teller-launches-think-mortally-a-survival-guide-for-young-adults-32'}
   ]


  return (
    <>
    <div className='flex flex-col justify-center items-center min-h-screen bg-gradient-to-t from-gray-300 to white'>
      <div>
      <h1 className='text-2xl font-anton p-3'>Editor's Recent Top Picks</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center p-4 fadeUp">
      {articles.map((article, index) => (
        <div className='flex justify-center items-center'>
         <ArticleCard key={index} image={article.image} title={article.title} description={article.description} url={article.url}/>
        </div>
      ))}
      </div>
    </div>
    </>
  )
}

export default Examples;