/* eslint-disable no-alert */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MyRoutes from '../routes';
import * as Action from '../actions/index';
import getStandings from '../modules/apicall';
import Header from './background';

function App() {
  const dispatch = useDispatch();

  const addScoreToStore = async () => {
    const scoreObject = await getStandings();
    const scoreList = scoreObject.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    scoreList.forEach(score => {
      dispatch(Action.createScore(score));
    });
  };

  useEffect(() => {
    addScoreToStore();
  }, []);

  return (
    <React.StrictMode>
      <Header />
      <MyRoutes />
    </React.StrictMode>
  );
}

export default App;
