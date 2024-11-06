export default function generateTasks(selected) {
  const task = selected;
  const newExamples = [];

  console.log("selected value is:", task.taskNumber);

  switch (parseInt(task.taskNumber)) {
    case 1: //"Addition within 10"
      for (let i = 0; i < 10; i++) {
        let newExample;
        let isDuplicate;
        do {
          const number1 = Math.floor(Math.random() * 9) + 1;
          const number2 = Math.floor(Math.random() * (10 - number1)) + 1;
          const result = number1 + number2;

          newExample = {
            firstNum: number1,
            mathSign: "+",
            secondNum: number2,
            sysResult: result,
            userResult: "",
          };

          const exampleIdentifier = `${newExample.firstNum}${newExample.secondNum}`;

          isDuplicate = newExamples.some(
            (example) =>
              `${example.firstNum}${example.secondNum}` === exampleIdentifier
          );
        } while (isDuplicate);

        newExamples.push(newExample);
      }
      break;

    case 2: //"Subtraction within 10"
      for (let i = 0; i < 10; i++) {
        let newExample;
        let isDuplicate;
        do {
          const number_1 = Math.floor(Math.random() * 10) + 1;
          const number_2 = Math.floor(Math.random() * (10 - number_1)) + 1;

          let number1, number2, result;

          if (number_1 > number_2) {
            number1 = number_1;
            number2 = number_2;
            result = number_1 - number_2;
          } else {
            number1 = number_2;
            number2 = number_1;
            result = number_2 - number_1;
          }

          newExample = {
            firstNum: number1,
            mathSign: "-",
            secondNum: number2,
            sysResult: result,
            userResult: "",
          };

          const exampleIdentifier = `${newExample.firstNum}${newExample.secondNum}`;

          isDuplicate = newExamples.some(
            (example) =>
              `${example.firstNum}${example.secondNum}` === exampleIdentifier
          );
        } while (isDuplicate);

        newExamples.push(newExample);
      }
      break;

    case 3: //"Addition and Subtraction within 10"
      for (let i = 0; i < 10; i++) {
        let newExample;
        let isDuplicate;
        do {
          const number1 = Math.floor(Math.random() * 9) + 1;
          const number2 = Math.floor(Math.random() * (10 - number1)) + 1;
          const sign = number1 > number2 ? "-" : "+";
          const result = sign === "+" ? number1 + number2 : number1 - number2;

          newExample = {
            firstNum: number1,
            mathSign: sign,
            secondNum: number2,
            sysResult: result,
            userResult: "",
          };
          const exampleIdentifier = `${newExample.firstNum}${newExample.mathSign}${newExample.secondNum}`;
          isDuplicate = newExamples.some(
            (example) =>
              `${example.firstNum}${example.mathSign}${example.secondNum}` ===
              exampleIdentifier
          );
        } while (isDuplicate);
        newExamples.push(newExample);
      }
      break;

    case 4: //"Addition within 10-20 (without regrouping over ten)"
      for (let i = 0; i < 10; i++) {
        let newExample;
        let isDuplicate;

        do {
          const number1 = Math.floor(Math.random() * 9) + 10;
          const number2 = Math.floor(Math.random() * (20 - number1)) + 1;
          const result = number1 + number2;

          newExample = {
            firstNum: number1,
            mathSign: "+",
            secondNum: number2,
            sysResult: result,
            userResult: "",
          };

          const exampleIdentifier = `${newExample.firstNum}${newExample.secondNum}`;

          isDuplicate = newExamples.some(
            (example) =>
              `${example.firstNum}${example.secondNum}` === exampleIdentifier
          );
        } while (isDuplicate);

        newExamples.push(newExample);
      }
      break;

    case 5: //"Subtraction within 10-20 (without regrouping over ten)"
      for (let i = 0; i < 10; i++) {
        let newExample;
        let isDuplicate;
        do {
          const number1 = Math.floor(Math.random() * 10) + 11;
          const number2 = Math.floor(Math.random() * (number1 - 10)) + 1;
          const result = number1 - number2;

          newExample = {
            firstNum: number1,
            mathSign: "-",
            secondNum: number2,
            sysResult: result,
            userResult: "",
          };

          const exampleIdentifier = `${newExample.firstNum}${newExample.secondNum}`;

          isDuplicate = newExamples.some(
            (example) =>
              `${example.firstNum}${example.secondNum}` === exampleIdentifier
          );
        } while (isDuplicate);

        newExamples.push(newExample);
      }
      break;

    case 6: //"Addition and Subtraction within 10-20 (without regrouping over ten)"
      for (let i = 0; i < 10; i++) {
        let newExample;
        let isDuplicate;
        do {
          const number_1 = Math.floor(Math.random() * 9) + 1;
          const number_2 = Math.floor(Math.random() * (10 - number_1)) + 1;
          const sign = number_1 > number_2 ? "-" : "+";

          let number1, number2, result;

          if (number_1 > number_2) {
            number1 = number_1 + 10;
            number2 = number_2;
            result = number_1 + 10 - number_2;
          } else {
            number1 = number_1;
            number2 = number_2 + 10;
            result = number_2 + 10 + number_1;
          }

          newExample = {
            firstNum: number1,
            mathSign: sign,
            secondNum: number2,
            sysResult: result,
            userResult: "",
          };
          const exampleIdentifier = `${newExample.firstNum}${newExample.mathSign}${newExample.secondNum}`;
          isDuplicate = newExamples.some(
            (example) =>
              `${example.firstNum}${example.mathSign}${example.secondNum}` ===
              exampleIdentifier
          );
        } while (isDuplicate);
        newExamples.push(newExample);
      }
      break;

    case 7: //"Addition and Subtraction within 100 (without regrouping over tens)"
      for (let i = 0; i < 10; i++) {
        let newExample;
        let isDuplicate;

        do {
          const tensNum = (Math.floor(Math.random() * 9) + 1) * 10;
          const number_1 = Math.floor(Math.random() * 9) + 1;
          const number_2 = Math.floor(Math.random() * (10 - number_1)) + 1;
          const sign = number_1 > number_2 ? "-" : "+";

          let number1, number2, result;

          if (number_1 > number_2) {
            number1 = tensNum + number_1;
            number2 = number_2;
            result = tensNum + number_1 - number_2;
          } else {
            number1 = number_1;
            number2 = number_2 + tensNum;
            result = number_2 + tensNum + number_1;
          }

          newExample = {
            firstNum: number1,
            mathSign: sign,
            secondNum: number2,
            sysResult: result,
            userResult: "",
          };
          const exampleIdentifier = `${newExample.firstNum}${newExample.mathSign}${newExample.secondNum}`;
          isDuplicate = newExamples.some(
            (example) =>
              `${example.firstNum}${example.mathSign}${example.secondNum}` ===
              exampleIdentifier
          );
        } while (isDuplicate);
        newExamples.push(newExample);
      }
      break;

    case 8: //"Addition within 1-20 (with regrouping over ten)"
      for (let i = 0; i < 10; i++) {
        let newExample;
        let isDuplicate;

        do {
          const number1 = Math.floor(Math.random() * 20) + 1;
          const number2 = Math.floor(Math.random() * (20 - number1)) + 1;
          const result = number1 + number2;

          newExample = {
            firstNum: number1,
            mathSign: "+",
            secondNum: number2,
            sysResult: result,
            userResult: "",
          };

          const exampleIdentifier = `${newExample.firstNum}${newExample.secondNum}`;

          isDuplicate = newExamples.some(
            (example) =>
              `${example.firstNum}${example.secondNum}` === exampleIdentifier
          );
        } while (isDuplicate);

        newExamples.push(newExample);
      }
      break;

    case 9: //"Subtraction within 1-20 (with regrouping over ten)"
      for (let i = 0; i < 10; i++) {
        let newExample;
        let isDuplicate;
        do {
          const number_1 = Math.floor(Math.random() * 20) + 1;
          const number_2 = Math.floor(Math.random() * (20 - number_1)) + 1;

          let number1, number2, result;

          if (number_1 > number_2) {
            number1 = number_1;
            number2 = number_2;
            result = number_1 - number_2;
          } else {
            number1 = number_2;
            number2 = number_1;
            result = number_2 - number_1;
          }

          newExample = {
            firstNum: number1,
            mathSign: "-",
            secondNum: number2,
            sysResult: result,
            userResult: "",
          };

          const exampleIdentifier = `${newExample.firstNum}${newExample.secondNum}`;

          isDuplicate = newExamples.some(
            (example) =>
              `${example.firstNum}${example.secondNum}` === exampleIdentifier
          );
        } while (isDuplicate);

        newExamples.push(newExample);
      }
      break;

    case 10: //"Addition and Subtraction within 1-20 (with regrouping over ten)"
      for (let i = 0; i < 10; i++) {
        let newExample;
        let isDuplicate;
        do {
          const number1 = Math.floor(Math.random() * 20) + 1;
          const number2 = Math.floor(Math.random() * (20 - number1)) + 1;
          const sign = number1 > number2 ? "-" : "+";
          const result = sign === "+" ? number1 + number2 : number1 - number2;

          newExample = {
            firstNum: number1,
            mathSign: sign,
            secondNum: number2,
            sysResult: result,
            userResult: "",
          };

          const exampleIdentifier = `${newExample.firstNum}${newExample.mathSign}${newExample.secondNum}`;
          isDuplicate = newExamples.some(
            (example) =>
              `${example.firstNum}${example.mathSign}${example.secondNum}` ===
              exampleIdentifier
          );
        } while (isDuplicate);
        newExamples.push(newExample);
      }
      break;

    case 11: //"Addition and Subtraction within 100 (with regrouping over tens)"
      for (let i = 0; i < 10; i++) {
        let newExample;
        let isDuplicate;
        do {
          const number1 = Math.floor(Math.random() * 100) + 1;
          const number2 = Math.floor(Math.random() * (100 - number1)) + 1;
          const sign = number1 > number2 ? "-" : "+";
          const result = sign === "+" ? number1 + number2 : number1 - number2;

          newExample = {
            firstNum: number1,
            mathSign: sign,
            secondNum: number2,
            sysResult: result,
            userResult: "",
          };

          const exampleIdentifier = `${newExample.firstNum}${newExample.mathSign}${newExample.secondNum}`;
          isDuplicate = newExamples.some(
            (example) =>
              `${example.firstNum}${example.mathSign}${example.secondNum}` ===
              exampleIdentifier
          );
        } while (isDuplicate);
        newExamples.push(newExample);
      }
      break;

    case 12: //"Multiplication within 1-10"
      for (let i = 0; i < 10; i++) {
        let newExample;
        let isDuplicate;
        do {
          const number1 = Math.floor(Math.random() * 9) + 2;
          const number2 = Math.floor(Math.random() * (10 - number1)) + 2;
          const result = number1 * number2;

          newExample = {
            firstNum: number1,
            mathSign: "*",
            secondNum: number2,
            sysResult: result,
            userResult: "",
          };

          const exampleIdentifier = `${newExample.firstNum}${newExample.secondNum}`;

          isDuplicate = newExamples.some(
            (example) =>
              `${example.firstNum}${example.secondNum}` === exampleIdentifier
          );
        } while (isDuplicate);

        newExamples.push(newExample);
      }
      break;

    case 13: //"Division within 1-10"
      for (let i = 0; i < 10; i++) {
        let newExample;
        let isDuplicate;
        do {
          const number1 = Math.floor(Math.random() * 9) + 2;
          const number2 = Math.floor(Math.random() * (10 - number1)) + 2;
          const multResult = number1 * number2;
          const result = multResult / number1;

          newExample = {
            firstNum: multResult,
            mathSign: "/",
            secondNum: number1,
            sysResult: result,
            userResult: "",
          };

          const exampleIdentifier = `${newExample.firstNum}${newExample.secondNum}`;

          isDuplicate = newExamples.some(
            (example) =>
              `${example.firstNum}${example.secondNum}` === exampleIdentifier
          );
        } while (isDuplicate);

        newExamples.push(newExample);
      }
      break;

    case 14: //"Multiplication and Division within 1-10"
      for (let i = 0; i < 10; i++) {
        let newExample;
        let isDuplicate;
        do {
          const number_1 = Math.floor(Math.random() * 8) + 2;
          const number_2 = Math.floor(Math.random() * (9 - number_1)) + 2;
          const multResult = number_1 * number_2;
          const sign = Math.random() < 0.5 ? "*" : "/";

          let number1, number2, result;

          if (sign === "*") {
            result = multResult;
            number1 = number_1;
            number2 = number_2;
          } else {
            result = multResult / number_2;
            number1 = multResult;
            number2 = number_2;
          }

          newExample = {
            firstNum: number1,
            mathSign: sign,
            secondNum: number2,
            sysResult: result,
            userResult: "",
          };
          const exampleIdentifier = `${newExample.firstNum}${newExample.mathSign}${newExample.secondNum}`;
          isDuplicate = newExamples.some(
            (example) =>
              `${example.firstNum}${example.mathSign}${example.secondNum}` ===
              exampleIdentifier
          );
        } while (isDuplicate);
        newExamples.push(newExample);
      }
      break;

    case 15: //"Multiplying by a single digit number"
      for (let i = 0; i < 10; i++) {
        let newExample;
        let isDuplicate;
        do {
          const number1 = Math.floor(Math.random() * 90) + 10;
          const number2 = Math.floor(Math.random() * 8) + 2;
          const result = number1 * number2;

          newExample = {
            firstNum: number1,
            mathSign: "*",
            secondNum: number2,
            sysResult: result,
            userResult: "",
          };

          const exampleIdentifier = `${newExample.firstNum}${newExample.secondNum}`;

          isDuplicate = newExamples.some(
            (example) =>
              `${example.firstNum}${example.secondNum}` === exampleIdentifier
          );
        } while (isDuplicate);

        newExamples.push(newExample);
      }
      break;

    case 16: //"Division by a single digit number"
      for (let i = 0; i < 10; i++) {
        let newExample;
        let isDuplicate;
        do {
          const number1 = Math.floor(Math.random() * 40) + 11;
          const number2 = Math.floor(Math.random() * 8) + 2;
          const multResult = number1 * number2;
          const result = multResult / number2;

          newExample = {
            firstNum: multResult,
            mathSign: "/",
            secondNum: number2,
            sysResult: result,
            userResult: "",
          };

          const exampleIdentifier = `${newExample.firstNum}${newExample.secondNum}`;

          isDuplicate = newExamples.some(
            (example) =>
              `${example.firstNum}${example.secondNum}` === exampleIdentifier
          );
        } while (isDuplicate);

        newExamples.push(newExample);
      }
      break;

    case 17: //"Multiplying and Division by a single digit number"
      for (let i = 0; i < 10; i++) {
        let newExample;
        let isDuplicate;
        do {
          const number_1 = Math.floor(Math.random() * 20) + 11;
          const number2 = Math.floor(Math.random() * 8) + 2;
          const multResult = number_1 * number2;
          const sign = Math.random() < 0.5 ? "*" : "/";

          let number1, result;

          if (sign === "*") {
            number1 = number_1;
            result = multResult;
          } else {
            number1 = multResult;
            result = multResult / number2;
          }

          newExample = {
            firstNum: number1,
            mathSign: sign,
            secondNum: number2,
            sysResult: result,
            userResult: "",
          };
          const exampleIdentifier = `${newExample.firstNum}${newExample.mathSign}${newExample.secondNum}`;
          isDuplicate = newExamples.some(
            (example) =>
              `${example.firstNum}${example.mathSign}${example.secondNum}` ===
              exampleIdentifier
          );
        } while (isDuplicate);
        newExamples.push(newExample);
      }
      break;

    case 18: //"Tasks on the order of operations"
      //first line 5+9/3
      let newExample1;
      const number1Ex1 = Math.floor(Math.random() * 10) + 1;
      const number2Ex1 = Math.floor(Math.random() * 9) + 2;
      const number3Ex1 = Math.floor(Math.random() * 9) + 2;

      let multipResultEx1 = number2Ex1 * number3Ex1;
      const divisionResultEx1 = multipResultEx1 / number3Ex1;
      const resultEx1 = number1Ex1 + divisionResultEx1;

      newExample1 = {
        firstNum: number1Ex1,
        mathSign: "+",
        secondNum: multipResultEx1,
        thirdNum: "/  " + number3Ex1,
        sysResult: resultEx1,
        userResult: "",
      };

      //second line 31+(4*9)
      let newExample2;
      const number1Ex2 = Math.floor(Math.random() * 90) + 10;
      const number2Ex2 = Math.floor(Math.random() * 9) + 2;
      const number3Ex2 = Math.floor(Math.random() * 9) + 2;

      let resultEx2 = number1Ex2 - number2Ex2 * number3Ex2;
      if (resultEx2 < 0) {
        resultEx2 = number1Ex2 + number2Ex2 * number3Ex2;
        newExample2 = {
          firstNum: number1Ex2,
          mathSign: "+",
          secondNum: "( " + number2Ex2,
          thirdNum: "*  " + number3Ex2 + " )",
          sysResult: resultEx2,
          userResult: "",
        };
      } else {
        newExample2 = {
          firstNum: number1Ex2,
          mathSign: "-",
          secondNum: "( " + number2Ex2,
          thirdNum: "*  " + number3Ex2 + " )",
          sysResult: resultEx2,
          userResult: "",
        };
      }
      //third line 8*(10-6)
      let newExample3;
      const number1Ex3 = Math.floor(Math.random() * 9) + 2;
      const number2Ex3 = Math.floor(Math.random() * 9) + 2;
      const number3Ex3 = Math.floor(Math.random() * 9) + 2;
      let resultEx3 = number3Ex3 * (number1Ex3 - number2Ex3);
      if (resultEx3 < 0) {
        resultEx3 = number3Ex3 * (number1Ex3 + number2Ex3);

        newExample3 = {
          firstNum: number3Ex3,
          mathSign: "*",
          secondNum: "( " + number1Ex3,
          thirdNum: "+  " + number2Ex3 + " )",
          sysResult: resultEx3,
          userResult: "",
        };
      } else {
        newExample3 = {
          firstNum: number3Ex3,
          mathSign: "*",
          secondNum: "( " + number1Ex3 + "  -",
          thirdNum: number2Ex3 + " )",
          sysResult: resultEx3,
          userResult: "",
        };
      }
      //fourth line (43+7)/5
      let newExample4;
      const number1Ex4 = Math.floor(Math.random() * 9) + 10;
      const number2Ex4 = Math.floor(Math.random() * 9) + 2;
      const number3Ex4 = Math.floor(Math.random() * 6) + 2;
      const preDevisionEx4 = number1Ex4 * number3Ex4;
      const number4Ex4 = preDevisionEx4 - number2Ex4;

      let resultEx4 = (number4Ex4 + number2Ex4) / number3Ex4;
      newExample4 = {
        firstNum: "( " + number4Ex4,
        mathSign: "+",
        secondNum: number2Ex4 + " )",
        thirdNum: "/  " + number3Ex4,
        sysResult: resultEx4,
        userResult: "",
      };

      //fifth line 73+56/7-76
      let newExample5;
      const number1Ex5 = Math.floor(Math.random() * 80) + 10;
      const number2Ex5 = Math.floor(Math.random() * 9) + 2;
      const number3Ex5 = Math.floor(Math.random() * 6) + 2;
      const number4Ex5 = Math.floor(Math.random() * 70) + 10;
      const preDevisionEx5 = number2Ex5 * number3Ex5;
      let resultEx5 = number1Ex5 + preDevisionEx5 / number3Ex5 - number4Ex5;
      if (resultEx5 > 0) {
        newExample5 = {
          firstNum: number1Ex5,
          mathSign: "+",
          secondNum: preDevisionEx5 + "  /",
          thirdNum: number3Ex5 + "  -",
          fourthNum: number4Ex5,
          sysResult: resultEx5,
          userResult: "",
        };
      } else {
        resultEx5 = number4Ex5 + preDevisionEx5 / number3Ex5 - number1Ex5;
        newExample5 = {
          firstNum: number4Ex5,
          mathSign: "+",
          secondNum: preDevisionEx5 + "  /",
          thirdNum: number3Ex5 + "  -",
          fourthNum: number1Ex5,
          sysResult: resultEx5,
          userResult: "",
        };
      }

      //sixth line 6*9-14:2
      let newExample6;
      const number1Ex6 = Math.floor(Math.random() * 9) + 2;
      const number2Ex6 = Math.floor(Math.random() * 9) + 2;
      const number3Ex6 = Math.floor(Math.random() * 9) + 2;
      const number4Ex6 = Math.floor(Math.random() * 9) + 2;
      const preDevisionEx6 = number3Ex6 * number4Ex6;
      let resultEx6 = number1Ex6 * number2Ex6 - preDevisionEx6 / number4Ex6;

      if (resultEx6 > 0) {
        newExample6 = {
          firstNum: number1Ex6,
          mathSign: "*",
          secondNum: number2Ex6 + "  -",
          thirdNum: preDevisionEx6 + "  /",
          fourthNum: number4Ex6,
          sysResult: resultEx6,
          userResult: "",
        };
      } else {
        resultEx6 = number1Ex6 * number2Ex6 + preDevisionEx6 / number4Ex6;
        newExample6 = {
          firstNum: number1Ex6,
          mathSign: "*",
          secondNum: number2Ex6 + "  +",
          thirdNum: preDevisionEx6 + "  /",
          fourthNum: number4Ex6,
          sysResult: resultEx6,
          userResult: "",
        };
      }

      //seventh line 8*6+(18-10)
      let newExample7;
      const number1Ex7 = Math.floor(Math.random() * 9) + 2;
      const number2Ex7 = Math.floor(Math.random() * 9) + 2;
      const number3Ex7 = Math.floor(Math.random() * 9) + 2;
      const number4Ex7 = Math.floor(Math.random() * 9) + 2;
      let resultEx7 = number1Ex7 * number2Ex7 + (number3Ex7 - number4Ex7);

      if (number3Ex7 - number4Ex7 > 0) {
        newExample7 = {
          firstNum: number1Ex7,
          mathSign: "*",
          secondNum: number2Ex7 + "  +",
          thirdNum: "(" + number3Ex7 + "  -",
          fourthNum: number4Ex7 + ")",
          sysResult: resultEx7,
          userResult: "",
        };
      } else {
        resultEx7 = number1Ex7 * number2Ex7 + (number4Ex7 - number3Ex7);
        newExample7 = {
          firstNum: number1Ex7,
          mathSign: "*",
          secondNum: number2Ex7 + "  +",
          thirdNum: "(" + number4Ex7 + "  -",
          fourthNum: number3Ex7 + ")",
          sysResult: resultEx7,
          userResult: "",
        };
      }
      //eighth line 46+4*(7-3)
      let newExample8;
      const number1Ex8 = Math.floor(Math.random() * 9) + 2;
      const number2Ex8 = Math.floor(Math.random() * 9) + 2;
      const number3Ex8 = Math.floor(Math.random() * 9) + 2;
      const number4Ex8 = Math.floor(Math.random() * 9) + 2;
      let resultEx8 = number1Ex8 + number2Ex8 * (number3Ex8 - number4Ex8);

      if (number3Ex8 - number4Ex8 > 0) {
        newExample8 = {
          firstNum: number1Ex8,
          mathSign: "+",
          secondNum: number2Ex8 + "  *",
          thirdNum: "(" + number3Ex8 + "  -",
          fourthNum: number4Ex8 + ")",
          sysResult: resultEx8,
          userResult: "",
        };
      } else {
        resultEx8 = number1Ex8 + number2Ex8 * (number4Ex8 - number3Ex8);
        newExample8 = {
          firstNum: number1Ex8,
          mathSign: "+",
          secondNum: number2Ex8 + "  *",
          thirdNum: "(" + number4Ex8 + "  -",
          fourthNum: number3Ex8 + ")",
          sysResult: resultEx8,
          userResult: "",
        };
      }

      //ninth line 5*(9-7):2
      let newExample9;
      const number1Ex9 = Math.floor(Math.random() * 9) + 2;
      const number2Ex9 = Math.floor(Math.random() * 9) + 2;
      const number3Ex9 = Math.floor(Math.random() * 9) + 2;
      const number4Ex9 = Math.floor(Math.random() * 9) + 2;
      const preSubtractionEx9 = number2Ex9 + number3Ex9;
      const preDevisionEx9 = number1Ex9 * number4Ex9;
      let resultEx9 = (preDevisionEx9 * number3Ex9) / number1Ex9;

      newExample9 = {
        firstNum: preDevisionEx9,
        mathSign: "*",
        secondNum: "(" + preSubtractionEx9 + "  -",
        thirdNum: +number2Ex9 + ")  /",
        fourthNum: number1Ex9,
        sysResult: resultEx9,
        userResult: "",
      };
      //tenth line (11+8*3):5
      let newExample10;
      const number1Ex10 = Math.floor(Math.random() * 5) + 2;
      const number2Ex10 = Math.floor(Math.random() * 5) + 2;
      const number3Ex10 = Math.floor(Math.random() * 9) + 2;
      const number4Ex10 = Math.floor(Math.random() * 5) + 2;
      const preDevision_1Ex10 = number1Ex10 * number4Ex10;

      const preDevision_2Ex10 =
        number3Ex10 * number4Ex10 + preDevision_1Ex10 * number2Ex10;

      let resultEx10 =
        (number3Ex10 * number4Ex10 + preDevision_1Ex10 * number2Ex10) /
        number4Ex10;

      newExample10 = {
        firstNum: "(" + number3Ex10 * number4Ex10,
        mathSign: "+",
        secondNum: preDevision_1Ex10 + "  *",
        thirdNum: number2Ex10 + ")  /",
        fourthNum: number4Ex10,
        sysResult: resultEx10,
        userResult: "",
      };

      newExamples.push(
        newExample1,
        newExample2,
        newExample3,
        newExample4,
        newExample5,
        newExample6,
        newExample7,
        newExample8,
        newExample9,
        newExample10
      );
      break;

    case 19: //"Addition and subtraction of three-digit numbers"
      for (let i = 0; i < 10; i++) {
        let newExample;
        let isDuplicate;
        do {
          const number1 = Math.floor(Math.random() * 900) + 100;
          const number2 = Math.floor(Math.random() * 900) + 100;
          const sign = number1 > number2 ? "-" : "+";
          const result = sign === "+" ? number1 + number2 : number1 - number2;

          newExample = {
            firstNum: number1,
            mathSign: sign,
            secondNum: number2,
            sysResult: result,
            userResult: "",
          };

          const exampleIdentifier = `${newExample.firstNum}${newExample.mathSign}${newExample.secondNum}`;
          isDuplicate = newExamples.some(
            (example) =>
              `${example.firstNum}${example.mathSign}${example.secondNum}` ===
              exampleIdentifier
          );
        } while (isDuplicate);
        newExamples.push(newExample);
      }
      break;

    case 20: //"Addition and subtraction of multi-digit numbers"
      for (let i = 0; i < 10; i++) {
        let newExample;
        let isDuplicate;
        do {
          const number1 = Math.floor(Math.random() * 90000) + 1000;
          const number2 = Math.floor(Math.random() * 90000) + 1000;
          const sign = number1 > number2 ? "-" : "+";
          const result = sign === "+" ? number1 + number2 : number1 - number2;

          newExample = {
            firstNum: number1,
            mathSign: sign,
            secondNum: number2,
            sysResult: result,
            userResult: "",
          };

          const exampleIdentifier = `${newExample.firstNum}${newExample.mathSign}${newExample.secondNum}`;
          isDuplicate = newExamples.some(
            (example) =>
              `${example.firstNum}${example.mathSign}${example.secondNum}` ===
              exampleIdentifier
          );
        } while (isDuplicate);
        newExamples.push(newExample);
      }
      break;

    case 21: //"Multiplying by a two-digit number"
      for (let i = 0; i < 10; i++) {
        let newExample;
        let isDuplicate;
        do {
          const number1 = Math.floor(Math.random() * 90) + 10;
          const number2 = Math.floor(Math.random() * 90) + 10;
          const result = number1 * number2;

          newExample = {
            firstNum: number1,
            mathSign: "*",
            secondNum: number2,
            sysResult: result,
            userResult: "",
          };

          const exampleIdentifier = `${newExample.firstNum}${newExample.secondNum}`;

          isDuplicate = newExamples.some(
            (example) =>
              `${example.firstNum}${example.secondNum}` === exampleIdentifier
          );
        } while (isDuplicate);

        newExamples.push(newExample);
      }
      break;

    case 22: //"Division by a two-digit number"
      for (let i = 0; i < 10; i++) {
        let newExample;
        let isDuplicate;
        do {
          const number1 = Math.floor(Math.random() * 5) + 1;
          const number2 = Math.floor(Math.random() * 90) + 10;
          const multResult = number1 * number2;
          const result = multResult / number2;

          newExample = {
            firstNum: multResult,
            mathSign: "/",
            secondNum: number2,
            sysResult: result,
            userResult: "",
          };

          const exampleIdentifier = `${newExample.firstNum}${newExample.secondNum}`;

          isDuplicate = newExamples.some(
            (example) =>
              `${example.firstNum}${example.secondNum}` === exampleIdentifier
          );
        } while (isDuplicate);

        newExamples.push(newExample);
      }
      break;

    case 23: //"Multiplying and Division by a two-digit number"
      for (let i = 0; i < 10; i++) {
        let newExample;
        let isDuplicate;
        do {
          const number_1 = Math.floor(Math.random() * 90) + 10;
          const numberDevis = Math.floor(Math.random() * 4) + 1;
          const number2 = Math.floor(Math.random() * 90) + 10;

          const preDevision = numberDevis * number2;
          const sign = Math.random() < 0.5 ? "*" : "/";

          let number1, result;

          if (sign === "*") {
            number1 = number_1;
            result = number_1 * number2;
          } else {
            number1 = preDevision;
            result = preDevision / number2;
          }

          newExample = {
            firstNum: number1,
            mathSign: sign,
            secondNum: number2,
            sysResult: result,
            userResult: "",
          };
          const exampleIdentifier = `${newExample.firstNum}${newExample.mathSign}${newExample.secondNum}`;
          isDuplicate = newExamples.some(
            (example) =>
              `${example.firstNum}${example.mathSign}${example.secondNum}` ===
              exampleIdentifier
          );
        } while (isDuplicate);
        newExamples.push(newExample);
      }
      break;

    default:
      // Code for any other cases
      console.log("Unknown task selected");
  }
  return newExamples;
}
