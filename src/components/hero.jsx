import "../Styles/App.css";
const Herosection = () => {
  return (
    <section className="box">
      <div className="hero container">
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            Your Feet deserve the best and we're here to help you with our
            shoes.Step into style with our exclusive collection of shoes,
            designed to offer the perfect blend of comfort and fashion.
          </p>
        </div>
        <div className="hero-image">
          <img src="/images/shoe_image.png" alt="hero-image" />
        </div>
      </div>
      <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        <div className="shopping">
       <p>Also available on</p>
          <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon-logo" />
            <img src="/images/flipkart.png" alt="flipkart-logo" />
            </div>
          </div>
        </div>
  </section>
  );
};
export default Herosection;
