import Interest from "./interest";


interface CategoryProps{

}


const Category: React.FC<CategoryProps> = () => {
    const interests = [
      { title: 'Book 1', author: 'Author 1' },
      { title: 'Book 2', author: 'Author 2' },
      { title: 'Book 3', author: 'Author 3' },
      { title: 'Jesse' , author: 'Soteria'}
    ];
  
    return (
      <div className="flex flex-nowrap p-8 pl-9 bg-custom-beige bg-opacity-30">
        {interests.map((interest, index) => (
          <Interest
            key={index}
            title={interest.title}
            author={interest.author}
          />
        ))}
      </div>
    );
  };
  
  export default Category;