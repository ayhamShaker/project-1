import "./ArticleItem.css";
import art from "../assets/images/art.jpg";
import Download from "../Download/Download";

const ArticleItem = () => {
  return (
    <article className=" container d-flex flex-column align-items-center bg-light">
      <div>
        <img width="100%" height="461" src={art} alt="Article 1 image" />
      </div>
      <header className="p-4 ">
        <span>
          <a
            href="https://pixabay.com/photos/church-cathedral-towers-cuenca-8393259/"
            target="_blank"
          >
            View Image
          </a>{" "}
          <span>•</span>{" "}
          <a>
            <Download />
          </a>
        </span>
        <h2>
          <a href="#">Go to article</a>
        </h2>
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
