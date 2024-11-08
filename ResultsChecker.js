export default function resultsChecker(resultsForm) {
  // Show or hide specific icon and correct result if the userResult is not or equal to sysResult

  let correctAnswer = 0;

  const updatedResultsForm = resultsForm.map((item) => {
    // Hide Slash icon and set Ok icon visible
   
    if (Number(item.userResult) === item.sysResult) {
      correctAnswer += 1;
      return {
        ...item,
        iconSlashVisible: false,
        iconOkVisible: true,
        showSysResult: false,
        isChecked: true,
      };

    // Set the Slash icon and correct sysResult visible and hide Ok icon
    
    } else {
      return {
        ...item,
        iconSlashVisible: true,
        iconOkVisible: false,
        showSysResult: true,
        isChecked: true,
      };
    }
  });
  console.log("checked form", {updatedResultsForm})
console.log("this is correct", {correctAnswer})
  const checkedAnswers = correctAnswer;

  return { updatedResultsForm, checkedAnswers };
}
