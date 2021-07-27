function Button(props) {
  const { className, buttonText } = props;
  //below line little bit doubt
  return <button className={`button ${className}`}>{buttonText}</button>;
}

const element = (
  <div className="social-button-container">
    <div className="content-container">
      <h1 className="heading">social button</h1>
      <div className="buttons-container">
        <Button className="like-button" buttonText="Like" />
        <Button className="comment-button" buttonText="Comment" />
        <Button className="share-button" buttonText="Share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
