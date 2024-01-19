import ArticleCard from "../components/articleCard"

const Examples = () => {
  const articles = [
  {image: 'https://journova.s3.us-east-2.amazonaws.com/Screen+Shot+2024-01-19+at+3.52.54+PM.png', title: "Margaret Chen: The Silent Guardian of Our Seaside Town's Heart and Soul", description: "Margaret Chen's story is deeply intertwined with our seaside town's heart and soul. Her dedicated volunteerism has become an integral part of our community", url: 'https://vistaworldnews.com/margaret-chen-the-silent-guardian-of-our-seaside-towns-heart-and-soul-54'},
   {image: 'https://journova.s3.us-east-2.amazonaws.com/Screen+Shot+2024-01-19+at+1.13.23+PM.png', title: "Robert Johnson: A Portrait of Resilience, Kindness, and Dedication", description: "My father, Robert Johnson, is the epitome of strength and kindness. His life story is one of resilience and dedication, which has always been a source of inspiration for our family", url: 'https://vistaworldnews.com/robert-johnson-a-portrait-of-resilience-kindness-and-dedication-52'},
   {image: 'https://journova.s3.us-east-2.amazonaws.com/Adolfo%20for%20Journova.png', title: "Adolfo Hernandez: A Champion of Customer Experience and Staff Empowerment", description: "Adolfo Hernandez, the Customer Experience Manager for a network of 130 stores, is being", url: 'https://vistaworldnews.com/adolfo-hernandez-a-champion-of-Customer-experience-and-staff-empowerment-53'},
   {image: 'https://journova.s3.us-east-2.amazonaws.com/painting.jpeg', title: "Isabel García: Painting with a Purpose", description: "Isabel García, a 31-year-old artist living in Barcelona, has been painting her way to self-discovery. Her art is not just about colors and shapes on a canvas; it's a journey of finding her voice and identity.", url: 'https://vistaworldnews.com/isabel-garcia-painting-with-a-purpose-17'},
   {image: 'https://journova.s3.us-east-2.amazonaws.com/rock%20climbing.jpeg', title: 'Scaling Heights: The Resilient Journey of Miles Anderson from Rock Bottom to Rock Climbing Mentor', description: "Life is much like rock climbing – it's full of ups and downs, and the strength to overcome lies within us,\" says Miles Anderson, 36, whose life story is a testament to this metaphor. Overcoming professional and personal hurdles, Anderson's tale is one of grit and determination.", url: 'https://vistaworldnews.com/scaling-heights-the-resilient-journey-of-miles-anderson-from-rock-bottom-to-rock-climbing-mentor-34'},
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