import "./Article.css";
import art from "../assets/images/art.jpg";
const Article = () => {
  return (
    <div>
      <article className="d-flex flex-column align-items-center bg-light">
        <div>
          <a
            href="#"
            title="3D Geometric Shapes – Outlines / Wireframes (57 Free PNG)"
          >
            <img
              width="810"
              height="461"
              src={art}
              alt="Article 1 image"
              loading="lazy"
              sizes="(max-width: 810px) 100vw, 810px"
            />{" "}
          </a>
        </div>

        <header className="entry-header p-4">
          <span className="meta-category">
            <a href="#" className="category-5">
              Freebies
            </a>{" "}
            <span>•</span>{" "}
            <a href="#" className="category-13">
              Packs
            </a>
          </span>
          <h2 className="entry-title">
            <a
              href="#"
              title="3D Geometric Shapes – Outlines / Wireframes (57 Free PNG)"
            >
              3D Geometric Shapes – Outlines / Wireframes (57 Free PNG)
            </a>
          </h2>
          <div className="entry-meta">
            <div className="meta-item comments">
              <a href="#">2 Comments</a>
            </div>
          </div>
        </header>

        <div className="entry-content p-3">
          <p>
            These free primitive 3D geometric shapes come in 3 different line
            sizes (1/10/20px). Blow your designs. Enjoy!
          </p>
        </div>
      </article>
    </div>
  );
};

export default Article;
