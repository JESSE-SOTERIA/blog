interface InterestProps {
    title: string;
    author: string;
  }
  
  const Interest: React.FC<InterestProps> = ({ title, author }) => {
    return (
      <div className="h-25 m-5 p-3 rounded-full">
        <h3>{title}</h3>
        <p>{author}</p>
      </div>
    );
  };
  
  export default Interest;