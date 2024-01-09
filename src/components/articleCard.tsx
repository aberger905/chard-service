
interface Props {
  image: string;
  title: string;
  description: string;
}


const ArticleCard = ({ image, title, description}: Props) => {
  // const image = 'https://journova.s3.us-east-2.amazonaws.com/dev.jpeg'
  // const title = 'Charting Uncharted Waters: The Entrepreneurial Journey of Marcus Johnson'
  // const description = 'Marcus Johnson is not your typical 32-year-old. The tech entrepreneur has taken the uncertain and exhilarating world of startups by storm, proving that dreams can indeed be turned into reality.'
  const url = '/'

  return (
    <>
    <div className='border bg-white rounded-lg w-[90%] sm:w-64 shadow-lg'>
    <div
      className="w-full h-48 bg-cover bg-center bg-no-repeat border rounded-tl-lg rounded-tr-lg"
      style={{ backgroundImage: `url(${image})` }}
    >
    </div>
    <div className='p-3'>
    <h1 className='font-bold'>{title}</h1>
    <p className='text-sm'>{description.slice(0,100)}...</p>
    <a href={url} className='text-sm font-bold text-gray-700'>GO TO ARTICLE</a>
    </div>
    </div>
    </>
  )
}

export default ArticleCard;