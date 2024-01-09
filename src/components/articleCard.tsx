import { Link } from 'react-router-dom';
interface Props {
  image: string;
  title: string;
  description: string;
  url: string;
}


const ArticleCard = ({ image, title, description, url}: Props) => {

  return (
    <>
    <div className='border bg-white rounded-lg w-[90%] sm:w-64 shadow-lg'>
      <Link to={url}>
    <div
      className="w-full h-48 bg-cover bg-center bg-no-repeat border rounded-tl-lg rounded-tr-lg"
      style={{ backgroundImage: `url(${image})` }}
    >
    </div>
    <div className='p-3'>
    <h1 className='font-bold'>{title}</h1>
    <p className='text-sm'>{description.slice(0,100)}...</p>
    <p className='text-sm font-bold text-gray-700'>GO TO ARTICLE</p>
    </div>
    </Link>
    </div>
    </>
  )
}

export default ArticleCard;