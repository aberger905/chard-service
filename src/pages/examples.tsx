import ArticleCard from "../components/articleCard"

const Examples = () => {
  const articles = [{image: 'https://journova.s3.us-east-2.amazonaws.com/6F38D054-0DF9-4CA0-AFFC-2CA253768E22.jpeg', title: "Luke Athens: A Melody of Perseverance and Dreams", description: "Born as Francis Steven Villanueva, Luke Athens has a story that trails from suburban childhood in Drexel Hill, Pennsylvania to the bustling life of Philadelphia. His journey is filled with lessons, trials, and a passion that fuels his dreams of making a hit song."}, {image: 'https://journova.s3.us-east-2.amazonaws.com/lifeCoach.jpeg', title: "The Journey of Personal Growth: Emma Clarkson's Story", description: "Emma Clarkson, a 34-year-old life coach based in San Diego, has not always held her current empowering role. In fact, just five years ago, she was an account manager at a large marketing firm, living a life that, according to her, 'looked successful on the outside but felt increasingly hollow on the inside.'"}, {image: 'https://journova.s3.us-east-2.amazonaws.com/Sports-Highlight.jpeg', title: "Alec Berger: Storying Life Through Film", description: "Alec Berger's journey through the world of video editing and production is a testament to the power of passion. From his early days of editing short films to his current venture, Human Athlete, Berger's life has been intricately woven with the threads of film and sports."}, {image: 'https://journova.s3.us-east-2.amazonaws.com/dev.jpeg', title: 'Charting Uncharted Waters: The Entrepreneurial Journey of Marcus Johnson', description: "Marcus Johnson is not your typical 32-year-old. The tech entrepreneur has taken the uncertain and exhilarating world of startups by storm, proving that dreams can indeed be turned into reality. 'I always harbored a dream to start something of my own, something innovative that could make a tangible difference,' says Johnson."}, {image: 'https://journova.s3.us-east-2.amazonaws.com/TM%20image%20for%20Media1.jpg', title: "B. Ryan Teller: Launches 'Think Mortally! A Survival Guide for Young Adults" , description: "Many parents often worry, 'Did I teach my kids the basics of how to survive in the world or did I just protect them?' B. Ryan Teller, a father to two college graduates, found himself reflecting on this very question. This prompted him to pen down a book titled 'Think Mortally! A Survival Guide for Young Adults'."}, {image: 'https://journova.s3.us-east-2.amazonaws.com/Poodle%20%28Miniature%292.jpeg', title: "Isabel García: Painting with a Purpose", description: "Isabel García, a 31-year-old artist living in Barcelona, has been painting her way to self-discovery. Her art is not just about colors and shapes on a canvas; it's a journey of finding her voice and identity."}]


  return (
    <>
    <div className='flex flex-col justify-center items-center min-h-screen bg-gradient-to-t from-gray-300 to white'>
      <div >
      <h1 className='text-2xl font-anton p-3'>Editor's Recent Top Picks</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center p-4">
      {articles.map((article, index) => (
        <div className='flex justify-center items-center'>
         <ArticleCard key={index} image={article.image} title={article.title} description={article.description}/>
        </div>
      ))}
      </div>
    </div>
    </>
  )
}

export default Examples;