import { useSQLiteContext } from 'expo-sqlite';

export const useSaveResults = () => {
const db = useSQLiteContext();
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
      
    return { saveMathResultsToDB };
}; 

    

