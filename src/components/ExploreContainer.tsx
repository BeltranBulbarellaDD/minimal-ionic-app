import './ExploreContainer.css';


const ExploreContainer: React.FC = () => {
    console.log('ExploreContainer component rendered');
  return (
    <div id="container">
      <strong>Ready to create an app?</strong>
      <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
        <button id="next" onClick={() => {
            console.log('Next button clicked2');
        }}>Next</button>
    </div>
  );
};

export default ExploreContainer;
