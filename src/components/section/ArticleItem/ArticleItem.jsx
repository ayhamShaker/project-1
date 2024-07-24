import "./ArticleItem.css";
import art from "../../assets/images/art.jpg";
import Download from "../../Download/Download";

const ArticleItem = () => {
  return (
    <article className=" container d-flex flex-column align-items-center bg-light">
      <div className="display">
        <h3 className="p-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quod
        </h3>
        <img width="600" height="500" src={art} alt="Article 1 image" />
      </div>
      <header className="p-4 text-center ">
        <span>
          <a
            href="https://cdn.pixabay.com/photo/2023/11/16/22/35/church-8393259_1280.jpg"
            target="_blank"
          >
            View Image 4k
          </a>{" "}
          <span>•</span>{" "}
          <a>
            <Download />
          </a>
        </span>
        <h4 className="pt-1">
          <a href="#">Go to article</a>
        </h4>
        <div>
          <div>
            <a href="#">Show Comments</a>
          </div>
        </div>
      </header>
    </article>
  );
};

export default ArticleItem;
