import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { useEffect, useState } from 'react';
import { datadogRum } from '@datadog/browser-rum';

const Home: React.FC = () => {
  const [counter, setCounter] = useState(0);

  // Simulate frequent network activity
  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger RUM events frequently
      datadogRum.addAction('periodic_check', { counter });
      
      // Increase counter
      setCounter(prev => prev + 1);
      
      // Log for debugging
      console.log('Periodic check', counter);
      
      // Make a fetch request to generate network activity
      fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log('Fetch result:', json))
        .catch(error => console.error('Fetch error:', error));
        
    }, 5000); // Every 5 seconds
    
    return () => clearInterval(interval);
  }, [counter]);

  const triggerErrorEvent = () => {
    datadogRum.addError(new Error('Test error'));
  };

  const triggerUserAction = () => {
    datadogRum.addAction('user_clicked', { buttonName: 'Action Button' });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Capacitor URL Request Test</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Capacitor URL Request Test</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <div className="container">
          <h2>Counter: {counter}</h2>
          
          <IonButton expand="full" onClick={triggerUserAction}>
            Trigger User Action
          </IonButton>
          
          <IonButton expand="full" color="danger" onClick={triggerErrorEvent}>
            Trigger Error
          </IonButton>
          
          <ExploreContainer />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
