import { useSQLiteContext } from 'expo-sqlite';
import { useState } from 'react';

export const useSaveResults = () => {
const db = useSQLiteContext();
const [dbResults, setDbResults] = useState([]);
const [dbDetailedResults, setDbDetailedDbResults] = useState([]);



const saveMathResultsToDB = async (correctAnswers, taskSelection)=> {
    try {
      await db.runAsync('INSERT INTO mathStatistics (mathTaskId, mathTaskName, correctAnswers) VALUES (?, ?, ?)', [taskSelection.taskNumber, taskSelection.name, correctAnswers]);
        
      console.log('Data saved successfully.');
    
      await fetchMathResultsFromDB();
    } catch (error) {
        console.error('Could not add item', error);
      }
    
    };

 const fetchMathResultsFromDB = async () => {
        
        try {
          const results = await db.getAllAsync('SELECT * FROM mathStatistics');
          console.log('Fetched data:', results); // Logs all rows from the table
         } catch (error) {
          console.error('Could not fetch data', error);
        }
      };
      
 const resultsStatistics= async()=>{
    try{
        const results = await db.getAllAsync(`
            SELECT mathTaskId, mathTaskName,
                COUNT(*) AS attempts,
                SUM(correctAnswers) AS totalCorrectAnswers,
                ROUND(SUM(correctAnswers) * 100 / (10 * COUNT(*)), 0) AS averagePercentage
            FROM mathStatistics
            GROUP BY mathTaskId, mathTaskName
          `);
          setDbResults(results);
          console.log('Attempts:', results);
    }catch(error){
        console.error('There is no results fetched', error);
    }

 }   


 const detailedStatistics= async()=>{
  try{
      const results = await db.getAllAsync(`
          SELECT mathTaskId, mathTaskName,
              COUNT(*) AS total_attempts,
              ROUND((COUNT(CASE WHEN correctAnswers = 10 THEN 1 END) * 100.0 / COUNT(*)), 2) AS all_correct,
              ROUND((COUNT(CASE WHEN correctAnswers = 9 THEN 1 END) * 100.0 / COUNT(*)), 2) AS nine_correct,
              ROUND((COUNT(CASE WHEN correctAnswers = 8 THEN 1 END) * 100.0 / COUNT(*)), 2) AS eight_correct,
              ROUND((COUNT(CASE WHEN correctAnswers = 7 THEN 1 END) * 100.0 / COUNT(*)), 2) AS seven_correct,
              ROUND((COUNT(CASE WHEN correctAnswers < 7 THEN 1 END) * 100.0 / COUNT(*)), 2) AS less_correct
          FROM mathStatistics
          GROUP BY mathTaskId, mathTaskName
        `);
        setDbDetailedDbResults(results);
        console.log('Detailed Results:', results);
  }catch(error){
      console.error('There is no Detailed results fetched', error);
  }

}   



    return { saveMathResultsToDB, resultsStatistics, dbResults, detailedStatistics, dbDetailedResults };
}; 

    

